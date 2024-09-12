import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import Conditional from "@/components/utils/ConditionalRendering";
import PrivateInformation from './PrivateInformation';
import { useTranslations } from "next-intl";
import './right-menu.css';

export default function UserInfo() {
    const t = useTranslations("UserInfo");
    const [activeToggle, setActiveToggle] = useState("private");

    const handleToggleChange = (value: any) => {
        if (value) {
            setActiveToggle(value);
        }
    };

    return (
 
           
            <div className="my-5">


                
                    <PrivateInformation />
               
   
        
            </div>
     
    );
  }