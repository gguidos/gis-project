// useDrawVertexHandler.tsx
import { useEffect } from 'react';

const useDrawOnComplete = ({
    current,
    send
}:{
    current: any,
    send: Function
}) => {
    useEffect(() => {
        if (!current.context.mapInstance) return;
        console.log('draw:created')
        const drawVertexHandler = (event: any) => {
            if (current.context.isDrawingPolygon) {
                send({ type: 'FINALIZE_POLYGON' })
            }

            if (current.context.isDrawingObstacle){
                console.log('draw: complete obstacle')
                send({ type: 'FINALIZE_OBSTACLE' })
            } 
            
        };

        current.context.mapInstance.on('draw:created', drawVertexHandler);
        
        return () => {
            current.context.mapInstance.off('draw:created', drawVertexHandler);
        };
    }, [
        current.context.mapInstance,
        current.context.isDrawingPolygon,
        current.context.isDrawingObstacle,
        send
    ]);
};

export default useDrawOnComplete;
