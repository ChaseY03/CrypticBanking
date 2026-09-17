import React from 'react';
import { LayoutDashboard, Wallet, BarChart3, ArrowLeftRight, CreditCard } from 'lucide-react';
import type { UserProfile } from '../../types/index';

interface SideNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: UserProfile; // Accept user prop
}

export const SideNav: React.FC<SideNavProps> = ({ activeTab, setActiveTab, user }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'accounts', label: 'Accounts', icon: Wallet },
    { id: 'transfers', label: 'Transfers', icon: ArrowLeftRight },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 h-screen sticky top-0 flex flex-col justify-between p-4">
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-3 py-2 text-white font-bold text-xl tracking-wide">
          <div className="p-2 bg-red-600 rounded-xl text-white">
            <CreditCard className="w-5 h-5" />
          </div>
          <span>CrypticBanking</span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                  isActive
                    ? 'bg-red-600 text-white'
                    : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Dynamic Profile Footer */}
      <div className="p-3 bg-slate-800/60 rounded-xl flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center font-bold text-white text-sm">
          {user.avatarInitials}
        </div>
        <div className="text-xs truncate">
          <p className="font-semibold text-white truncate">{user.name}</p>
          <p className="text-slate-400 truncate">{user.email}</p>
        </div>
      </div>
    </aside>
  );
};