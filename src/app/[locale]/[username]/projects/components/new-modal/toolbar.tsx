// Toolbar.tsx
import React from 'react';
import { Info, User, MapPin, Zap, PackagePlus } from 'lucide-react';
import ToolButton from '../ui/Button';

interface ToolbarProps {
  onSelect: (content: string) => void;
  selectedItem: string;
  disableTooltips: boolean; // Prop to control tooltip visibility
}

const toolbarItems = [
  { id: 'project', icon: <Info />, tooltip: 'Project' },
  { id: 'customer', icon: <User />, tooltip: 'Customer' },
  { id: 'address', icon: <MapPin />, tooltip: 'Address' },
  { id: 'electricity', icon: <Zap />, tooltip: 'Electricity' },
  { id: 'addons', icon: <PackagePlus />, tooltip: 'Additions' },
];

const Toolbar: React.FC<ToolbarProps> = ({ onSelect, selectedItem, disableTooltips }) => {
  return (
    <div className="bg-dark flex flex-col items-center space-y-4 p-0 w-12 border-r-border border-r-4 p-2 py-4">
      {toolbarItems.map((item) => (
        <ToolButton
          key={item.id}
          id={item.id}
          icon={item.icon}
          tooltip={item.tooltip}
          isSelected={selectedItem === item.id}
          onClick={() => onSelect(item.id)}
          disableTooltip={disableTooltips} // Pass the disableTooltip state
        />
      ))}
    </div>
  );
};

export default Toolbar;
