import { MapPin, Camera, Info, LineChart, List, PackagePlus, PlusSquare, Save, RotateCcw, Zap } from 'lucide-react';

// Button configurations
export const leftButtonsConfig = [
  { 
    id: 'electricity', 
    icon: <Zap />, 
    tooltip: 'Electricity', 
    event: () => {}, 
    modal: { title: 'Electricity Details', content: <div>Electricity content</div> } 
  },
  { 
    id: 'financing', 
    icon: <LineChart />, 
    tooltip: 'Financing', 
    event: () => {}, 
    modal: { title: 'Financing Options', content: <div>Financing content</div> } 
  },
  { 
    id: 'additions', 
    icon: <PackagePlus />, 
    tooltip: 'Additions', 
    event: () => {}, 
    modal: { title: 'Additional Items', content: <div>Additions content</div> } 
  },
  
];

export const rightButtonsConfig = [
  { 
    id: 'reset', 
    icon: <RotateCcw />, 
    tooltip: 'Reset', 
    event: () => {}, 
    modal: { title: 'Reset Project', content: <div>Reset options</div> } 
  },
  { 
    id: 'new', 
    icon: <PlusSquare />, 
    tooltip: 'New Project', 
    event: () => {}, 
    modal: { title: 'New Project', content: <div>New project form</div> } 
  },
  { 
    id: 'save', 
    icon: <Save />, 
    tooltip: 'Save', 
    event: () => {}, 
    modal: { title: 'Save Project', content: <div>Save options</div> } 
  },
];