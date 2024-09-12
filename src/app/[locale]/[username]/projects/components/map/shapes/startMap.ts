export default function makeStartMap(
    { Leaflet } : 
    { Leaflet: any }){
    return(Object.freeze({ startMap, recenterMap }))
    function startMap({ context, event } : { context: any, event:any }) {
        const mapInstance = Leaflet.map({
            mapRef: event.mapRef,
            mapLayer: context.mapLayer.link,
            config: context.config,
            center: event.center
          })

          const mainFeatureGroup = Leaflet.featureGroup()
  
          mapInstance.addLayer(mainFeatureGroup)

          return {
            mapInstance,
            mainFeatureGroup
          }
    }

    function recenterMap({ context, event }: { context: any; event: any }) {
      console.log(context.currentCoords)
      // if (!context.mapInstance) return;
      
      // // Recenter the map using Leaflet's setView method
      context.mapInstance.setView(context.currentCoords, context.mapInstance.getZoom());
      // console.log(context.mapInstance)
      // return context.mapInstance;
    }
}