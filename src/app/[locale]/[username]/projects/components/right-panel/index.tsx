'use client'
import React, { useState, useRef, useEffect } from 'react';
import MyProjects from '../my-projects'

const RightPanel: React.FC<{ selectedOption: string | null; onClose: () => void }> = ({ selectedOption, onClose }) => {
  const [panelWidth, setPanelWidth] = useState(350); // Default width
  const panelRef = useRef<HTMLDivElement>(null);
  const resizerRef = useRef<HTMLDivElement>(null);
  const isResizingRef = useRef(false);

  const handleMouseDown = () => {
    isResizingRef.current = true;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizingRef.current) return;
    const newWidth = window.innerWidth - e.clientX;
    if (newWidth > 200 && newWidth < 600) { // Min and max width
      setPanelWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const renderContent = () => {
    switch (selectedOption) {
      case 'myprojects':
        return <div className="text-foreground"><MyProjects /></div>;
      case 'chart':
        return <div className="p-4 text-foreground">Analytics Content</div>;
      case 'calendar':
        return <div className="p-4 text-foreground">Calendar Content</div>;
      case 'layers':
        return <div className="p-4 text-foreground">Layers Content</div>;
      case 'idea':
        return <div className="p-4 text-foreground">Ideas Content</div>;
      case 'notifications':
        return <div className="p-4 text-foreground">Notifications Content</div>;
      default:
        return <div className="p-4 text-foreground">Default Content</div>;
    }
  };

  return (
    <div
      ref={panelRef}
      className="
        m-0
        top-0
        right-12
        absolute
        z-2
        bg-background
        text-foreground
        border-b-border
        border-r-border
        border-l-border
        border-b-2
        border-r-4
        border-l-4" // Ensure valid z-index
      style={{ width: `${panelWidth}px`, height: '95vh', marginTop: 0}}
    >

      {/* Resizer */}
      <div
        ref={resizerRef}
        onMouseDown={handleMouseDown}
        className="absolute left-0 top-0 h-full w-1 bg-transparent cursor-ew-resize" // Adjust width if needed
      />


      {/* Content based on selected option */}
      {renderContent()}
    </div>
  );
};

export default RightPanel;
