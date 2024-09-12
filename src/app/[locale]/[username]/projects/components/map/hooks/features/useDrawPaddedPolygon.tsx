import { useEffect } from 'react';

const useDrawPaddedPolygon = ({
    current,
    send
}:{
    current: any,
    send: Function
}) => {
    useEffect(() => {
        if (current.context.isDrawingObstacle || !current.context.shape) return;
        console.log('draw: creating padded polygon')
        
        send({ type: 'ADD_PADDED_POLYGON' });
    }, [
        current.context.shape,
        current.context.isDrawingObstacle,
        send
    ]);
}

export default useDrawPaddedPolygon;