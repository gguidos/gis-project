// NewModal.tsx - Enhanced modal with integrated Toolbar and dynamic content switching
import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogOverlay } from '@/components/ui/dialog';
import Toolbar from './toolbar';
import AddressInfo from '../address-info';
import PrivateInfo from '../private-info';

interface NewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  activeContent?: string;
}

const NewModal: React.FC<NewModalProps> = ({ isOpen, onClose, title, activeContent }) => {
  const [currentContent, setCurrentContent] = useState<string>(activeContent || '');
  const [currentTitle, setCurrentTitle] = useState<string>(title);
  const [disableTooltips, setDisableTooltips] = useState<boolean>(false);
  const initialFocusRef = useRef<HTMLDivElement | null>(null);
  
  const [selectedToolbarItem, setSelectedToolbarItem] = useState<string>(activeContent || '');

  // Effect to update the title based on current content
  useEffect(() => {
    switch (currentContent) {
      case 'project':
        setCurrentTitle('Project Information');
        break;
      case 'customer':
        setCurrentTitle('Customer Information');
        break;
      case 'address':
        setCurrentTitle('Address Information');
        break;
      case 'electricity':
        setCurrentTitle('Electricity');
        break;
      case 'addons':
        setCurrentTitle('Additions');
        break;
    }
  }, [currentContent, title]);

  // Effect to set initial focus when the modal opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (initialFocusRef.current) {
          initialFocusRef.current.focus();
          console.log("Focused on initial focus element");
        }
      }, 0); // Ensure the DOM is ready

      return () => clearTimeout(timer); // Cleanup if component unmounts
    }
  }, [isOpen]); // Only run when isOpen changes

  const renderContent = () => {
    switch (currentContent) {
      case 'project':
        return <div>Project Content</div>;
      case 'customer':
        return <PrivateInfo />;
      case 'address':
        return <AddressInfo />;
      default:
        return <div>Select an option from the toolbar</div>;
    }
  };

  const handleToolbarSelect = (content: string) => {
    setCurrentContent(content);
    setSelectedToolbarItem(content);
  };

  const handleOpenChange = (open: boolean) => {
    console.log(`Modal open state changed: ${open}`);
    if (open) {
      setDisableTooltips(true);  // Disable tooltips when modal is open
    } else {
      setDisableTooltips(false); // Re-enable tooltips when modal closes
      onClose(); 
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        console.log(`Dialog open state changed: ${open}`);
        handleOpenChange(open); // Ensure the handler is linked correctly
      }}
      modal={true}
    >
      <DialogOverlay onClick={(e) => e.stopPropagation()} />
      <DialogContent
        aria-labelledby="dialog-title"
        aria-describedby={undefined}
        onInteractOutside={(event) => event.preventDefault()}
        className="flex p-0 h-[32rem] max-w-none w-[600px]"
      >
        {/* Focus trap to prevent toolbar buttons from gaining initial focus */}
        <div 
          ref={initialFocusRef} 
          tabIndex={-1} 
          aria-hidden="true" 
          style={{
            position: 'absolute',
            width: 0,
            height: 0,
            overflow: 'hidden',
            border: 0,
            padding: 0,
            margin: 0
          }} 
        />

        <Toolbar
          onSelect={handleToolbarSelect}
          selectedItem={selectedToolbarItem}
          disableTooltips={disableTooltips} // Pass disableTooltips state
        />
        <div className="flex-grow flex flex-col w-full my-7 mx-2">
          <DialogHeader>
            <DialogTitle>{currentTitle}</DialogTitle>
          </DialogHeader>
          <div className="flex w-[500px] items-start mx-auto my-4">
            {renderContent()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewModal;
