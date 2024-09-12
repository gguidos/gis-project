export default function makeHandleObstacle({ 
    findIntersectedGrids,
    turfPolygon
}:{
    findIntersectedGrids: any,
    turfPolygon: any
}) {
    return Object.freeze({ removeIntersectingShapes })
    function removeIntersectingShapes({
        context,
        event
    }:{
        context: any,
        event: any
    }) {
        const contextObstacle = event.obstacle;

        
        turfPolygon({
            shape: event.target,
            cache: contextObstacle.cache
        });

        contextObstacle.intersectionGrids = findIntersectedGrids({
            shape: contextObstacle.cache.polygon,
            grids: context.grids
        })
    }
}