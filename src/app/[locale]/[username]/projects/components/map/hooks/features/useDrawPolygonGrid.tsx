import { useEffect } from "react";

const useDrawPolygonGrid = ({
  current,
  send,
}: {
  current: any;
  send: Function;
}) => {
  useEffect(() => {
    if (!current.context.isPaddedPolygonReady) return;

    console.log("draw: creating panel grid");
    send({ type: "ADD_PANEL_GRID", send });
  }, [current.context.isPaddedPolygonReady, send]);
};

export default useDrawPolygonGrid;
