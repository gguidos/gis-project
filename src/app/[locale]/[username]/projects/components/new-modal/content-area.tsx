// ContentArea.tsx - Display different contents based on selected toolbar item
import React from 'react';

interface ContentAreaProps {
  selectedContent: string | null;
}

const ContentArea: React.FC<ContentAreaProps> = ({ selectedContent }) => {
  if (!selectedContent) {
    return <div>Please select an option from the toolbar.</div>;
  }

  return (
    <div>
      <h2>{selectedContent}</h2>
      <p>This is the content area for {selectedContent}.</p>
    </div>
  );
};

export default ContentArea;
