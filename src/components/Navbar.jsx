// Navbar.js
import React from "react";
import { MenuIcon, BellIcon } from '@heroicons/react/outline';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className="text-lg font-semibold">
        TrackU Dashboard
      </div>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-gray-200">Home</a>
        <a href="#" className="hover:text-gray-200">About</a>
        <a href="#" className="hover:text-gray-200">Contact</a>
        <a href="#" className="hover:text-gray-200">Profile</a>
        <a href="#" className="hover:text-gray-200">Settings</a>
        <a href="#" className="hover:text-gray-200">Help</a>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative group">
          <button className="bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-gray-100">
            Customer Menu
          </button>
          {/* Dropdown menu */}
          <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white text-blue-600 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">My Account</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Orders</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Help</a>
          </div>
        </div>
        <BellIcon className="w-6 h-6" />
        <MenuIcon className="w-6 h-6 md:hidden" />
        <div className="relative">
          <div className="rounded-full bg-blue-700 text-white flex items-center justify-center w-10 h-10 border-2 border-white">
            <span className="text-xl font-semibold">P</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
