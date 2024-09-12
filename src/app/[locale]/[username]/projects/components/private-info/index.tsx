import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Information from './Information';
import { useTranslations } from "next-intl";
import './right-menu.css';

export default function UserInfo() {
  const t = useTranslations("UserInfo");

  return (
    <div className="w-full p-6 m-0 bg-background min-h-[420px]">
        {/* Collapsible Content for Information */}
        <Tabs defaultValue="private">
          <div className='flex place-content-center'>

          <TabsList className='w-80 my-2 py-6 bg-secondary'>
            <TabsTrigger value="private" className="w-1/2 h-10 font-semibold TabsTrigger">{t("tabs.information.private.title")}</TabsTrigger>
            <TabsTrigger value="enterprise" className="w-1/2 h-10 font-semibold TabsTrigger">{t("tabs.information.enterprise.title")}</TabsTrigger>
          </TabsList>
          </div>

          <TabsContent value="private"><Information /></TabsContent>
          <TabsContent value="enterprise">Enterprise Info</TabsContent>
       
        </Tabs>
      {/* Add more CollapsibleSection components as needed */}
    </div>
  );
}
