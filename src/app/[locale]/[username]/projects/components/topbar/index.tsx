'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import TopBarInputFields from './input-fields';
import UserInfo from '../private-info';
import AddressInfo from '../address-info';
import Conditional from '@/components/utils/ConditionalRendering';
import ProfileMenu from '../profile-menu';
import ToolButton from '../ui/Button'; // Importing the new ToolButton component

import { leftButtonsConfig, rightButtonsConfig} from './button-config'

const TopBar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<string | null>(null);
  const menuRefs = {
    addressInfoRef: useRef<HTMLDivElement>(null),
    formRef: useRef<HTMLDivElement>(null),
    profileMenuRef: useRef<HTMLDivElement>(null),
  };

  const topBarRef = useRef<HTMLDivElement>(null);
  


  const handleToggleMenu = (menu: string) => {
    setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const handleOpenModal = (modalId: string) => {
    setOpenModal(modalId);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !menuRefs.addressInfoRef.current?.contains(event.target as Node) &&
        !menuRefs.formRef.current?.contains(event.target as Node) &&
        !menuRefs.profileMenuRef.current?.contains(event.target as Node) &&
        !topBarRef.current?.contains(event.target as Node)
      ) {
        setOpenMenu(null);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        handleCloseModal(); // Also close modal if Escape key is pressed
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div
      ref={topBarRef}
      className="relative py-7 flex items-center justify-between bg-background h-12 z-1 border-b border-b-border border-b-4"
    >
      {/* Left Side: Tools and Menus */}
      <div className="flex items-center space-x-2 m-0 pl-2">
        {/* Profile Button to Open Menu */}
        <Button
          onClick={() => handleToggleMenu('profile')}
          className="rounded-full bg-purple-500 w-8 h-8 flex items-center justify-center text-white"
        >
          J
        </Button>

        {/* Input Fields */}
        <TopBarInputFields /> {/* Using the separated Input Fields component */}

        <div className="flex h-7 items-center pl-4">

<Separator orientation="vertical" className='bg-muted-foreground'/>
</div>
       {/* Left Buttons */}
       {leftButtonsConfig.map((button) => (
          <ToolButton
            key={button.id}
            id={button.id}
            icon={button.icon}
            tooltip={button.tooltip}
            isSelected={openMenu === button.id}
            onClick={() => handleOpenModal(button.id)}
          />
        ))}
      </div>

      {/* Right Side: User Profile or Other Controls */}
      <div className="flex items-center justify-center rounded transition bg-transparent">
        {/* Right Buttons */}
        {rightButtonsConfig.map((button) => (
          <ToolButton
            key={button.id}
            id={button.id}
            icon={button.icon}
            tooltip={button.tooltip}
            isSelected={openMenu === button.id}
            onClick={() => handleOpenModal(button.id)}
          />
        ))}
        
      </div>

      {/* Address Info Appears Here */}
      {/* <Conditional showWhen={openMenu === 'address'}>
        <div
          ref={menuRefs.addressInfoRef}
          className="absolute w-96 bg-background border border-border z-50 shadow"
        >
          <AddressInfo onClose={handleCloseModal} />
        </div>
      </Conditional> */}

      {/* Form Appears Here */}
      <Conditional showWhen={openMenu === 'info'}>
        <div
          ref={menuRefs.formRef}
          className="absolute w-96 bg-background border border-border z-50 shadow"
        >
          <UserInfo />
        </div>
      </Conditional>

      {/* Profile Menu Appears Here */}
      {openMenu === 'profile' && (
        <div
          ref={menuRefs.profileMenuRef}
          className="absolute top-11 left-11 w-80 bg-background z-50 rounded shadow"
        >
          <ProfileMenu />
        </div>
      )}
    </div>
  );
};

export default TopBar;
