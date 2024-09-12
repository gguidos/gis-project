const { polygon, bbox } = require("@turf/turf");

export function fillRectangleWithRectangles(
  rectangle: any,
  rectangleWidth: number,
  rectangleHeight: number,
  margin: number,
  ridge: any,
  orientation: "portrait" | "landscape"
) {
  let rectangles = [];
  const [minX, minY, maxX, maxY] = bbox(rectangle);
  const gridWidth = maxX - minX;
  const gridHeight = maxY - minY;
  let panelWidth = rectangleWidth;
  let panelHeigth = rectangleHeight;
  // Calculate the size of the rectangles in degrees
  const centroidLatitude = (minY + maxY) / 2;
  if (orientation === "landscape") {
    panelWidth = rectangleHeight;
    panelHeigth = rectangleWidth;
  }
  const { deltaX, deltaY, marginX, marginY } = metersToDegreesWithMargin(
    panelWidth,
    panelHeigth,
    margin,
    centroidLatitude
  );

  // Calculate how many rectangles fit horizontally and vertically
  let numRectanglesX = Math.floor((gridWidth - marginX) / (deltaX + marginX));
  numRectanglesX = numRectanglesX < 0 ? numRectanglesX * -1 : numRectanglesX;
  const numRectanglesY = Math.floor(
    (gridHeight - marginY) / (deltaY + marginY)
  );

  // Calculate the remaining space to adjust the starting position
  const remainingWidth = gridWidth - numRectanglesX * (deltaX + marginX);
  const remainingHeight = gridHeight - numRectanglesY * (deltaY + marginY);

  // Adjusted start coordinates
  const startX = minX + remainingWidth / 2;
  const startY = minY + remainingHeight / 2;

  // Create grid of rectangles
  for (let i = 0; i < numRectanglesX; i++) {
    for (let j = 0; j < numRectanglesY; j++) {
      const x = startX + i * (deltaX + marginX);
      const y = startY + j * (deltaY + marginY);

      const rectangle = createRectangle(x, y, deltaX, deltaY);
      rectangles.push(rectangle);
    }
  }

  return rectangles;
}

const metersToDegreesWithMargin = (
  widthMeters: number,
  heightMeters: number,
  marginMeters: number,
  latitude: number
) => {
  const earthRadius = 6371000;

  const metersPerDegreeLat = (2 * Math.PI * earthRadius) / 360;
  const metersPerDegreeLng =
    (2 * Math.PI * earthRadius * Math.cos((latitude * Math.PI) / 180)) / 360;

  const marginX = marginMeters / metersPerDegreeLng;
  const marginY = marginMeters / metersPerDegreeLat;

  return {
    deltaX: widthMeters / metersPerDegreeLng,
    deltaY: heightMeters / metersPerDegreeLat,
    marginX,
    marginY,
  };
};

function createRectangle(x: any, y: any, deltaX: any, deltaY: any) {
  // Define the corners of the rectangle
  const corners = [
    [x, y],
    [x + deltaX, y],
    [x + deltaX, y + deltaY],
    [x, y + deltaY],
    [x, y], // Close the loop
  ];
  return polygon([corners]);
}
