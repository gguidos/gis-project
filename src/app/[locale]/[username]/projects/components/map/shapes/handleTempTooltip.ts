export default function makeTempTooltipHandler(
    { calculateAngleAndDistanceBetweenPoints } : 
    { calculateAngleAndDistanceBetweenPoints: any }){
    return(Object.freeze({ tempTooltipHandler }))
    function tempTooltipHandler({ context, event } : { context: any, event:any }) {
        const latlng = event.latlng;
        const minStrokeLength = context.config.minStrokeLength;
        const maxStrokeLength = context.config.maxStrokeLength;
        const polygonPoints = context.polylinePoints;
        const mousePosition = [event.latlng.lat, event.latlng.lng];
        const lastPoint = polygonPoints[polygonPoints.length - 1];
        const strokeLength = calculateAngleAndDistanceBetweenPoints(lastPoint, latlng).distance;
        let allowed = context.allowedStroke;
        if (strokeLength < minStrokeLength ||
            strokeLength > maxStrokeLength) {
            allowed = false
            context.tempTooltip.setLatLng({lat: mousePosition[0], lng: mousePosition[1]})
                .setContent(`<div>Unallowed:</div><div>Distance: ${Math.round(strokeLength)}m </div>`);
        } else {
            context.tempTooltip.setLatLng(latlng).setContent(`<div>Distance:${Math.round(strokeLength)} m</div>`);
            allowed =  true
        }

        if (!context.tempTooltip._map) context.tempTooltip.addTo(context.mapInstance);
        
        return {
            allowed,
            strokeLength,
        }
    }
}