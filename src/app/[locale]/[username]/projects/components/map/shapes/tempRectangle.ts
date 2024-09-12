export default function makeTempRectangle(
    { Leaflet } : 
    { Leaflet: any }){
    return(Object.freeze({ tempRectangle }))
    function tempRectangle({ context } : { context: any}) {
        const drawnItems = Leaflet.featureGroup();
        context.mainFeatureGroup.addLayer(drawnItems)
        
        const tempPolyline =  Leaflet.polyline(
          context.mapInstance,
          context.config.rectangle.options
        );
        const tempShape = Leaflet.rectangle(
          context.mapInstance,
          context.config.rectangle.options
        );
         
        const tempTooltip = Leaflet.tooltip({
          config: context.config.allowedPolylineTooltip.options
        })
    
        tempShape.enable()
        tempPolyline.enable()
        
        return {
            activeFeatureGroup: drawnItems,
            tempShape,
            tempPolyline,
            tempTooltip
        }
    }
}