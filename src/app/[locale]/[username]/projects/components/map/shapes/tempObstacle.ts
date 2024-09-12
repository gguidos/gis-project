export default function makeTempObstacle(
    { Leaflet } : 
    { Leaflet: any }){
    return(Object.freeze({ tempObstacle }))
    function tempObstacle({ context } : { context: any}) {
        // const drawnItems = Leaflet.featureGroup();
        // context.mainFeatureGroup.addLayer(drawnItems)
        
        const tempShape = Leaflet.rectangle(
          context.mapInstance,
          context.config.rectangle.options
        );
        const tempPolyline =  Leaflet.polyline(
          context.mapInstance,
          context.config.rectangle.options
        );

        tempShape.enable()
        tempPolyline.enable()
        
        return {
            // activeFeatureGroup: drawnItems,
            tempShape,
            tempPolyline
        }
    }
}