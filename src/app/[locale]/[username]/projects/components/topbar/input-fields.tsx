// components/ui/TopBarInputFields.tsx - Ensure proper handling of modal close events
'use client';
import React, { useState, useEffect } from 'react';
import { MapPin, Info, User } from 'lucide-react'; 
import InputFieldWithModal from '../ui/InputWModal'; 
import UserInfo from '../private-info'; 
import AddressInfo from '../address-info'; 
import { useAppSelector } from '@/lib/store/hooks';
import { useMapContext } from '../../../../providers/map-context-provider';

const inputClasses = "px-2 py-1 pr-10 bg-background transition-all duration-200 hover:bg-secondary focus:ring-1 focus:ring-primary disabled:text-foreground disabled:bg-muted disabled:opacity-1";

const TopBarInputFields: React.FC = () => {
  const { send } = useMapContext();
  const [projectName, setProjectName] = useState<string>('Untitled Project');
  const [customerInfo, setCustomerInfo] = useState<string>('Enter customer information');
  const [addressInfo, setAddressInfo] = useState<string>('Enter project address');
  const coordinates = useAppSelector(state => state.map.geometry.location);
  const formatedAddress = useAppSelector(state => state.map.addressComponents.formatedAddress) || '';
  const [shouldOpenMap, setShouldOpenMap] = useState(false);

  const handleModalClose = () => {
    console.log('TopBarInputFields: Address modal has been closed');
    setShouldOpenMap(true);
  };

  useEffect(() => setAddressInfo(previous => 
    formatedAddress === '' ? previous : formatedAddress
  ), [formatedAddress])

  useEffect(() => {
    if (shouldOpenMap && coordinates.lat !== '') {
      console.log('Opening the map with coordinates:', coordinates);
      // send({ type: 'SET_CURRENT_COORDS', coords: coordinates })
      setShouldOpenMap(false); // Reset the flag after opening the map
    }
  }, [shouldOpenMap, coordinates]);

  return (
    <div className="flex items-center space-x-2">
      <InputFieldWithModal
        value={projectName}
        onChange={setProjectName}
        placeholder="Untitled Project"
        modalTitle="Project Name"
        modalInputClasses={inputClasses}
        buttonLabel="Save Project Name"
        onSave={setProjectName}
        dynamicIcon={<Info className="text-muted-foreground" />}
        initialContent="project" // Specify the content to display
        onClose={handleModalClose}
      />

      <InputFieldWithModal
        value={customerInfo}
        onChange={setCustomerInfo}
        placeholder="Enter customer information"
        modalTitle="Customer Information"
        modalInputClasses={inputClasses}
        buttonLabel="Save Customer Info"
        onSave={setCustomerInfo}
        dynamicIcon={<User className="text-muted-foreground" />}
        initialContent="customer" // Specify the content to display
        onClose={handleModalClose}
      />

      <InputFieldWithModal
        value={addressInfo}
        onChange={setAddressInfo}
        placeholder="Enter project address"
        modalTitle="Address Information"
        modalInputClasses={inputClasses}
        buttonLabel="Save Address Info"
        onSave={setAddressInfo}
        dynamicIcon={<MapPin className="text-muted-foreground" />}
        initialContent="address" // Specify the content to display
        onClose={handleModalClose}
      />

    </div>
  );
};

export default TopBarInputFields;
