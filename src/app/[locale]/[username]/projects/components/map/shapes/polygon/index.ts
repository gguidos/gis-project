export default function makePolygon({
  Leaflet,
  makeTurfPolygon,
  findIntersectedGrids,
  calculateCentroid,
  bearing,
  booleanClockWise,
  bearingToAzimuth,
  generateUUID,
}: {
  Leaflet: any;
  makeTurfPolygon: Function;
  findIntersectedGrids: Function;
  calculateCentroid: Function;
  booleanClockWise: Function;
  bearingToAzimuth: Function;
  bearing: Function;
  generateUUID: Function;
}) {
  return Object.freeze({ polygon });

  // Main function to handle polygon creation and processing
  function polygon({ context }: { context: any }) {
    // Close the polygon by adding the first point to the end
    context.polylinePoints.push(context.polylinePoints[0]);
    const originalPolylinePoints = [...context.polylinePoints];

    // Create a LineString GeoJSON from the polyline points
    const lineString = createLineString(context.polylinePoints);
    const clockwise = booleanClockWise(lineString);

    if (!clockwise) {
      // Reverse and rotate the polygon if it's counterclockwise
      reverseAndRotatePolygon(context, originalPolylinePoints);
    }

    // Create the Leaflet polygon with the correctly ordered vertices
    const lPolygon = createLeafletPolygon(Leaflet, context.polylinePoints);

    if (!context.isDrawingObstacle) {
      // Process the polygon if it's not an obstacle
      processPolygon(
        lPolygon,
        context,
        generateUUID,
        calculateCentroid,
        makeTurfPolygon,
        findIntersectedGrids
      );
    }

    return lPolygon;
  }

  // Create a LineString GeoJSON from the polyline points
  function createLineString(polylinePoints: any) {
    return {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: polylinePoints.map((point: any) => [point.lng, point.lat]),
      },
    };
  }

  // Reverse the vertices if the polygon is counterclockwise and rotate to ensure the ridge start point is first
  function reverseAndRotatePolygon(context: any, originalPolylinePoints: any) {
    context.polylinePoints.reverse();

    // Find the original first point in the reversed points
    const originalFirstPoint = originalPolylinePoints[1];
    const ridgeStartPointIndex = context.polylinePoints.findIndex(
      (point: any) =>
        point.lat === originalFirstPoint.lat &&
        point.lng === originalFirstPoint.lng
    );

    if (ridgeStartPointIndex > -1) {
      // Rotate the array so that the ridge start point is the first element
      context.polylinePoints = [
        ...context.polylinePoints.slice(ridgeStartPointIndex),
        ...context.polylinePoints.slice(0, ridgeStartPointIndex),
      ];
    }
  }

  // Create a Leaflet polygon from the given polyline points
  function createLeafletPolygon(Leaflet: any, polylinePoints: any) {
    return Leaflet.simplePolygon({
      bounds: polylinePoints,
      config: { color: "#ff7800", weight: 2, draggable: true },
    });
  }

  // Process the Leaflet polygon by adding it to the context, calculating intersections, and identifying edges
  function processPolygon(
    lPolygon: any,
    context: any,
    generateUUID: Function,
    calculateCentroid: Function,
    makeTurfPolygon: Function,
    findIntersectedGrids: Function
  ) {
    context.activeFeatureGroup.addLayer(lPolygon);
    lPolygon.intersectionGrids = [];
    lPolygon.shapeId = generateUUID();
    lPolygon.pivot = calculateCentroid(lPolygon.getLatLngs()[0]);

    const turfPolygonShape = makeTurfPolygon({ shape: lPolygon });
    const intersectionGrids = findIntersectedGrids({
      shape: turfPolygonShape,
      grids: context.grids,
    });
    lPolygon.intersectionGrids = [
      ...lPolygon.intersectionGrids,
      intersectionGrids,
    ];

    lPolygon.edges = [];
    const points = lPolygon.getLatLngs()[0];

    // Create edges for the polygon and highlight the ridge
    for (let i = 0; i < points.length - 1; i++) {
      const edge = createEdge(
        points[i],
        points[i + 1],
        i,
        generateUUID,
        bearing,
        bearingToAzimuth
      );
      if (!edge) continue;
      edge.ridge = i === 0; // Set the first edge as the ridge
      lPolygon.edges.push(edge);
      if (edge.ridge) {
        highlightEdge(edge, context);
      }
    }

    removeIntersectedGridsFromObstacles(
      lPolygon.intersectionGrids,
      context.obstacles
    );
  }

  // Create an edge object with start and end coordinates, and calculate the angle
  function createEdge(
    start: any,
    end: any,
    i: number,
    generateUUID: Function,
    bearing: Function,
    bearingToAzimuth: Function
  ) {
    const startCoords = [start.lng, start.lat];
    const endCoords = [end.lng, end.lat];

    if (
      isNaN(startCoords[0]) ||
      isNaN(startCoords[1]) ||
      isNaN(endCoords[0]) ||
      isNaN(endCoords[1])
    ) {
      console.error(
        `Invalid coordinates for edge ${i}: start ${startCoords}, end ${endCoords}`
      );
      return;
    }

    return {
      edgeId: generateUUID(),
      start,
      end,
      angle: calculateAngle(
        startCoords,
        endCoords,
        i,
        bearing,
        bearingToAzimuth
      ),
      ridge: false,
    };
  }

  // Calculate the angle (bearing) between two points
  function calculateAngle(
    startCoords: any,
    endCoords: any,
    i: any,
    bearing: Function,
    bearingToAzimuth: Function
  ) {
    const edgeBearing = bearing(startCoords, endCoords);
    if (isNaN(edgeBearing)) {
      console.error(
        `Invalid bearing for edge ${i}: start ${startCoords}, end ${endCoords}`
      );
      return;
    }

    return bearingToAzimuth({ angle: edgeBearing });
  }

  // Highlight the edge on the map
  function highlightEdge(edge: any, context: any) {
    const { start, end } = edge;
    const edgeLayer = Leaflet.simplePolyline({
      bounds: [start, end],
      config: { color: "red", weight: 5 },
    });
    edgeLayer.addTo(context.mapInstance);
  }

  // Remove intersected grids from obstacles
  function removeIntersectedGridsFromObstacles(
    intersectionGrids: any,
    obstacles: any
  ) {
    intersectionGrids.forEach((intersection: any) => {
      intersection.forEach((grid: any) => {
        obstacles.forEach((obstacle: any) => {
          obstacle.intersectionGrids = obstacle.intersectionGrids.filter(
            (obstacleGrid: any) => !isSameGrid(grid, obstacleGrid)
          );
        });
      });
    });
  }

  // Check if two grids are the same
  function isSameGrid(grid1: any, grid2: any) {
    if (
      grid1.gridId !== grid2.gridId ||
      grid1.coordinates.length !== grid2.coordinates.length
    ) {
      return false;
    }
    for (let i = 0; i < grid1.coordinates.length; i++) {
      if (!coordinatesMatch(grid1.coordinates[i], grid2.coordinates[i])) {
        return false;
      }
    }
    return true;
  }

  // Check if two coordinates match
  function coordinatesMatch(coords1: any, coords2: any) {
    const precision = 1000000;
    return (
      Math.round(coords1[0] * precision) ===
        Math.round(coords2[0] * precision) &&
      Math.round(coords1[1] * precision) === Math.round(coords2[1] * precision)
    );
  }
}
