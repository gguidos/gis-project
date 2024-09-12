import * as helpers from '../../turf';
import makeHandleObstacle from './makeHandleObstacle';
import makeObstacle from './makeObstacle';
import makeRestoreObstacleArea from './makeRestoreObstacleArea';
import { addPolygonToGrid, polygon } from '..'

const removeIntersectingShapes = ({ context, event }: { context: any, event: any}) =>
    makeHandleObstacle({ 
        findIntersectedGrids: helpers.removeIntersectedGrids,
        turfPolygon: helpers.makeTurfPolygonFromShape
    }).removeIntersectingShapes({ context, event });

const obstacle = ({ context }: { context: any }) =>
    makeObstacle({
        generateUUID,
        findIntersectedGrids: helpers.removeIntersectedGrids,
        polygon,
        turfPolygon: helpers.makeTurfPolygonFromShape
    }).obstacle({ context });

const restoreAffectedAreas = ({ context, event}: { context: any, event: any}) =>
    makeRestoreObstacleArea({
        addPolygonToGrid,
        intersect: helpers.intersect,
        makeTurfPolygonFromCoords: helpers.makeTurfPolygonFromCoords,
        findIntersectedObstacles: helpers.findIntersectedObstacles,
        turfPolygon: helpers.makeTurfPolygonFromShape
    }).restoreObstacleArea({ context, event })

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export {
    removeIntersectingShapes,
    obstacle,
    restoreAffectedAreas
}