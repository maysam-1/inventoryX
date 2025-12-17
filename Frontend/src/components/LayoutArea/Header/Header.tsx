import React from 'react';
import logo from '../../../assets/justbox.png';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#E8D5C4] via-[#F5E6D8] to-[#E8D5C4] shadow-lg border-b-4 border-[#D4A894]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex items-center gap-4">
          <img 
            src={logo} 
            alt="InventoryX Logo" 
            className="h-20 w-auto drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C9A68C] via-[#B4907A] to-[#C9A68C]">
              InventoryX
            </h1>
            <p className="text-[#A88968] text-sm font-medium">
              Treasure Your Inventory
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}