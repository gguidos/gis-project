'use client';
import React, { useState } from 'react';
import { List, PieChart, Calendar, Layers, Lightbulb, Bell, GraduationCap, AlignJustify } from 'lucide-react'; // Import icons from lucide-react
import RightPanel from '../right-panel'; // Import RightPanel component
import ToolButton from '../ui/Button'; // Importing the new ToolButton component

const RightMenu: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [isPanelVisible, setIsPanelVisible] = useState(false); // Track panel visibility

  const tools = [
    { id: 'currentProject', icon: <List />, tooltip: 'Current Project' },
    { id: 'myprojects', icon: <AlignJustify />, tooltip: 'My Projects' },
    { id: 'tutorial', icon: <GraduationCap />, tooltip: 'Tutorial' },
  ];

  const handleToolSelect = (toolId: string) => {
    if (selectedTool === toolId && isPanelVisible) {
      setIsPanelVisible(false);
      setSelectedTool(null);
    } else {
      setSelectedTool(toolId);
      setIsPanelVisible(true);
    }
  };

  return (
    <div className="relative flex flex-col items-center bg-background py-0 space-y-4 z-60 border-l-border border-l-4">
      {/* Tool Buttons */}
      {tools.map((tool) => (
        <ToolButton
          key={tool.id}
          id={tool.id}
          icon={tool.icon}
          tooltip={tool.tooltip}
          isSelected={selectedTool === tool.id}
          onClick={() => handleToolSelect(tool.id)}
        />
      ))}

      {/* Right Panel */}
      {isPanelVisible && (
        <RightPanel
          selectedOption={selectedTool} // Pass selected tool to RightPanel
          onClose={() => setIsPanelVisible(false)} // Close the panel
        />
      )}
    </div>
  );
};

export default RightMenu;
