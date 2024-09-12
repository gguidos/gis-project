import { icons } from 'lucide-react';

const Icon = ({ name, color, size }:{
    name: keyof typeof icons,
    color?: string,
    size?:string 
}) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;