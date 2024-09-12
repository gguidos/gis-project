export default function makeObstacle({
    findIntersectedGrids,
    generateUUID,
    polygon,
    turfPolygon
}:
{
    findIntersectedGrids: Function,
    generateUUID: Function,
    polygon: Function,
    turfPolygon: Function
}) {
    return Object.freeze({ obstacle })
    function obstacle({ context }:{ context: any}) {
        const obstacle = {
            id: generateUUID(),
            shape: polygon({ context }),
            intersectionGrids: [],
            cache: {
                polygon: {}
            }
        }
        obstacle.shape.dragging.enable()
        context.mainFeatureGroup.addLayer(obstacle.shape)
        turfPolygon({ shape: obstacle.shape, cache: obstacle.cache })

        obstacle.intersectionGrids = findIntersectedGrids({
            shape: obstacle.cache.polygon,
            grids: context.grids
        })

        context.obstacles.push(obstacle)

        return {
            obstacles: context.obstacles
        }
    }
}