
let Leaflet: any = undefined;
if (typeof window !== "undefined") {
  Leaflet = require('leaflet');
  require('leaflet-draw')
  require('leaflet-path-drag');
  require('leaflet/dist/leaflet.css')
}

function map({ mapRef, mapLayer, config, center} : 
  { mapRef: any,mapLayer: any, config: any, center: any}) {
    const map = Leaflet
      .map(mapRef)
      .setView([center.lat, center.lng], config.tileLayer.zoom.default);
    Leaflet.tileLayer(mapLayer, {
    ...config.tileLayer.zoom,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  }).addTo(map);

  Leaflet.control.scale().addTo(map);

  return map;
}

function drawControls() {
  return new Leaflet.Control.Draw({
    draw: {
        polygon: true,
        polyline: true,
        rectangle: true,
        circle: true,
        marker: true
    }
  });
}

function featureGroup() {
  const drawnItems = new Leaflet.FeatureGroup();
  return drawnItems;
}

function LatLng(y:any, x: any) {
  return new Leaflet.LatLng(y, x)
}

function rectangle(mapInstance: any, options: any) {
  const rectangleTool = new Leaflet.Draw.Rectangle(mapInstance, options);
  return rectangleTool;
}

function polygon(mapInstance: any, options: any) {
  const polygonTool = new Leaflet.Draw.Polygon(mapInstance, options);
  polygonTool.enable();
  return polygonTool;
}

function polyline(mapInstance: any, options: any) {
  const polylineTool = new Leaflet.Draw.Polyline(mapInstance, options);
  return polylineTool;
}

function tooltip({ config } : { config: any }) {
  const tempTooltip = new Leaflet.tooltip(config)

  return tempTooltip;
}

function bounds({points}: {points: any[]}) {
  return Leaflet.latLngBounds(points);
}

function icon({ config } : { config: any }) {
  return Leaflet.icon(config);
}

function simplePolyline({config, bounds }:{ config: any, bounds: any}) {
  return Leaflet.polyline(bounds, config);
}

function simpleRectangle({ config, bounds } :
  {
    config:any,
    bounds: any
  }) {
    return Leaflet.rectangle(bounds, config);
}

function marker({ config, bounds } : { config: any, bounds: any }) {
  return Leaflet.marker(bounds, config)
}

function simplePolygon({ config, bounds } :
  {
    config:any,
    bounds: any
  }) {
    return Leaflet.polygon(bounds, config);
}

export {
  bounds,
  drawControls,
  icon,
  map,
  featureGroup,
  rectangle,
  LatLng,
  marker,
  polygon,
  simpleRectangle,
  simplePolygon,
  simplePolyline,
  polyline,
  tooltip
}