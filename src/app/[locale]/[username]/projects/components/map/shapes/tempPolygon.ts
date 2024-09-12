export default function makeTempPolygon(
    { Leaflet } : 
    { Leaflet: any }){
    return(Object.freeze({ tempPolygon }))
    function tempPolygon({ context } : { context: any}) {
        const drawnItems = Leaflet.featureGroup();
        context.mainFeatureGroup.addLayer(drawnItems)
        
        const tempPolyline =  Leaflet.polyline(
          context.mapInstance,
          context.config.rectangle.options
        );
        
        const tempTooltip = Leaflet.tooltip({
          config: context.config.allowedPolylineTooltip.options
        })

        const tempShape = Leaflet.polygon(
          context.mapInstance,
          context.config.rectangle.options
        );

        tempPolyline.enable()
        tempShape.enable()
        
        
        return {
            activeFeatureGroup: drawnItems,
            tempShape,
            tempPolyline,
            tempTooltip
        }
    }
}