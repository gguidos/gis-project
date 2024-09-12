// components/ui/ToolButton.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface ToolButtonProps {
  id: string;
  icon: React.ReactNode;
  tooltip: string;
  isSelected: boolean;
  onClick: () => void;
  disableTooltip?: boolean; // Prop to control tooltip visibility
}

const ToolButton: React.FC<ToolButtonProps> = ({ id, icon, tooltip, isSelected, onClick, disableTooltip }) => {
  return (
    <>
      {disableTooltip ? ( // Conditionally render Button without Tooltip when disabled
        <Button
          variant={isSelected ? 'default' : 'ghost'}
          onClick={onClick}
          className={`flex w-12 items-center justify-center p-2 rounded-none transition ${
            isSelected
              ? 'bg-muted text-secondary-foreground hover:bg-muted hover:text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          {icon}
        </Button>
      ) : (
        <Tooltip key={id}>
          <TooltipTrigger asChild>
            <Button
              variant={isSelected ? 'default' : 'ghost'}
              onClick={onClick}
              className={`flex w-12 items-center justify-center p-2 rounded-none transition ${
                isSelected
                  ? 'bg-muted text-secondary-foreground hover:bg-muted hover:text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {icon}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{tooltip}</TooltipContent>
        </Tooltip>
      )}
    </>
  );
};

export default ToolButton;
