export default function makeClicHandlers(
    { 
        Leaflet
    } : { 
        Leaflet: any
    }){
    let currentlyActiveEdge: any = null;
    
    return(Object.freeze({ clickHandlers }))


    function clickHandlers({ context, event } : { context: any, event: any }) {
        const lPolygon = context.shape;
        addEdgeClickHandlers(lPolygon, context, event, onEdgeClick);
    
        return clickHandlers
    }

    function addEdgeClickHandlers(lPolygon: any, context: any, event: any, onEdgeClick: any, ) {
        const points = context.shape.getLatLngs()[0]; // Assuming the polygon is a simple one (not MultiPolygon)
        const send = event.send
        const gridId = context.shape.gridId
        const gridToRotate = context.grids.filter((grid: any) => grid.gridId === gridId)[0]
        points.forEach((point: any, index: any) => {
            const nextPoint = points[(index + 1) % points.length]; // Wrap around to make the polygon close
            const edge = Leaflet.simplePolyline({bounds: [point, nextPoint], config: { color: 'transparent', weight: 10 }}); // Transparent and thicker for easy clicking
            edge.addTo(context.mapInstance); // Assuming there's a map object in your context
            edge.on('click', () => onEdgeClick(point, nextPoint, index, context,  gridToRotate, edge));
            edge.on('contextmenu', (event: any) => onEdgeRightClick(event, point, nextPoint, index, context,edge, send));
        });
    }

    function onEdgeRightClick(event: any, start: any, end: any, index: any, context: any, edge: any, send: Function) {
        event.originalEvent.preventDefault(); // Prevent the default context menu from opening

        context.contextMenu.visible = true;
        context.contextMenu.position = {
            x: event.originalEvent.pageX,
            Y: event.originalEvent.pageY
        }

        send({ type: 'SHOW_MENU', x: event.originalEvent.pageX, y: event.originalEvent.pageY})
        console.log(`Right-click on edge from ${start} to ${end} at index ${index}`);
    }
    
    function onEdgeClick(start: any, end: any, index: any, context: any, gridToRotate: any, edge: any) {
        highlightGrid(edge)
        console.log(`Edge clicked: Start ${start}, End ${end}, Index ${index}`);
        // const angle = calculateAngle(start, end)
        // const pivot = calculateCentroid(context.shape.getLatLngs()[0])
        // // visualizeBounds(gridToRotate.gridFeatureGroup, context.mapInstance);
        // markPivot(pivot, context.mapInstance);
        // rotateGrid(gridToRotate.gridFeatureGroup, angle, pivot);
        // console.log(`Grid rotated by ${angle} degrees around pivot ${pivot}`);
        // Here you can handle the rotation or whatever needs to be done with the edge
    }

    function markPivot(pivot: any, mapInstance: any) {
        const marker = Leaflet.marker({bounds: [pivot.lat, pivot.lng], config: {
            icon: Leaflet.icon({
                config: {
                iconUrl: './marker.webp',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            }}),
            title: "Rotation Center"
        }});
        marker.addTo(mapInstance);
    }

    function highlightGrid(currentEdge: any) {
        if (currentlyActiveEdge && currentlyActiveEdge !== currentEdge) {
            // Reset the previous active edge
            currentlyActiveEdge.setStyle({ color: 'transparent', weight: 10 });
            currentlyActiveEdge.isHighlighted = false;
        }
    
        // Check if the current edge is already highlighted
        if (!currentEdge.isHighlighted) {
            currentEdge.setStyle({ color: 'red', weight: 3 });
            currentEdge.isHighlighted = true;
            currentlyActiveEdge = currentEdge; // Set the new active edge
        } else {
            currentEdge.setStyle({ color: 'transparent', weight: 10 });
            currentEdge.isHighlighted = false;
            currentlyActiveEdge = null; // No active edge
        }
    }

    function visualizeBounds(gridFeatureGroup: any, map: any) {
        const bounds = gridFeatureGroup.getBounds();
        Leaflet.simpleRectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
    }

    function calculateCentroid(latlngs: any) {
        let latSum = 0, lngSum = 0, numPoints = latlngs.length;
        latlngs.forEach((latlng: any) => {
            latSum += latlng.lat;
            lngSum += latlng.lng;
        });
        return { lat: latSum / numPoints, lng: lngSum / numPoints };
    }

    function calculateAngle(start: any, end: any) {
        const dy = end.lat - start.lat; // Difference in latitude
        const dx = end.lng - start.lng; // Difference in longitude
        const angleRadians = Math.atan2(dy, dx);
        return angleRadians * (180 / Math.PI); // Convert radians to degrees
    }
    function rotateGrid(gridFeatureGroup: any, angle: any, pivot: any) {
        const rad = (angle * Math.PI) / 180;
        gridFeatureGroup.eachLayer((layer: any) => {
            const newLatLngs = layer.getLatLngs()[0].map((latLng: any) => {
                const dx = latLng.lng - pivot.lng;
                const dy = latLng.lat - pivot.lat;
    
                // Rotating coordinates around pivot
                const newX = dx * Math.cos(rad) - dy * Math.sin(rad) + pivot.lng;
                const newY = dy * Math.cos(rad) + dx * Math.sin(rad) + pivot.lat;
    
                return new Leaflet.LatLng(newY, newX);
            });
            layer.setLatLngs([newLatLngs]);
        });
    
        // Make sure the map view adjusts to show the new position of the grid
        const bounds = gridFeatureGroup.getBounds();
        gridFeatureGroup._map.fitBounds(bounds);
    }
}