'use client'
import React, { createContext, useContext, useEffect } from 'react';
import { useMachine } from '@xstate/react';
import machine from '../[username]/projects/xState/machine'; // Ensure this path is correct

// Create a context for the Map
const MapContext = createContext<any>(null);

// Create a provider component
export const MapContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [current, send] = useMachine(machine); // Ensure machine is imported correctly

   // Initialize calculator when the provider mounts
  //  useEffect(() => {
  //   if (!current.context.isCalculatorReady) {
  //     console.log('Initializing calculator...');
  //     send({ type: 'INITIALIZE_CALCULATOR' });
  //   }
  // }, [current.context.isCalculatorReady, send]);

  return (
    <MapContext.Provider value={{ current, send }}>
      {children}
    </MapContext.Provider>
  );
};

// Custom hook to use the Map context
export const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error('useMapContext must be used within a MapProvider');
  }
  return context;
};
