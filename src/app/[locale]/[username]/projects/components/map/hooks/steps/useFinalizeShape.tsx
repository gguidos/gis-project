import { useEffect } from 'react';

const useFinalizeShape = ({
    current,
    send
}:{
    current: any
    send: Function
}) => {
    useEffect(() => {
        if (current.context.polylinePoints.length < 2) return
        if (current.context.polylinePoints.length === 2) {        
            if (current.context.isDrawingRectangle){
                console.log('draw: complete rectangle')
                send({ type: 'FINALIZE_MAIN_SHAPE' })
            }
        }

        return;
    }, [
        current.context.isDrawingRectangle,
        current.context.polylinePoints,
        send
    ]);

}

export default useFinalizeShape;