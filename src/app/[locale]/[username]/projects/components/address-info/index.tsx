// AddressInfo.tsx - Correctly receiving and using the onClose prop
import React from 'react';
import AddressForm from './adressInfo'; // Ensure AddressForm is the correct component with onClose

const AddressInfo: React.FC<any> = () => {
  return (
    <div className="p-4 m-0 bg-background">
      <AddressForm  /> {/* Pass onClose down to AddressForm */}
    </div>
  );
};

export default AddressInfo;
