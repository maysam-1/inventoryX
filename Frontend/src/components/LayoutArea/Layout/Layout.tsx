import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { TrendingUp, Package, Users, AlertCircle, Plus, FileText, Settings } from 'lucide-react';

export default function Layout() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FFF5F0] via-[#FFFBF7] to-[#FFF0EB]">
                  <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    <Outlet/>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-0">
        <Routes>
          <Route path="/" element={
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-[#FFF5F0] rounded-2xl shadow-xl p-8 border-2 border-[#E8CDB8]/40 backdrop-blur-sm">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C9A68C] to-[#B4907A] mb-3">
                  Welcome to InventoryX
                </h1>
                <p className="text-[#8C7566] text-lg font-medium">
                  Manage your inventory with ease and efficiency
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                  icon={Package}
                  title="Total Items"
                  value="1,234"
                  change="+12%"
                  positive={true}
                  gradient="from-[#E8CDB8] to-[#D4B5A0]"
                />
                <StatCard
                  icon={TrendingUp}
                  title="Revenue"
                  value="$45,678"
                  change="+8%"
                  positive={true}
                  gradient="from-[#DCC4B0] to-[#E8CDB8]"
                />
                <StatCard
                  icon={Users}
                  title="Active Users"
                  value="89"
                  change="+5%"
                  positive={true}
                  gradient="from-[#D4B5A0] to-[#C9A68C]"
                />
                <StatCard
                  icon={AlertCircle}
                  title="Low Stock"
                  value="23"
                  change="-3%"
                  positive={false}
                  gradient="from-[#E8CDB8] to-[#DCC4B0]"
                />
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-white to-[#FFF5F0] rounded-2xl shadow-xl p-8 border-2 border-[#E8CDB8]/40 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-[#8C7566] mb-6">
                  Quick Actions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ActionButton title="Add New Item" icon={Plus} />
                  <ActionButton title="Generate Report" icon={FileText} />
                  <ActionButton title="Manage Users" icon={Settings} />
                </div>
              </div>
            </div>
          } />
        </Routes>
      </main>

     
    </div>
  );
}

// Stat Card Component
function StatCard({ icon: Icon, title, value, change, positive, gradient }: {
  icon: any;
  title: string;
  value: string;
  change: string;
  positive: boolean;
  gradient: string;
}) {
  return (
    <div className="bg-gradient-to-br from-white to-[#FFF8F5] rounded-xl shadow-md p-6 border-2 border-[#E8CDB8]/30 hover:shadow-xl hover:scale-105 hover:border-[#D4B5A0]/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 bg-gradient-to-br ${gradient} rounded-lg shadow-sm`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className={`text-sm font-bold px-3 py-1 rounded-full ${
          positive 
            ? 'bg-green-50 text-green-600' 
            : 'bg-rose-50 text-rose-600'
        }`}>
          {change}
        </span>
      </div>
      <h3 className="text-[#8C7566] text-sm font-semibold mb-1">{title}</h3>
      <p className="text-3xl font-bold text-[#A88968]">{value}</p>
    </div>
  );
}

// Action Button Component
function ActionButton({ title, icon: Icon }: { title: string; icon: any }) {
  return (
    <button className="group relative p-5 bg-gradient-to-r from-[#E8CDB8] to-[#DCC4B0] text-[#8C7566] rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4B5A0] to-[#C9A68C] opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      <div className="relative flex items-center justify-center gap-2">
        <Icon className="w-5 h-5" />
        <span>{title}</span>
      </div>
    </button>
  );
}