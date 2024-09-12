'use client'
import React, { useEffect, ReactNode } from 'react';
import { useMapContext } from '../providers/map-context-provider';

interface AppInitializerProps {
    children: ReactNode; // Explicitly define children as ReactNode
}

const AppInitializer: React.FC<AppInitializerProps> = (
    { children } :
    { children: ReactNode}) => {
  const { current, send: mapSend } = useMapContext();
//   const { initializeUser } = useUserContext();
//   const { initializeSettings } = useSettingsContext();

  useEffect(() => {
    // Initialize map if needed
    if (!current.context.isCalculatorReady) {
      console.log('Initializing Calculator...');
      mapSend({ type: 'INITIALIZE_CALCULATOR' });
    }
  }, [current, mapSend,]);

  return <>{children}</>;
};

export default AppInitializer;
