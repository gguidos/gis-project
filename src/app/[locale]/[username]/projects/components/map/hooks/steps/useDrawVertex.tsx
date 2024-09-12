// useDrawVertexHandler.tsx
import { useEffect } from 'react';

const useDrawVertexHandler = ({
    current,
    send
}:{
    current: any,
    send: Function
}) => {
    useEffect(() => {
        if (!current.context.mapInstance) return;
  
        const drawVertexHandler = (event: any) => {
            console.log('draw:drawvertex')
            const layers = event.layers.getLayers();
            const lastPoint = layers[layers.length - 1] as L.Marker;      
            send({
                type: 'ADD_CURRENT_POINT',
                point: lastPoint.getLatLng()
            });
        };

        current.context.mapInstance.on('draw:drawvertex', drawVertexHandler);
        
        return () => {
            current.context.mapInstance.off('draw:drawvertex', drawVertexHandler);
        };
    }, [
        current.context.mapInstance,
        send
    ]);
};

export default useDrawVertexHandler;
