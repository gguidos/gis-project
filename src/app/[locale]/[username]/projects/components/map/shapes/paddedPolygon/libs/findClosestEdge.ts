const { point, lineString, distance } = require("@turf/turf");

// Function to find the closest edge
export function findClosestEdge(innerPolygon: any, ridgeLine: any) {
  let closestEdge = null;
  let minDistance = Infinity;

  // Extract the coordinates of the inner polygon (assuming it's a single polygon)
  const coordinates = innerPolygon.geometry.coordinates[0];

  // Iterate over each edge of the polygon
  for (let i = 0; i < coordinates.length - 1; i++) {
    const edgeStart = point(coordinates[i]);
    const edgeEnd = point(coordinates[i + 1]);
    const edge = lineString([coordinates[i], coordinates[i + 1]]);

    // Calculate the distance from the ridge line to the current edge
    const distanceToEdgeStart = distance(ridgeLine, edgeStart);
    const distanceToEdgeEnd = distance(ridgeLine, edgeEnd);

    // Calculate the average distance (or use another method to find the best edge)
    const avgDistance = (distanceToEdgeStart + distanceToEdgeEnd) / 2;

    // Update the closest edge if the current one is closer
    if (avgDistance < minDistance) {
      minDistance = avgDistance;
      closestEdge = edge;
    }
  }

  return closestEdge;
}
