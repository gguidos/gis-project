// ToolMenu.tsx
'use client';
import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Camera, Pentagon, XSquareIcon, RectangleHorizontal, Save, Trash2 } from 'lucide-react';
import { useMapContext } from '../../../../providers/map-context-provider';
import ToolButton from '../ui/Button'; // Importing the new ToolButton component
import Conditional from '@/components/utils/ConditionalRendering';

const tools = [
  { id: 'pentagon', icon: <Pentagon />, tooltip: 'Polygon Tool', event: 'INITIALIZE_POLYGON' },
  { id: 'rectangle', icon: <RectangleHorizontal />, tooltip: 'Rectangle Tool', event: 'INITIALIZE_RECTANGLE' },
  { id: 'obstacle', icon: <XSquareIcon />, tooltip: 'Obstacle Tool', event: 'INITIALIZE_OBSTACLE' },
];

const extraTools: any = [
  { 
    id: 'screenshot', 
    icon: <Camera />, 
    tooltip: 'Screenshot'
  },
];

const storingTools: any = [];

const ToolMenu: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const { current, send: mapSend } = useMapContext();

  const handleToolSelect = (toolId: string, event?: string) => {
    if (event) mapSend({ type: event });
    setSelectedTool(toolId);
  };

  return (
    <div className="top-12 w-12 bg-background flex flex-col items-center py-0 space-y-4 z-2">
      {tools.map((tool: any) => (
        <ToolButton
          key={tool.id}
          id={tool.id}
          icon={tool.icon}
          tooltip={tool.tooltip}
          isSelected={selectedTool === tool.id}
          onClick={() => handleToolSelect(tool.id, tool.event)}
        />
      ))}
      <Conditional showWhen={extraTools.length}>
        <Separator className="my-2 w-10 border-gray-700" />
        {extraTools.map((tool: any) => (
          <ToolButton
            key={tool.id}
            id={tool.id}
            icon={tool.icon}
            tooltip={tool.tooltip}
            isSelected={selectedTool === tool.id}
            onClick={() => handleToolSelect(tool.id)}
          />
      ))}
      </Conditional>
      <Conditional showWhen={storingTools.length}>

      <Separator className="my-2 w-10 border-secondary" />
        {storingTools.map((tool: any) => (
          <ToolButton
          key={tool.id}
          id={tool.id}
          icon={tool.icon}
          tooltip={tool.tooltip}
          isSelected={selectedTool === tool.id}
          onClick={() => handleToolSelect(tool.id)}
          />
        ))}
      </Conditional>
    </div>
  );
};

export default ToolMenu;
