const config = require('../../config/config');
export interface DrawingContext {
    config: any;
    activeFeatureGroup: any;
    activeGrid: any;
    contextMenu: any;
    currentCoords: any;
    currentPolylineLength: {
        length: number;
        allowed: boolean;
    };
    grids: any;
    gridReferences: any;
    isCalculatorReady: boolean;
    isCoordsReady: boolean;
    isDrawing: boolean;
    isDrawingObstacle: boolean;
    isDrawingRectangle: boolean;
    isDrawingPolygon: boolean;
    isMapReady: boolean;
    isObstacleAllowed: boolean;
    isPaddedPolygonReady: boolean;
    isPanelGridReady: boolean;
    isShapeReady: boolean;
    isTempTootipReady: boolean;
    mainFeatureGroup: undefined;
    mapCenter: any;
    mapInstance: any;
    mapLayer: any;
    paddedPolygonFeature: any,
    polylinePoints: any[];
    obstacles: any[];
    shape: any;
    shapeId: string | undefined;
    shapeType: string | undefined;
    tempPolyline: any;
    tempTooltip: any;
    tempShape: any;
    shapeCounter: number;
}

const context: DrawingContext = {
    config: config,
    contextMenu: {
        visible: false,
        position: { x: 1, y: 1 }
    },
    currentPolylineLength: {
        length: 0,
        allowed: true
    },
    currentCoords: undefined,
    mainFeatureGroup: undefined,
    activeFeatureGroup: undefined,
    activeGrid: undefined,
    grids: [],
    gridReferences: {},
    isCalculatorReady: false,
    isCoordsReady: false,
    isDrawing: false,
    isDrawingObstacle: false,
    isDrawingPolygon: false,
    isDrawingRectangle: false,
    isMapReady: false,
    isObstacleAllowed: false,
    isPaddedPolygonReady: false,
    isPanelGridReady: false,
    isShapeReady: false,
    isTempTootipReady: false,
    mapCenter: config.mapCenter,
    mapInstance: undefined,
    mapLayer: config.mapLayers.filter((layer: any) => layer.active)[0],
    paddedPolygonFeature:undefined,
    obstacles: [],
    tempPolyline: undefined,
    polylinePoints: [],
    shape: undefined,
    shapeId: undefined,
    shapeType: undefined,
    tempTooltip: undefined,
    tempShape: undefined,
    shapeCounter: 0
};

export {
    context
}