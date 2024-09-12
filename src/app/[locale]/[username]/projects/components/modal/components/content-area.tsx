// ContentArea.tsx - Dynamic content based on the selected icon
import React from 'react';

interface ContentAreaProps {
  selectedContent: string | null;
}

const ContentArea: React.FC<ContentAreaProps> = ({ selectedContent }) => {
  if (!selectedContent) {
    return <div>Select an item from the toolbar</div>;
  }

  return <div>{selectedContent}</div>;
};

export default ContentArea;
