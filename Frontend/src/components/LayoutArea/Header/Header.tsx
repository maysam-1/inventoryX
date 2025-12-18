import React from 'react';
import logo from '../../../assets/justbox.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export default function Header({ isLoggedIn, setIsLoggedIn }: HeaderProps) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/auth/logout', {}, { withCredentials: true });
      setIsLoggedIn(false);
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <header
      className="relative z-10 bg-gradient-to-r from-[#E8D5C4] via-[#F5E6D8] to-[#E8D5C4] border-b-4 border-[#D4A894]"
      style={{ boxShadow: "0 4px 12px rgba(242, 221, 103, 0.35)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="InventoryX Logo"
              className="h-20 w-auto drop-shadow-md hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <h1 style={{ fontFamily: "'Rye', serif" }} className="text-3xl font-rye font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C9A68C] via-[#B4907A] to-[#C9A68C]">
                InventoryX
              </h1>
              <p className="text-[#A88968] text-sm tracking-wide">
                Treasure Your Inventory
              </p>
            </div>
          </div>

          {/* RIGHT */}
          {isLoggedIn ? (
            <button
              className="
                px-6 py-2
                rounded-full
                font-semibold
                text-[#5C4636]
                bg-gradient-to-r from-[#F1E3B8] to-[#E2C78F]
                shadow-md
                hover:shadow-lg
                hover:scale-105
                transition-all
              "
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="
                px-6 py-2
                rounded-full
                font-semibold
                text-[#5C4636]
                bg-gradient-to-r from-[#F1E3B8] to-[#E2C78F]
                shadow-md
                hover:shadow-lg
                hover:scale-105
                transition-all
              "
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}

        </div>
      </div>
    </header>
  );
}
