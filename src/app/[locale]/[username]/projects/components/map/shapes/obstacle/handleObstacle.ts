export default function makeHandleObstacle(
    { turf, generateUUID, polygon, addPolygonToGrid } : 
    { turf: any, generateUUID: Function, polygon: Function, addPolygonToGrid: Function}){
    return(Object.freeze({
        handleObstacle,
        makeObstacle,
        restoreAffectedAreas,
        findIntersectedGrids
    }))
    
    function makeObstacle({ context, event } : { context: any, event: any}) {
        const obstacle = {
            id: generateUUID(),
            shape: polygon({ context }),
            intersectionGrids: [],
            cache: {}
        }
        obstacle.shape.dragging.enable()
        context.mainFeatureGroup.addLayer(obstacle.shape)
        const latlngs = obstacle.shape.getLatLngs()[0].map((ll:any) => [ll.lng, ll.lat])
        
        latlngs.push(latlngs[0]);

        const turfShape = turfPolygon(obstacle.shape, obstacle.cache)
        
        obstacle.intersectionGrids = findIntersectedGrids(turfShape, context.grids)
        
        context.obstacles.push(obstacle)

        return {
            obstacles: context.obstacles
        }
    }
    
    function handleObstacle({ context, event } : { context: any, event:any }) {
        const contextObstacle = event.obstacle;
        const latlngs = event.target.getLatLngs()[0].map((ll:any) => [ll.lng, ll.lat])
        latlngs.push(latlngs[0]);
        const movingShape = turf.polygon([latlngs]);
        contextObstacle.intersectionGrids = findIntersectedGrids(movingShape, context.grids)
        
    }

    function findIntersectedGrids(movingShape: any, grids: any) {
        const intersections: any = []
        grids.forEach((grid: any) => {
  
            grid.gridFeatureGroup.eachLayer(function(layer: any) {
                console.log(layer)
                const intersection = findIntersections(layer, movingShape, grid)
                if (intersection) {
                    intersections.push({
                        gridId: grid.gridId,
                        coordinates: layer.getLatLngs()})
                }
            });
        })

        return intersections;
    }

    function findIntersections(layer: any, movingShape: any, grid: any) {
        let layerGeoJSON = layer.toGeoJSON();
        let intersection = turf.intersect(movingShape, layerGeoJSON)
        
        if (intersection) {
            grid.gridFeatureGroup.removeLayer(layer)
            return intersection
        }
    }

    function restoreAffectedAreas({ context, event } : { context: any, event: any }) {
        const obstacleIntersections = JSON.stringify(event.obstacle.intersectionGrids)
        const intersectionGrids = JSON.parse(obstacleIntersections);
        const nObstacle = { id: event.obstacle.id, shape: event.obstacle.shape, intersectionGrids }
        const intersectingObstacles = findIntersectedObstacles(nObstacle, context)
        
        intersectionGrids.forEach((intersection: any) => {
            const grid = context.grids.find((g: any) => g.gridId === intersection.gridId)
            if (grid) {
                restoreGrid(grid, intersection.coordinates, context, intersectingObstacles)
            }  
        })

        event.obstacle.intersectionGrids = []
    }

    function findIntersectedObstacles(movingShape: any, context: any) {
        const intersectingObstacles: any = []
        context.obstacles.forEach((obstacle: any) => {
            const shape = turfPolygon(obstacle.shape, obstacle.cache);
            const mShape = turfPolygon(movingShape.shape, obstacle.cache);
            const intersected = turf.intersect(shape, mShape)
            if (intersected && obstacle.id !== movingShape.id) {
                obstacle.turfShape = shape;
                intersectingObstacles.push(obstacle)
            }
        })
        return intersectingObstacles
    }

    function turfPolygon(shape: any, cache: any) {
        const latlngs = shape.getLatLngs()[0].map((ll:any) => [ll.lng, ll.lat])
        latlngs.push(latlngs[0]);
        cache.polygon = turf.polygon([latlngs])

        return turf.polygon([latlngs]);
    }

    function restoreGrid(grid: any, coordinates: any, context: any, intersectingObstacles: any) {
        coordinates.forEach((latLngs: any) => {
            // console.log(latLngs)
            const turfPolygonCoords = latLngs.map((ll: any) => [ll.lng, ll.lat]);
            if (turfPolygonCoords[0] !== turfPolygonCoords[turfPolygonCoords.length - 1]) {
                turfPolygonCoords.push(turfPolygonCoords[0]);  // Ensure the polygon is closed
            }
            const turfPolygon = turf.polygon([turfPolygonCoords])
            let isIntersected = false;
            intersectingObstacles.forEach((iObstacle: any) => {
                if (turf.intersect(turfPolygon, iObstacle.turfShape)) {
                    isIntersected = true
                    const alreadyRecorded = iObstacle.intersectionGrids.some((ig: any) => 
                        ig.gridId === grid.gridId && 
                        JSON.stringify(ig.coordinates) === JSON.stringify(latLngs)
                    );
                    
                    if (!alreadyRecorded) {
                        const intersectionGrid = {
                            gridId: grid.gridId,
                            coordinates: [latLngs]
                        };
                        // console.log(latLngs)
                        // console.log(intersectionGrid)
                        // Add new intersection grid to iObstacle if not already recorded
                        iObstacle.intersectionGrids.push(intersectionGrid);
                    }
                }
            });
            if (!isIntersected)
                
                addPolygonToGrid({latLngs, featureGroup: grid.gridFeatureGroup, context})
         })
    }
}