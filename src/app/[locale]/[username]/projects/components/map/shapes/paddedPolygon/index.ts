export default function makeAddPaddedPolygon({
  Leaflet,
  scalePolygon,
  generateUUID,
  bbox,
}: {
  Leaflet: any;
  scalePolygon: Function;
  generateUUID: Function;
  bbox: Function;
}) {
  return Object.freeze({ paddedPolygon });
  function paddedPolygon({ context }: { context: any; event: any }) {
    const paddedPolygonFeature = scalePolygon(
      context.shape.toGeoJSON(),
      context.config.paddedPolygon.scaleFactor
    );

    const bounds = paddedPolygonFeature.geometry.coordinates[0].map(
      (coord: any) => [coord[1], coord[0]]
    );

    const polygon = Leaflet.simplePolygon({
      bounds,
      config: context.config.paddedPolygon.options,
    });

    const [minX, minY, maxX, maxY] = bbox(paddedPolygonFeature);
    // Scale the bounding box
    const scaleFactor = 3.5; // Adjust as necessary
    const scaledBounds = [
      minX - ((maxX - minX) * (scaleFactor - 1)) / 2,
      minY - ((maxY - minY) * (scaleFactor - 1)) / 2,
      maxX + ((maxX - minX) * (scaleFactor - 1)) / 2,
      maxY + ((maxY - minY) * (scaleFactor - 1)) / 2,
    ];

    paddedPolygonFeature.bbox = {
      dimensions: {
        width: maxX - minX,
        height: maxY - minY,
        latitude: (scaledBounds[1] + scaledBounds[3]) / 2,
        originalLatitude: (minY + maxY) / 2,
        bounds: scaledBounds,
        centerPoint: [
          (minX + maxX) / 2, // (minX + maxX) / 2
          (minY + maxY) / 2, // (minY + maxY) / 2
        ],
        scaledCenterPoint: [
          (scaledBounds[0] + scaledBounds[2]) / 2,
          (scaledBounds[1] + scaledBounds[3]) / 2,
        ],
        corners: {
          topLeft: [scaledBounds[0], scaledBounds[3]],
          topRight: [scaledBounds[2], scaledBounds[3]],
          bottomLeft: [scaledBounds[0], scaledBounds[1]],
          bottomRight: [scaledBounds[2], scaledBounds[1]],
        },
        originalCorners: {
          topLeft: [minX, maxY],
          topRight: [maxX, maxY],
          bottomLeft: [minX, minY],
          bottomRight: [maxX, minY],
        },
      },
    };

    polygon.paddedPolygonId = generateUUID();
    paddedPolygonFeature.paddedPolygonId = polygon.paddedPolygonId;
    context.activeFeatureGroup.addLayer(polygon);

    const rectangleBounds = Leaflet.bounds({
      points: [
        { lat: scaledBounds[1], lng: scaledBounds[0] },
        { lat: scaledBounds[3], lng: scaledBounds[2] },
      ],
    });

    // // Step 3: Create the rectangle
    const rectangle = Leaflet.simpleRectangle({
      bounds: rectangleBounds,
      config: { color: "#9700FF", weight: 4 },
    });
    // // Step 4: Add the rectangle to the map or a layer group
    // context.activeFeatureGroup.addLayer(rectangle)

    return {
      ...paddedPolygonFeature,
    };
  }
}
