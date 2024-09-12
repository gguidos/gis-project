import useDrawPolylineVertex from '../steps/useDrawVertex';
import useHandleMouseMove from '../mouse/useHandleMouseMove';
import useFinalizeShape from '../steps/useFinalizeShape';
import useDrawPaddedPolygon from '../features/useDrawPaddedPolygon';
import useDrawPolygonGrid from '../features/useDrawPolygonGrid';
import useDrawCreated from '../steps/useDrawCreated';
import useShapeDragging from '../mouse/useShapeDragging';
import useDrawOnComplete from '../steps/useDrawOnComplete';

const useDrawingManagement = 
  ({
    current,
    send 
  }:{
    current: any,
    send: Function
  }) => {

  const args = {
    current,
    send
  } 

  useDrawOnComplete(args)
  useDrawPolylineVertex(args)
  useHandleMouseMove(args)
  useFinalizeShape(args)
  useDrawPaddedPolygon(args)
  useDrawPolygonGrid(args)
  useDrawCreated(args)
  useShapeDragging(args)


  // Return the FeatureGroup for external use if needed
  return { drawnItems: current.context.drawnItems };
};

export default useDrawingManagement;
