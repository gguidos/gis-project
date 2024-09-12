// Modal.tsx - Enhanced to ensure proper onClose triggering
import React, { useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogOverlay } from '@/components/ui/dialog';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClosed?: () => void; // Optional callback for when the modal is fully closed
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onClosed, title, children }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const hasMounted = useRef(false);

  // Use effect to track modal close events
  useEffect(() => {
    if (hasMounted.current) {
      if (!isOpen && onClosed) {
        console.log('Modal is now closed:', !isOpen);
        onClosed();
      }
    } else {
      hasMounted.current = true;
    }
  }, [isOpen, onClosed]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        console.log(`Modal onOpenChange triggered with open: ${open}`);
        if (!open) {
          console.log('Modal: Calling onClose');
          onClose(); // Trigger onClose when modal is closed by user interaction
        }
      }}
      modal={true}
    >
      <DialogOverlay onClick={(e) => e.stopPropagation()} />
      <DialogContent
        ref={dialogRef}
        aria-labelledby="dialog-title"
        aria-describedby={undefined}
        onInteractOutside={(event) => event.preventDefault()} // Prevent unintended closure from outside clicks
        className="w-max h-screen flex"
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
