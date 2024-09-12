import dynamic from 'next/dynamic';

const LeafletDrawingLayer = dynamic(() => 
  import('./hooks/map/useMapInit'),
  { ssr: false }
);

const Map = ({
  current,
  send 
}:{ 
  current: any,
  send: Function
}) => {
  return (
    <div>
        <LeafletDrawingLayer
          current={ current }
          send={ send }
        />
    </div>
  );
};

export default Map;