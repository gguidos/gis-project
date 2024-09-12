export default function makeRestoreObstacleArea({
    addPolygonToGrid,
    findIntersectedObstacles,
    makeTurfPolygonFromCoords,
    intersect,
    turfPolygon
}: {
    addPolygonToGrid: Function,
    findIntersectedObstacles: Function,
    makeTurfPolygonFromCoords: Function,
    intersect: Function,
    turfPolygon: Function
}) {
    return Object.freeze({ restoreObstacleArea })
    
    function restoreObstacleArea(
        { context, event } :
        { context: any, event: any }) {
            const obstacleIntersections = JSON.stringify(event.obstacle.intersectionGrids)
            const intersectionGrids = JSON.parse(obstacleIntersections);
            const nObstacle = { id: event.obstacle.id, shape: event.obstacle.shape, intersectionGrids }
            const intersectingObstacles = findIntersectedObstacles(nObstacle, context)
            
            intersectionGrids.forEach((intersection: any) => {
                const grid = context.grids.find((g: any) => g.gridId === intersection.gridId)
                if (grid) {
                    restoreGrid(grid, intersection.coordinates, nObstacle, context, intersectingObstacles)
                }  
            })
    }

    function restoreGrid(grid: any, coordinates: any, nObstacle: any, context: any, intersectingObstacles: any) {
        coordinates.forEach((latLngs: any) => {
            const turfPolygon = makeTurfPolygonFromCoords({ latLngs })
            const turfPolygonCoords = latLngs.map((ll: any) => [ll.lng, ll.lat]);
            if (turfPolygonCoords[0] !== turfPolygonCoords[turfPolygonCoords.length - 1]) {
                turfPolygonCoords.push(turfPolygonCoords[0]);  // Ensure the polygon is closed
            }
            // const turfPolygon = turf.polygon([turfPolygonCoords])
            let isIntersected = false;
            
            intersectingObstacles.forEach((iObstacle: any) => {
                 if (intersect({shape1: turfPolygon, shape2: iObstacle.cache.polygon})) {
                    isIntersected = true;
                //     const alreadyRecorded = iObstacle.intersectionGrids.some((ig: any) => 
                //         ig.gridId === grid.gridId && 
                //         JSON.stringify(ig.coordinates) === JSON.stringify(latLngs)
                //     );
                    
                //     if (!alreadyRecorded) {
                //         const intersectionGrid = {
                //             gridId: grid.gridId,
                //             coordinates: [latLngs]
                //         };
                //         // console.log(latLngs)
                //         // console.log(intersectionGrid)
                //         // Add new intersection grid to iObstacle if not already recorded
                //         iObstacle.intersectionGrids.push(intersectionGrid);
                //     }
                }
            })

            if (!isIntersected)
                addPolygonToGrid({latLngs, featureGroup: grid.gridFeatureGroup, context})
        })
    }
}