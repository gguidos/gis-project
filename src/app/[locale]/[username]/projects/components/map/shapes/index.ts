import * as Leaflet from '../leaflet'
const turf = require('@turf/turf')
import * as turfHelpers from '../turf';
import { fillPolygonWithRectangles } from '../helpers/polygonGridCalculation';
import { Gis } from '../Gis';

import {
    fillRectangleWithRectangles,
    // fillPolygonWithRectangles
} from '../helpers/gridCalculation'
import { 
    scalePolygon,
    calculateCentroid,
    calculateAngleAndDistanceBetweenPoints
} from '../helpers';
import makeAddPaddedPolygon from './paddedPolygon';
import makeTempRectangle from './tempRectangle';
import makeTempPolygon from './tempPolygon';
import makeTempTooltipHandler from './handleTempTooltip';
import makeRectangle from './rectangle';
import makePolygon from './polygon';
import makeClicHandlers from './eventHandlers/edgeClickHandler';
import makeStartMap from './startMap';
import makePanelGrid from './panelGrid';
import MakeHandleObstacle from './obstacle/handleObstacle';
import {
    removeIntersectingShapes as handleObstacle,
    obstacle as makeObstacle,

} from './obstacle';


const clickHandlers = ({ context, event } : { context: any, event: any }) =>
    makeClicHandlers({ Leaflet })
    .clickHandlers({ context, event });

const paddedPolygon = ({ context, event } : { context: any, event:any }) =>
    makeAddPaddedPolygon({ Leaflet, scalePolygon, generateUUID, bbox: turf.bbox })
    .paddedPolygon({ context, event });


const rectangle = ({ context } : { context: any }) =>
    makeRectangle({ 
        bearing: Gis.turfBearing,
        bearingToAzimuth: turfHelpers.bearingToAzimuth,
        Leaflet,
        makeTurfPolygon: turfHelpers.makeTurfPolygonFromShape,
        findIntersectedGrids: turfHelpers.removeIntersectedGrids,
        generateUUID
    }).rectangle({ context });

const polygon = ({ context } : { context: any }) =>
    makePolygon({ 
        Leaflet,
        calculateCentroid,
        generateUUID,
        booleanClockWise: Gis.booleanClockWise,
        bearing: Gis.turfBearing,
        bearingToAzimuth: turfHelpers.bearingToAzimuth,
        makeTurfPolygon: turfHelpers.makeTurfPolygonFromShape,
        findIntersectedGrids: turfHelpers.removeIntersectedGrids,
    }).polygon({ context });

const addPolygonToGrid = ({ context, latLngs, featureGroup } :
    { context: any, latLngs: any, featureGroup: any }) =>
    makePanelGrid({ 
        Leaflet,
        findIntersectedGrids,
        fillRectangleWithRectangles, 
        fillPolygonWithRectangles,
        generateUUID
    }).addPolygonToGrid({ latLngs, featureGroup, context });

const makeHandleObstacle = MakeHandleObstacle({ turf, generateUUID, polygon, addPolygonToGrid });

// const makeObstacle = ({ context, event } : { context: any, event:any }) =>
//     makeHandleObstacle
//     .makeObstacle({ context, event });


const restoreAffectedAreas = ({ context, event } : { context: any, event:any }) =>
    makeHandleObstacle.restoreAffectedAreas({ context, event });

const tempRectangle = ({ context } : { context: any }) =>
    makeTempRectangle({ Leaflet })
    .tempRectangle({ context });

const tempPolygon = ({ context } : { context: any }) =>
    makeTempPolygon({ Leaflet })
    .tempPolygon({ context });

// const handleObstacle = ({ context, event } : { context: any, event: any }) =>
//     makeHandleObstacle.handleObstacle({ context, event });

const findIntersectedGrids = (movingShape: any, grids: any) =>
    makeHandleObstacle.findIntersectedGrids(movingShape, grids);

const tempTooltipHandler = ({ context, event } : { context: any, event: any }) =>
    makeTempTooltipHandler({ calculateAngleAndDistanceBetweenPoints })
    .tempTooltipHandler({ context, event });

const panelGrid = ({ context } : { context: any }) =>
    makePanelGrid({ 
        Leaflet,
        findIntersectedGrids,
        fillRectangleWithRectangles, 
        fillPolygonWithRectangles,
        generateUUID
    }).panelGrid({ context });



const startMap = ({ context, event } : { context: any, event:any }) =>
    makeStartMap({ Leaflet})
    .startMap({ context, event });

const recenterMap = ({ context, event } : { context: any, event:any }) =>
    makeStartMap({ Leaflet })
    .recenterMap({
        context,
        event
    })

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export {
    addPolygonToGrid,
    clickHandlers,
    paddedPolygon,
    panelGrid,
    startMap,
    tempRectangle,
    tempPolygon,
    tempTooltipHandler,
    makeObstacle,
    polygon,
    rectangle,
    handleObstacle,
    recenterMap,
    restoreAffectedAreas,
}