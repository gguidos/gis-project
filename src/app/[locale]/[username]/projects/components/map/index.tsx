import Map from './MapComponent'

const MapComponent = ({
    current,
    send 
}:{
    current: any,
    send: Function,
}) => {    
    return (
        <Map
            current={ current }
            send={send}
        />
    )
};

export default MapComponent;