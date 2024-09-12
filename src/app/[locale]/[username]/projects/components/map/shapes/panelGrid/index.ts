export default function makePanelGrid({
  Leaflet,
  findIntersectedGrids,
  fillRectangleWithRectangles,
  fillPolygonWithRectangles,
  generateUUID,
}: {
  Leaflet: any;
  findIntersectedGrids: any;
  fillPolygonWithRectangles: Function;
  fillRectangleWithRectangles: Function;
  generateUUID: Function;
}) {
  return Object.freeze({ panelGrid, addPolygonToGrid });

  function panelGrid({ context }: { context: any }) {
    const paddedPolygonFeature = context.paddedPolygonFeature;
    const orientation =
      context.config.polygonGrid.solarPanelDimensions.orientation;
    const width = context.config.polygonGrid.solarPanelDimensions.width;
    const height = context.config.polygonGrid.solarPanelDimensions.height;
    const ridge = context.shape.edges.filter((edge: any) => edge.ridge)[0];
    const polygonGrid =
      context.shapeType === "rectangle"
        ? fillRectangleWithRectangles(
            paddedPolygonFeature,
            width,
            height,
            0.2,
            ridge,
            orientation
          )
        : fillPolygonWithRectangles(
            paddedPolygonFeature,
            width,
            height,
            0.2,
            ridge,
            orientation
          );
    // const polygonGrid =fillPolygonWithRectangles(paddedPolygonFeature, width, height, 0.2, ridge, orientation);
    const gridFeatureGroup = Leaflet.featureGroup();

    addPolygonsToGroups(polygonGrid, gridFeatureGroup, context);
    context.activeFeatureGroup.addLayer(gridFeatureGroup);

    const grid = {
      gridId: generateUUID(),
      gridFeatureGroup,
    };

    context.grids = [...context.grids, grid];

    if (context.obstacles.length) {
      context.obstacles.forEach((obstacle: any) => {
        obstacle.shape.bringToFront();
        const intersectionGrids = findIntersectedGrids(
          obstacle.cache.polygon,
          context.grids
        );
        obstacle.intersectionGrids = [
          ...obstacle.intersectionGrids,
          ...intersectionGrids,
        ];
      });
    }

    context.shape.gridId = grid.gridId;

    return {
      grids: context.grids,
      gridFeatureGroup,
      gridLength: polygonGrid.length,
    };
  }

  function addPolygonsToGroups(
    polygonGrid: any,
    gridFeatureGroup: any,
    context: any
  ) {
    polygonGrid.forEach((feature: any) => {
      const latLngs = feature.geometry.coordinates[0].map((coord: any) => [
        coord[1],
        coord[0],
      ]);
      addPolygonToGrid({ latLngs, featureGroup: gridFeatureGroup, context });
    });
  }

  function addPolygonToGrid({
    latLngs,
    featureGroup,
    context,
  }: {
    latLngs: any;
    featureGroup: any;
    context: any;
  }) {
    const polygon = Leaflet.simplePolygon({
      bounds: latLngs,
      config: context.config.polygonGrid.options,
    });

    featureGroup.addLayer(polygon);
  }
}
