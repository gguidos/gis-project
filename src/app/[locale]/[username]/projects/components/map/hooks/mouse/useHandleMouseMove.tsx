// useHandleMouseMove.tsx
import { useEffect } from 'react';
import * as helpers from '../../../../helpers';

const useHandleMouseMove = ({
    current,
    send,
}:{
    current: any,
    send: Function,
}) => {

    useEffect(() => {
        if (!current.context.isMapReady) return;

        const handleMouseMove = (event: any) => {
            if (!current.context.tempTooltip ||
                current.context.isShapeReady ||
                current.context.polylinePoints.length === 0 ||
                current.context.polylinePoints.length > 3) return;
            console.log('draw: handling mouse movement')

            send({type: 'HANDLE_MOUSE_MOVEMENT', event })
        };
        
        current.context.mapInstance.on('mousemove', handleMouseMove);

        return () => {
            current.context.mapInstance.off('mousemove', handleMouseMove);
        };
    }, [
        current.context.mapInstance,
        current.context.isMapReady,
        current.context.tempTooltip,
        current.context.polylinePoints,
        current.context.isShapeReady,
        send
    ]);
};


export default useHandleMouseMove