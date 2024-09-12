import { polygon } from '@turf/turf';
import center from '@turf/center';

export function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
  });
}

export function isMarkerEqual(marker1: any, marker2:any) {
    const tolerance = 0.0001; // Adjust as needed
    return Math.abs(marker1.lat - marker2.lat) < tolerance &&
           Math.abs(marker1.lng - marker2.lng) < tolerance;
}

export function calculateCentroid(latlngs: any) {
  let latSum = 0, lngSum = 0, numPoints = latlngs.length;
  latlngs.forEach((latlng: any) => {
      latSum += latlng.lat;
      lngSum += latlng.lng;
  });
  return { lat: latSum / numPoints, lng: lngSum / numPoints };
}

export function calculateStrokeMidpoint(stroke:any): any | null {
    return {
        lat: (stroke[0].lat + stroke[1].lat) / 2,
        lng: (stroke[0].lng + stroke[1].lng) / 2,
    }; 
}

export function calculatePerpendicularPoint(firstPoint: any, secondPoint: any, currentPoint: any) {
  const vectorX = secondPoint.lng - firstPoint.lng;
  const vectorY = secondPoint.lat - firstPoint.lat;

  // Calculate the length of the vector
  const length = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

  // Check if length is too small to avoid division by a value close to zero
  if (length < Number.EPSILON) {
    // Return null or handle this edge case as appropriate for your application
    // For example, you might choose to return the secondPoint itself or some other fallback
    return { lat: secondPoint.lat, lng: secondPoint.lng }; // Fallback to the second point
  }

  // Calculate unit vector for the first stroke
  const unitVectorX = vectorX / length;
  const unitVectorY = vectorY / length;

  // Calculate a perpendicular unit vector
  const perpUnitVectorX = -unitVectorY;
  const perpUnitVectorY = unitVectorX;

  // Calculate the vector from the second point to the current point
  const toCurrentX = currentPoint.lng - secondPoint.lng;
  const toCurrentY = currentPoint.lat - secondPoint.lat;

  // Project the 'toCurrent' vector onto the perpendicular unit vector
  const projectionLength = toCurrentX * perpUnitVectorX + toCurrentY * perpUnitVectorY;

  // Calculate the constrained point by applying the projection to the second point
  return {
    lat: secondPoint.lat + perpUnitVectorY * projectionLength,
    lng: secondPoint.lng + perpUnitVectorX * projectionLength,
  };
}

export function calculateAngleAndDistanceBetweenPoints(pointA: any, pointB: any) {
    // Calculate the angle between two points (in radians)
    const angle = Math.atan2(pointB.lng - pointA.lng, pointB.lat - pointA.lat);
    // Calculate the distance between two points
    const distance = google.maps.geometry.spherical.computeDistanceBetween(
      new google.maps.LatLng(pointA.lat, pointA.lng),
      new google.maps.LatLng(pointB.lat, pointB.lng)
    );
    return { angle, distance };
}

export function calculateRectangleCorners(A: any, B:any, C: any) {
    // The thirdPoint determines the length of the second side of the rectangle.
    // We assume firstPoint, secondPoint, and thirdPoint are objects with lat and lng properties.
    
    // Calculate vectors for the sides of the rectangle
 // Calculate the vector AB
 const AB = {
    lat: B.lat - A.lat,
    lng: B.lng - A.lng,
  };

  // The fourth point D is C + AB
  const D = {
    lat: C.lat - AB.lat,
    lng: C.lng - AB.lng,
  };

  // The order of points for the polygon path should be A, B, D, C
  return [A, B, C, D];

}

export function scalePolygon(poly: any, scaleFactor: any) {
  // Get the centroid of the polygon
  const centroidFeature = center(poly);
  const centroid = centroidFeature.geometry.coordinates;

  // Iterate over each vertex in the polygon and scale it relative to the centroid
  const scaledCoordinates = poly.geometry.coordinates[0].map((vertex: any) => {
      const [x, y] = vertex;
      const dx = x - centroid[0];
      const dy = y - centroid[1];
      const newX = centroid[0] + dx * scaleFactor;
      const newY = centroid[1] + dy * scaleFactor;
      return [newX, newY];
  });

  // Return the new polygon with scaled coordinates
  return polygon([scaledCoordinates]);
}
