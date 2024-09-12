import * as turf from '@turf/turf'
const turfBearingToAzimuth = require('@turf/helpers').bearingToAzimuth

function removeIntersectedGrids({
    shape,
    grids
}:{
    shape: any,
    grids: any }) {
    const intersections: any = []
    grids.forEach((grid: any) => {
        grid.gridFeatureGroup.eachLayer(function(layer: any) {
            const intersection = findAndRemoveIntersections(layer, shape, grid)
            if (intersection) {
                intersections.push({
                    gridId: grid.gridId,
                    coordinates: layer.getLatLngs()})
            }
        });
    })

    return intersections;
}

function findAndRemoveIntersections(layer: any, movingShape: any, grid: any) {
    let layerGeoJSON = layer.toGeoJSON();
    let intersection = intersect({shape1: movingShape, shape2: layerGeoJSON})
    
    if (intersection) {
        grid.gridFeatureGroup.removeLayer(layer)
        return intersection
    }
}

function calculateVincentyAngle(start: any, end: any) {
    const startPoint = turf.point([start.lng, start.lat]);
    const endPoint = turf.point([end.lng, end.lat]);
    const angle = turf.bearing(startPoint, endPoint);
    return angle;
}

function makeTurfPolygonFromShape({shape, cache}:{shape: any, cache?: any}) {
    const latLngs = shape.getLatLngs()[0].map((ll:any) => [ll.lng, ll.lat])
    latLngs.push(latLngs[0]);
    const polygon = makeTurfPolygonFromCoords({latLngs})
    if (cache) cache.polygon = polygon;

    return polygon;
}

const intersect = (
    { shape1, shape2 } :
    {shape1: any, shape2: any}) => {
        return turf.intersect(shape1, shape2);
}

function makeTurfPolygonFromCoords({latLngs}:{latLngs: any}) {
    return turf.polygon([latLngs]);
}

function polygon({latLngs}:{latLngs: any}) {
    console.log([latLngs])
    return turf.polygon([latLngs]);
}

function bearingToAzimuth({angle}:{angle: any}) {
    return turfBearingToAzimuth(angle);
}


function feature({geometry}:{geometry: any}) {
    return turf.feature(geometry);
}

function point({latLngs}:{latLngs: any}) {
    return turf.point([latLngs]);
}

export function findIntersectedObstacles(movingShape: any, context: any) {
    const intersectingObstacles: any = []
    context.obstacles.forEach((obstacle: any) => {
        const shape = obstacle.cache.polygon
        const mShape = makeTurfPolygonFromShape({shape: movingShape.shape });
        const intersected = intersect({shape1: shape, shape2: mShape})
        if (intersected && obstacle.id !== movingShape.id) {
            intersectingObstacles.push(obstacle)
        }
    })
    return intersectingObstacles
}

export {
    bearingToAzimuth,
    calculateVincentyAngle,
    feature,
    intersect,
    polygon,
    point,
    removeIntersectedGrids,
    makeTurfPolygonFromShape,
    makeTurfPolygonFromCoords
}