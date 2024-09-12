export default function makeRectangle(
    { Leaflet, makeTurfPolygon, findIntersectedGrids, bearing, bearingToAzimuth, generateUUID } : 
    {
        Leaflet: any,
        makeTurfPolygon: Function,
        bearing: Function,
        bearingToAzimuth: Function,
        findIntersectedGrids: Function,
        generateUUID: Function
    }){
    return(Object.freeze({ rectangle }))
    function rectangle({ context } : { context: any }) {
        const [firstPoint, secondPoint] = context.polylinePoints;

        
        const bounds = Leaflet.bounds({points: [firstPoint, secondPoint]});
        const rectangle = Leaflet.simpleRectangle({
            bounds, 
            config: { color: "#ff7800", weight: 2, draggable: true}
        });


        rectangle.shapeId = generateUUID()
        if (!context.isDrawingObstacle) {
            context.activeFeatureGroup.addLayer(rectangle)
            rectangle.intersectionGrids = []
            const polygon = makeTurfPolygon({ shape: rectangle })
            
            const intersectionGrids = findIntersectedGrids({shape: polygon, grids: context.grids})
            rectangle.intersectionGrids = [...rectangle.intersectionGrids, intersectionGrids]

            // the obstacle forgets the intersections
            removeIntersectedGridsFromObstacles(rectangle.intersectionGrids, context.obstacles);
        }

        // Extract edges and define the top ridge
        const points = getRectanglePoints(bounds);
        rectangle.edges = createEdges(points);

        // Highlight the first edge as the ridge
        if (rectangle.edges.length > 0) {
            rectangle.edges[0].ridge = true;
            highlightEdge(rectangle.edges[0], context);
        }
        
        return rectangle;
    }


     // Function to get the four corners of the rectangle
     function getRectanglePoints(bounds: any) {
        const southWest = bounds.getSouthWest();
        const northEast = bounds.getNorthEast();
        
        const topLeft = { lat: northEast.lat, lng: southWest.lng };
        const topRight = { lat: northEast.lat, lng: northEast.lng };
        const bottomLeft = { lat: southWest.lat, lng: southWest.lng };
        const bottomRight = { lat: southWest.lat, lng: northEast.lng };

        return [topLeft, topRight, bottomRight, bottomLeft, topLeft]; // Closed loop
    }

    // Function to create edges for the rectangle
    function createEdges(points: any[]) {
        const edges = [];
        for (let i = 0; i < points.length - 1; i++) {
            const edge = createEdge(points[i], points[i + 1], i);
            if (!edge) continue;
            edges.push(edge);
        }
        return edges;
    }

    // Function to create an edge object with start and end coordinates, and calculate the angle
    function createEdge(start: any, end: any, i: number) {
        const startCoords = [start.lng, start.lat];
        const endCoords = [end.lng, end.lat];

        if (isNaN(startCoords[0]) || isNaN(startCoords[1]) || isNaN(endCoords[0]) || isNaN(endCoords[1])) {
            console.error(`Invalid coordinates for edge ${i}: start ${startCoords}, end ${endCoords}`);
            return;
        }

        return {
            edgeId: generateUUID(),
            start,
            end,
            angle: calculateAngle(startCoords, endCoords, i),
            ridge: false
        };
    }

    // Function to calculate the angle (bearing) between two points
    function calculateAngle(startCoords: any, endCoords: any, i: any) {
        const edgeBearing = bearing(startCoords, endCoords);
        if (isNaN(edgeBearing)) {
            console.error(`Invalid bearing for edge ${i}: start ${startCoords}, end ${endCoords}`);
            return;
        }

        return bearingToAzimuth({ angle: edgeBearing });
    }

    // Function to highlight the edge on the map
    function highlightEdge(edge: any, context: any) {
        const { start, end } = edge;
        const edgeLayer = Leaflet.simplePolyline({
            bounds: [start, end],
            config: { color: 'red', weight: 5 }
        });
        edgeLayer.addTo(context.mapInstance);
    }

    function removeIntersectedGridsFromObstacles(intersectionGrids: any, obstacles: any) {
        intersectionGrids.forEach((intersection: any) => {
            intersection.forEach((grid: any) => {  // Make sure the structure of intersectionGrids is correctly understood
                obstacles.forEach((obstacle: any) => {
                    obstacle.intersectionGrids = obstacle.intersectionGrids.filter((obstacleGrid: any) =>
                        !isSameGrid(grid, obstacleGrid)
                    );
                    console.log(obstacle.intersectionGrids)
                });
            });
        });
    }

    function isSameGrid(grid1: any, grid2: any) {
        if (grid1.gridId !== grid2.gridId || grid1.coordinates.length !== grid2.coordinates.length) {
            return false;
        }
        for (let i = 0; i < grid1.coordinates.length; i++) {
            if (!coordinatesMatch(grid1.coordinates[i], grid2.coordinates[i])) {
                return false;
            }
        }
        return true;
    }

    function coordinatesMatch(coords1: any, coords2: any) {
        // Assuming coords are arrays of [lat, lng]
        const precision = 1000000; // Adjust precision as needed
        return Math.round(coords1[0] * precision) === Math.round(coords2[0] * precision) &&
               Math.round(coords1[1] * precision) === Math.round(coords2[1] * precision);
    }
}