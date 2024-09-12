// import MapComponent from '@/app/leaflet-test/components/map';
'use client'
import { useEffect, useState } from 'react'
import Conditional from '@/components/utils/ConditionalRendering';
import { useMapContext } from '../../providers/map-context-provider'
import MapComponent from './components/map';
import './style.css'
import 'leaflet-draw/dist/leaflet.draw.css';

export default function Map() {
  const { current, send } = useMapContext();
  return (
    <div>
    <Conditional showWhen={!current.context.isCoordsReady}>
      <div className="h-full grid-background text-white"></div>
    </Conditional>
    <Conditional showWhen={current.context.isCoordsReady}>
      <MapComponent current={ current } send={ send } />
    </Conditional>
  </div>
  );
}
