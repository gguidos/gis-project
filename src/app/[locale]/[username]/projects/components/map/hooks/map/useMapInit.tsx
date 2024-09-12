import { useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
import { setMapCenter } from '@/app/[locale]/redux/ground-surface-slice';
import useDrawingManagement from '../draw/useDrawingManagement';

const useMapInit = ({
  current,
  send
}:
{
  current: any,
  send: Function
}) => {
  const $mapRef = useRef<any>(null);
  const center = useAppSelector((state: any) => state.map.geometry.location)

  useEffect(() => {
    if (!current.context.currentCoords) return;

    if (!current.context.mapInstance) {
      send({ type: 'INITIALIZE_MAP', mapRef: $mapRef.current, center })
    } else {
      send({ type: 'RECENTER_MAP', mapRef: current.context.mapInstance, center })
    }
    
    
    return () => {
      if (!current.context.mapInstance) return;
      current.context.mapInstance.remove();
      $mapRef.current = null
    };
  }, [
      center,
      current.context.currentCoords,
      // current.context.mapInstance,
      send
  ]);

  useDrawingManagement({ current, send })

  return <div ref={$mapRef} style={{ height: '95vh' }} />;
};

export default useMapInit;
