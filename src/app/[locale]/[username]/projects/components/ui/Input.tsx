// components/ui/CustomInput.tsx
'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react'; // Importing the clear icon

interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  isDisabled?: boolean;
  inputClasses?: string;
  dynamicIcon?: React.ReactNode; // Optional dynamic icon
  onClear?: () => void; // Function to clear the input
  readOnly?: boolean; // Whether the input is read-only
  onClick?: () => void; // Click handler, e.g., to open a modal
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder,
  isDisabled = false,
  inputClasses = "px-2 py-1 pr-10 bg-background transition-all duration-200 hover:bg-secondary focus:ring-1 focus:ring-primary disabled:text-foreground disabled:bg-muted disabled:opacity-1",
  dynamicIcon,
  onClear,
  readOnly = false,
  onClick,
}) => {
  return (
    <div className="relative">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClasses}
        disabled={isDisabled}
        readOnly={readOnly}
        onClick={onClick}
      />
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
        {/* Dynamic Icon */}
        {dynamicIcon}
      </div>
    </div>
  );
};

export default CustomInput;
