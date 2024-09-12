// InputFieldWithModal.tsx - Open modal with specific content based on clicked input field
'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import NewModal from '../new-modal'; // Import the correct modal component
import CustomInput from './Input';

interface InputFieldWithModalProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  modalTitle: string;
  modalInputClasses: string;
  buttonLabel: string;
  onSave: (value: string) => void;
  dynamicIcon: React.ReactNode;
  useModal?: boolean;
  onClose?: () => void; // Unified onClose prop
  initialContent?: string; // New prop to specify which content to open
}

const InputFieldWithModal: React.FC<InputFieldWithModalProps> = ({
  value,
  onChange,
  placeholder,
  modalTitle,
  dynamicIcon,
  useModal = true,
  onClose,
  initialContent
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState<string>('project'); // Default content

  const handleOpenModal = () => {
    if (useModal) {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    if (onClose) onClose(); // Trigger onClose prop if provided
  };

  return (
    <>
      <CustomInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={useModal}
        onClick={handleOpenModal}
        dynamicIcon={dynamicIcon}
      />
      <NewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalTitle}
        activeContent={initialContent} // Set initial content if needed
      />
    </>
  );
};


export default InputFieldWithModal;
