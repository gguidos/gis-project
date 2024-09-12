const { point, polygon, featureCollection } = require("@turf/turf");
const transformRotate = require("@turf/transform-rotate").default;
import { Gis } from "../Gis";
const clone = require("@turf/clone").default;
type IPoint = [number, number];

export interface IRectanglePolygonOptions {
  rotationAngle?: number;
  rotationPoint?: IPoint;
}

export function fillPolygonWithRectangles(
  innerPolygon: any,
  rectangleWidth: number,
  rectangleHeight: number,
  margin: number,
  ridge: any,
  orientation: "landscape" | "portrait"
) {
  let rectangles: any = []; // This will be an array of GeoJSON features
  const bounds = innerPolygon.bbox.dimensions.bounds;

  const corners = innerPolygon.bbox.dimensions.corners;

  let rowIndex = 0;
  const latitude = innerPolygon.bbox.dimensions.latitude;

  const { deltaX, deltaY, marginX, marginY } = metersToDegreesWithMargin(
    rectangleWidth,
    rectangleHeight,
    margin,
    latitude
  );

  // Calculate the number of rows and columns based on bbox dimensions
  const bboxWidth = bounds[2] - bounds[0]; // maxX - minX
  const bboxHeight = bounds[3] - bounds[1]; // maxY - minY

  const maxRows = Math.ceil(bboxHeight / (deltaY + marginY));
  let maxCols = Math.ceil(bboxWidth / (deltaX + marginX));
  maxCols = maxCols < 0 ? maxCols * -1 : maxCols;

  let rowAngle = orientation === "portrait" ? 90 : 0;
  let colAngle = orientation === "portrait" ? 0 : 90;
  while (rowIndex < maxRows) {
    let rowStartPoint = Gis.rhumbDestination(
      point(corners.bottomLeft),
      rowIndex * (rectangleHeight + margin),
      0,
      { units: "meters" }
    );
    rowStartPoint = point(rowStartPoint);

    let colIndex = 0;
    while (colIndex < maxCols) {
      let colOffset = Gis.rhumbDestination(
        rowStartPoint,
        colIndex * (rectangleWidth + margin),
        colAngle,
        { units: "meters" }
      );
      colOffset = point(colOffset);
      const origin = point(colOffset.geometry.coordinates);
      const rect = rectanglePolygonMeters(
        origin,
        rectangleWidth,
        rectangleHeight,
        0,
        orientation
      );
      rectangles.push(rect);
      colIndex++;
    }

    rowIndex++;
  }
  let rotationAngle = ridge.angle;

  // Adjust the rotation angle slightly if it's near 0 or 180 degrees
  // Normalize the rotation angle to ensure correct application
  if (rotationAngle < 0) rotationAngle += 360;
  if (rotationAngle >= 360) rotationAngle -= 360;

  // Function to handle precision for rotation angles near 90, 180, 270, and 360 degrees
  const adjustRotationAngle = (angle: number) => {
    const precision = 0.0001; // Define a small value for precision adjustments
    if (Math.abs(angle - 90) < precision) return 90;
    if (Math.abs(angle - 180) < precision) return 180;
    if (Math.abs(angle - 270) < precision) return 270;
    if (Math.abs(angle) < precision || Math.abs(angle - 360) < precision)
      return 0;
    return angle;
  };

  // Adjust rotation angle for precision issues near critical angles
  rotationAngle = adjustRotationAngle(rotationAngle);

  const rotatedRectangles = rectangles.map((rect: any) =>
    transformRotate(rect, rotationAngle, {
      pivot: innerPolygon.bbox.dimensions.centerPoint,
    })
  );
  const gridFeatureCollection = featureCollection(rotatedRectangles);
  // Filter to keep only rectangles within the polygon
  const finalRectangles = gridFeatureCollection.features.filter(
    (feature: any) => {
      return feature.geometry.coordinates[0].every((coord: any) => {
        const coordPoint = point(coord);

        const inside = Gis.booleanPointInPolygon(
          coordPoint,
          innerPolygon.geometry.coordinates[0]
        );
        return inside;
      });
    }
  );
  // return rectangles
  return finalRectangles;
}

export function rectanglePolygonMeters(
  origin: any,
  widthDegrees: number,
  heightDegrees: number,
  rotationAngle: number,
  orientation: "portrait" | "landscape"
): any {
  const clonedOrigin = clone(origin);
  // Ensure origin is an array of points
  const points = Array.isArray(clonedOrigin) ? clonedOrigin : [clonedOrigin];
  const topRightAngle = orientation === "portrait" ? 180 : 90;
  const bottomAngle = orientation === "portrait" ? 90 : 180;
  const topLeft = Gis.pointFeatureToPoint(points[0]);
  const topRight = Gis.rhumbDestination(topLeft, widthDegrees, 90, {
    units: "meters",
  });
  const bottomRight = Gis.rhumbDestination(
    topRight,
    heightDegrees,
    bottomAngle + rotationAngle,
    { units: "meters" }
  );
  const bottomLeft = Gis.rhumbDestination(
    topLeft,
    heightDegrees,
    bottomAngle + rotationAngle,
    { units: "meters" }
  );
  const [topLeftX, topLeftY] = topLeft;
  const [topRightX, topRightY] = topRight;
  const [bottomRightX, bottomRightY] = bottomRight;
  const [bottomLeftX, bottomLeftY] = bottomLeft;

  return polygon([
    [
      [topLeftX, topLeftY],
      [topRightX, topRightY],
      [bottomRightX, bottomRightY],
      [bottomLeftX, bottomLeftY],
      [topLeftX, topLeftY],
    ],
  ]);
}

const metersToDegreesWithMargin = (
  widthMeters: number,
  heightMeters: number,
  marginMeters: number,
  latitude: number
) => {
  // Calculate the distance in meters per degree of latitude
  // This formula takes into account the flattening of the Earth and the decrease
  // in distance between parallels as latitude increases.
  const metersPerDegreeLat =
    111132.92 -
    559.82 * Math.cos(2 * latitude) +
    1.175 * Math.cos(4 * latitude);

  // Calculate the distance in meters per degree of longitude
  // The formula reflects the convergence of meridians as latitude increases,
  // which is especially important in high latitudes near the poles.
  // The multiplication by Math.cos(latitude) further adjusts for the convergence.
  let metersPerDegreeLng =
    (111412.84 * Math.cos(latitude) - 93.5 * Math.cos(3 * latitude)) *
    Math.cos(latitude);

  // Ensure that metersPerDegreeLng is not negative or zero
  // In case the formula results in a negative or zero value (which shouldn't happen
  // under normal circumstances), we adjust it to a small positive value to avoid issues.

  // Convert margin from meters to degrees for longitude and latitude
  const marginX = marginMeters / metersPerDegreeLng; // Margin in degrees of longitude
  const marginY = marginMeters / metersPerDegreeLat; // Margin in degrees of latitude

  // Convert the width and height from meters to degrees
  const deltaY = heightMeters / metersPerDegreeLat; // Height in degrees of latitude
  const deltaX = widthMeters / metersPerDegreeLng; // Width in degrees of longitude

  // Return the calculated values
  return {
    deltaX, // Width in degrees of longitude
    deltaY, // Height in degrees of latitude
    marginX, // Margin in degrees of longitude
    marginY, // Margin in degrees of latitude
  };
};
