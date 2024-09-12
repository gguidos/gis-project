// useHandleMouseMove.tsx
import { useEffect } from 'react';

const useShapeDragging = ({
    current,
    send,
}:{
    current: any,
    send: Function,
}) => {
    const obstacleDependencies = JSON.stringify(current.context.obstacles.map((obstacle: any) => ({
        id: obstacle.id,
        intersectionGridsLength: obstacle.intersectionGrids.length
    })));
    
    useEffect(() => {
        if (!current.context.isMapReady || !current.context.obstacles.length) return;
    
        const removeAllEventListeners = () => {
            current.context.obstacles.forEach((obstacle: any) => {
                obstacle.shape.off('dragstart');
                obstacle.shape.off('dragend');
            });
        };
    
        const addEventListeners = () => {
            current.context.obstacles.forEach((obstacle: any) => {
                const dragStartHandler = (event: any) => {
                    if (!obstacle.intersectionGrids.length) return;
                    console.log('Drag started for obstacle:', obstacle.id);
                    send({ type: 'HANDLE_OBSTACLE_MOVEMENT', obstacle, target: event.target });
                };
    
                const dragEndHandler = (event: any) => {
                    console.log('Drag ended for obstacle:', obstacle.id);
                    send({ type: 'HANDLE_OBSTACLE_STOP', obstacleId: obstacle.id, obstacle, target: event.target });
                };
    
                obstacle.shape.on('dragstart', dragStartHandler);
                obstacle.shape.on('dragend', dragEndHandler);
            });
        };
    
        removeAllEventListeners();
        addEventListeners();
    
        return () => {
            removeAllEventListeners();
        };
    }, [
        current.context.obstacles,
        current.context.isMapReady,
        obstacleDependencies,
        send
    ]);
};


export default useShapeDragging