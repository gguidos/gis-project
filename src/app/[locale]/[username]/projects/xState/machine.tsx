import { setup, assign } from 'xstate';
import { DrawingContext, context } from './context';
import * as functions from '../components/map/shapes'

type LatLngLiteral = {
  lat: google.maps.LatLng,
  lng: google.maps.LatLng
}

type DrawingEvent =
  | { type: 'ADD_CURRENT_POINT' }
  | { type: 'ADD_PANEL_GRID' }
  | { type: 'ADD_PADDED_POLYGON' }
  | { type: 'HANDLE_MOUSE_MOVEMENT' }
  | { type: 'HANDLE_OBSTACLE_MOVEMENT' }
  | { type: 'HANDLE_OBSTACLE_STOP' }
  | { type: 'INITIALIZE_OBSTACLE' }
  | { type: 'INITIALIZE_POLYGON' }
  | { type: 'INITIALIZE_RECTANGLE' }
  | { type: 'INITIALIZE_CALCULATOR' }
  | { type: 'INITIALIZE_MAP' }
  | { type: 'INITIALIZE_OBSTACLE' }
  | { type: 'FINALIZE_MAIN_SHAPE' }
  | { type: 'FINALIZE_OBSTACLE' }
  | { type: 'FINALIZE_POLYGON' }
  | { type: 'FINALIZE_RECTANGLE' }
  | { type: 'FINALIZE_SHAPE_GROUP' }
  | { type: 'RECENTER_MAP', coords: LatLngLiteral }
  | { type: 'RETRY' }
  | { type: 'SET_CURRENT_COORDS', coords: LatLngLiteral }
  | { type: 'SHOW_MENU', x: any, y: any }
  | { type: 'HIDE_MENU' }
  
const drawingMachine = setup<DrawingContext, DrawingEvent, any>({
  types: { 
      events: {} as DrawingEvent
  }
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QFsCGAHAdASwgGzAGIBZAQQAUB9AZQBVSAlWgUQBEBtABgF1FR0A9rGwAXbAIB2fEAA9EARgDMnTADYArAA5NAdh2L5AFi3rDmgDQgAnonWKdmTas6rVOzp02LNATk0Bff0s0LBDCOkZaSlYGUgB1AEkAOQBxLl4kEEFhMUlpOQQDdUxDfUVDZR1deR9FSxsEQ1UAJkwfeVctGtV5TTNA4IxMMIimGgAJCmZ06WzRcSlMgsVm1UxVipMV5o99esRFN0x1Xuazzmb5HTcjAZAQ4YxCUlZWSgBhAFUGBmYkqPIAHlkrQZpk5rlFqACs0fGs3MZ5OpmsiTk46tZEM0dK15DUqlpSuUfHY7g8wi83kCQWD+EJ5nklgdDphOFVNHj1Jx5DtDM19ggrmscUpDHCcbUas0yUMwu9AcRyAAZZgsWlZemQ-LMzSOTg+HzNXQuFY+JoCjmYbbtYmaE4VeQy0JPd6kJLvZhK9UQhbawU6Hys5qlE5VA06HkWTGNbSsxT2zScUp9FGGQJBEASAQQODSEKzTW+pkIAC0qgFZdZHmrNZrOidOHwYALOSL0MQfIF6mRmDKYp0TTO7jTGfJGBbDKhsgOGhKqnj1w07XN0fU86tSP1FXczmD6f8QA */
  id: 'calculator',
  initial: 'idle',
  context,
  states: {
    idle: {
      on: {
        INITIALIZE_CALCULATOR: {
          target: 'calculator',
          actions: assign({
            isCalculatorReady: (_) => true,
          }),
        },
      },
    },
    calculator: {
      on: {
        SET_CURRENT_COORDS: {
          guard: (_:any) => _.context.isCalculatorReady,
          actions: assign(({
            currentCoords: (_) =>{
              console.log(_.event.coords)
              return _.event.coords},
            isCoordsReady: (_) =>  true
          })
          )
        },
        INITIALIZE_MAP: {
          guard: (_) => _.context.isCalculatorReady,
          actions: assign((
            { context, event } :
            { context: any, event:any }) => {
            const mapInstance = functions.startMap({ context, event })
              return {
                isMapReady: true,
                ...mapInstance,
              }
          })
        },
        INITIALIZE_RECTANGLE: { 
          guards: ['isMapReady'],
          actions: assign(({ context }: { context: any }) => {
            reset(context)
            const tempShapes = functions.tempRectangle({ context })
            return {
              ...tempShapes,
              isDrawing: true,
              isDrawingRectangle: true,
              isDrawingObstacle: false,
              isDrawingPolygon: false,
              shapeType: 'rectangle',
            }
          })
        },
        INITIALIZE_POLYGON: { 
          guards: ['isMapReady'],
          actions: assign(({ context }: {context: any }) => {
            reset(context)
            const tempShapes = functions.tempPolygon({ context })
            return {
              ...tempShapes,
              isDrawing: true,
              isDrawingRectangle: false,
              isDrawingObstacle: false,
              isDrawingPolygon: true,
              shapeType: 'polygon',
            }
          })
        },
        RECENTER_MAP: {
          guard: (_) => _.context.isCoordsReady,
          actions: assign((
            { context, event } :
            { context: any, event:any }) => {
            const mapInstance = functions.recenterMap({ context, event })
            return {
              isMapReady: true,
              // ...mapInstance,
            }
          })
        },
        INITIALIZE_OBSTACLE: { 
          guards: ['isMapReady'],
          actions: assign(({ context, event }: {context: any, event: any }) => {
            reset(context)
            const tempShapes = functions.tempPolygon({ context })
            return {
              ...tempShapes,
              isDrawing: true,
              isDrawingRectangle: false,
              isDrawingObstacle: true,
              isDrawingPolygon: false,
              shapeType: 'obstacle',
            }
          })
        },
        ADD_CURRENT_POINT: {
          guards: ['isDrawing'],
          actions: assign({
              polylinePoints: ({ context, event }: { context: any, event: any }) =>  {
                return [
                ...context.polylinePoints,
                event.point 
              ]}
          })
        },
        HANDLE_MOUSE_MOVEMENT: {
          guards: ['isTempTooltipReady'],
          actions: assign(({ context, event } : { context: any, event: any }) => {
            const { allowed, strokeLength } =
              functions.tempTooltipHandler({ context, event: event.event })
            return {
              currentPolylineLength: {
                length: strokeLength,
                allowed
              }
            }
          })
        },
        FINALIZE_MAIN_SHAPE: {
          guards: ['isDrawingShapeReady'],
          actions: assign(({ context, event } : { context: any, event: any }) => {
            const shape = functions.rectangle({ context })
            reset(context)
            return {
              shapeCounter: context.shapeCounter + 1,
              isShapeReady: true,
              shape
            }
          })
        },
        FINALIZE_OBSTACLE: {
          guards: ['isDrawingShapeReady'],
          actions: assign(({ context, event } : { context: any, event: any }) => {
            const obstacles = functions.makeObstacle({ context }).obstacles
            reset(context)
            return {
              isDrawingObstacle: false,
              obstacles
            }
          })
        },
        FINALIZE_POLYGON: {
          guards: ['isDrawingShapeReady'],
          actions: assign(({ context, event } : { context: any, event: any }) => {
            const shape = functions.polygon({ context })
            reset(context)
            return {
              shapeCounter: context.shapeCounter + 1,
              isShapeReady: true,
              shape
            }
          })
        },
        ADD_PADDED_POLYGON: {
          guards: ['isShapeReady'],
          actions: assign({
              paddedPolygonFeature: ({ context, event } : { context: any, event: any }) => 
                functions.paddedPolygon({ context, event }),
              isPaddedPolygonReady: (_) => true,
          })
        },
        ADD_PANEL_GRID: {
          guards: ['isPaddedPolygonReady'],
          actions: assign(({ context, event } : { context: any, event: any }) => {
            const { gridFeatureGroup, grids } = functions.panelGrid({ context })
            context.gridReferences = {
              [context.shape.shapeId]: {
                gridId: context.shape.gridId,
                paddedPolygonId: context.shape.polygonId
              }
            }
            functions.clickHandlers({ context, event })
            return {
              grids,
              isPanelGridReady: true,
              gridFeatureGroup,
            }
          })
        },
        FINALIZE_SHAPE_GROUP: {
          guards: ['isPanelGridReady'],
          actions: assign({
            activeFeatureGroup: () => undefined,
            isDrawing: () => false,
            isDrawingRectangle: (_) => false,
            isDrawingPolygon: (_) => false,
            isObstacleAllowed: (_) => true,
            isShapeReady: () =>false,
            shape: () => undefined,
            isPaddedPolygonReady: () => false,
            isPanelGridReady: () => false,
            paddedPolygonFeature: () => undefined,
            polylinePoints: () => [],
          })
        },
        HANDLE_OBSTACLE_STOP: {
          guards: [],
          actions: assign(({ context, event } : { context: any, event: any }) => {
            functions.handleObstacle({ context, event: event })
            return {
              isDrawing: false,
              isDrawingObstacle: false,
            }
          })
        },
        HANDLE_OBSTACLE_MOVEMENT: {
          guards: [],
          actions: assign(({ context, event } : { context: any, event: any }) => {
            functions.restoreAffectedAreas({ context, event: event })

            return {
              isDrawing: true,
              isDrawingObstacle: true
            }
          })
        },
        SHOW_MENU: {
          actions: assign({
            contextMenu: (_: any) => { 
              return {
                visible: true,
                position:({
                  x: _.event.x,
                  y: _.event.y
                })
              }},
          }),
        },
        HIDE_MENU: {
          actions: assign({
            contextMenu: (_: any) => { 
              return {
                visible: false,
                position:({
                  x: 0,
                  y: 0
                })
              }},
          })
        },
        COMPLETE: 'idle',
        CANCEL: 'idle',
        guards: {
          isCalculatorReady:({ context } : { context: any}) => context.isCalculatorReady,
          isMapReady: (_: any) => _.context.isMapReady,
          isDrawing: (_: any) => _.context.isDrawingRectangle || _.context.isDrawingPolygon ||
            _.context.isDrawingObstacle,
          isTempTooltipReady: (_: any) => _.context.isTempTooltipReady,
          isDrawingShapeReady: (_: any) =>
            (_.context.isDrawingRectangle && _.context.polylinePoints.length === 2) || 
            (_.context.isDrawingPolygon && _.context.polylinePoints.length >= 3) ||
            (_.context.isDrawingObstacle && _.context.polylinePoints.length >= 3),
          isShapeReady: (_: any) => _.context.isShapeReady,
          isPaddedPolygonReady: (_: any) => _.context.isPaddedPolygonReady,
          isPanelGridReady: (_: any) => _.context.isPanelGridReady,
        },
      },
      error: {
        on: {
          RETRY: 'calculator',  // Assuming you might want to retry the failed operation
          CANCEL: 'idle',
        }
      },
    },

  },
});

  function reset(context: any) {
    if (context.tempShape) {
      context.tempShape.disable()
      context.tempShape = undefined
    }
    if (context.tempTooltip) {
      context.tempTooltip.remove()
      context.tempTooltip = undefined
    }
    if (context.tempPolyline) {
      context.tempPolyline.disable()
      context.tempPolyline = undefined
    }
    context.currentCords = undefined
    context.polylinePoints = []
    context.isDrawingObstacle = false
    context.isDrawingPolygon = false
    context.isDrawingRectangle = false
    context.currentPolylineLength = {
      length: 0,
      allowed: false
  }
}

export default drawingMachine;