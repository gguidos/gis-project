import { useEffect } from 'react';

const useDrawCreated = ({
    current,
    send
}:{
    current: any,
    send: Function
}) => {

    useEffect(() => {
        if (!current.context.isPanelGridReady) return;
        send({ type: 'FINALIZE_SHAPE_GROUP' })

    }, [current.context.isPanelGridReady, send]);
}

export default useDrawCreated;