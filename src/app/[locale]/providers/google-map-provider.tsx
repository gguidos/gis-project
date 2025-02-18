// Import necessary modules and functions from external libraries and our own project
'use client'
import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { ReactNode, useEffect } from 'react';

// Define a list of libraries to load from the Google Maps API
const libraries = ['places', 'drawing', 'geometry', 'marker', 'maps'];

// Define a function component called MapProvider that takes a children prop
export function GoogleMapProvider({ children }: { children: ReactNode }) {

  // Load the Google Maps JavaScript API asynchronously
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
    libraries: libraries as Libraries,
  });

  useEffect(() => {
    if (scriptLoaded && window.google) {
    }
  }, [scriptLoaded]);

  if(loadError) return <p>Encountered error while loading google maps</p>

  if(!scriptLoaded) return null

  // Return the children prop wrapped by this MapProvider component
  return children;
}