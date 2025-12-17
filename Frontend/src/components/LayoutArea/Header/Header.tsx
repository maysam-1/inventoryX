import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#2C2654] border-b-4 border-[#D4A54A]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://i.imgur.com/your-logo.png" 
              alt="InventoryX" 
              className="h-12 w-auto"
            />
            <span className="text-[#F8ECC2] text-3xl font-bold tracking-wide" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              INVENTORYX
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a 
              href="#dashboard" 
              className="text-[#F8ECC2] hover:text-[#D4A54A] font-semibold text-lg transition-colors"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Dashboard
            </a>
            <a 
              href="#inventory" 
              className="text-[#F8ECC2] hover:text-[#D4A54A] font-semibold text-lg transition-colors"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Inventory
            </a>
            <a 
              href="#reports" 
              className="text-[#F8ECC2] hover:text-[#D4A54A] font-semibold text-lg transition-colors"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Reports
            </a>
            <a 
              href="#settings" 
              className="text-[#F8ECC2] hover:text-[#D4A54A] font-semibold text-lg transition-colors"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Settings
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#F8ECC2] hover:text-[#D4A54A] p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a 
                href="#dashboard" 
                className="text-[#F8ECC2] hover:text-[#D4A54A] font-semibold text-lg py-2 transition-colors"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Dashboard
              </a>
              <a 
                href="#inventory" 
                className="text-[#F8ECC2] hover:text-[#D4A54A] font-semibold text-lg py-2 transition-colors"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Inventory
              </a>
              <a 
                href="#reports" 
                className="text-[#F8ECC2] hover:text-[#D4A54A] font-semibold text-lg py-2 transition-colors"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Reports
              </a>
              <a 
                href="#settings" 
                className="text-[#F8ECC2] hover:text-[#D4A54A] font-semibold text-lg py-2 transition-colors"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Settings
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}