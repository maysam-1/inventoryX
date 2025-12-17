import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#F8ECC2]">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<div>Home/Dashboard Page</div>} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-[#2C2654] border-t-4 border-[#D4A54A] mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-[#F8ECC2] font-semibold" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            © 2024 InventoryX. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}