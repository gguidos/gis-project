'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Moon, HelpCircle, Bell, Zap, Home, LogOut, Globe, Grid } from 'lucide-react'; // Import some icons from Lucide

const ProfileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false); // State for language menu visibility
  const menuRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLButtonElement | null>(null);
  const languageRef = useRef<HTMLLIElement | null>(null); // Ref for language menu
  const languageMenuRef = useRef<HTMLUListElement | null>(null); // Ref for submenu

  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !profileRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setIsLanguageMenuOpen(false); // Close language menu as well
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative my-4 mx-0" ref={menuRef}>
      {/* Profile Info */}
      <div className="flex items-center ml-2 mb-4">
        <div className="rounded-full bg-purple-500 w-10 h-10 flex items-center justify-center mr-2">
          J
        </div>
        <div>
          <p className="text-sm font-bold">jorge_guidos</p>
          <p className="text-xs">Profile</p>
        </div>
      </div>
        <Separator className='border-b border-gray-200 mb-2'/>
      {/* Menu Items */}
      <ul className="space-y-2">
        <li className="flex pl-4 items-center hover:bg-secondary p-2 rounded cursor-pointer">
          <Home className="w-5 h-5 mr-2" /> Home
        </li>
        <li className="flex pl-4 items-center hover:bg-secondary p-2 rounded cursor-pointer">
          <HelpCircle className="w-5 h-5 mr-2" /> Help Center
        </li>
        <li className="flex pl-4 items-center hover:bg-secondary p-2 rounded cursor-pointer">
          <Bell className="w-5 h-5 mr-2" /> Notifications
        </li>
        <li className="flex pl-4 items-center hover:bg-secondary p-2 rounded cursor-pointer">
          <Zap className="w-5 h-5 mr-2" /> News
        </li>
      </ul>

      {/* Divider */}
      <Separator className='border-b border-gray-200 my-2'/>

      {/* Additional Settings */}
      <ul className="space-y-2">
        <li className="flex pl-4 items-center justify-between hover:bg-secondary p-2 rounded cursor-pointer">
          <div className="flex items-center">
            <Moon className="w-5 h-5 mr-2" /> Dark theme
          </div>
          <input type="checkbox" className="form-checkbox text-blue-500" />
        </li>
        <li className="flex pl-4 items-center justify-between hover:bg-secondary p-2 rounded cursor-pointer">
          <div className="flex items-center">
            <Grid className="w-5 h-5 mr-2" /> Drawings panel
          </div>
          <input type="checkbox" className="form-checkbox text-blue-500" />
        </li>

        {/* Language Menu with Hover */}
        <li
          ref={languageRef}
          className="relative flex w-full pl-4 items-center hover:bg-secondary p-2 cursor-pointer"
          onMouseEnter={() => setIsLanguageMenuOpen(true)}
          onMouseLeave={() => setIsLanguageMenuOpen(false)}
        >
          <Globe className="w-5 h-5 mr-2" /> Language
          {isLanguageMenuOpen && (
            <ul
              ref={languageMenuRef}
              className="absolute ml-0 left-full top-0 mt-0 w-48 bg-background shadow-lg z-10"
              onMouseEnter={() => setIsLanguageMenuOpen(true)}
              onMouseLeave={() => setIsLanguageMenuOpen(false)}
            >
              <li className="hover:bg-secondary p-2 cursor-pointer">English</li>
              <li className="hover:bg-secondary p-2 cursor-pointer">English (India)</li>
              <li className="hover:bg-secondary p-2 cursor-pointer">Deutsch</li>
              <li className="hover:bg-secondary p-2 cursor-pointer">Français</li>
              <li className="hover:bg-secondary p-2 cursor-pointer">Español</li>
              <li className="hover:bg-secondary p-2 cursor-pointer">Italiano</li>
              <li className="hover:bg-secondary p-2 cursor-pointer">Polski</li>
              {/* Add more languages as needed */}
            </ul>
          )}
        </li>
      </ul>

      {/* Sign Out Button */}
      <Button className="mt-4 w-full text-red-500 bg-background hover:bg-secondary flex justify-start">
        <LogOut className="w-5 h-5 mr-2" /> Sign Out
      </Button>
    </div>
  );
};

export default ProfileMenu;
