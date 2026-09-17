import React, { useState } from 'react';
import { SideNav } from './SideNav';
import { Header } from './Header';
import { mockUser } from '../../data/mockData';

interface LayoutContainerProps {
  children: React.ReactNode;
}

export const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    /* Add w-full here to span the entire screen width */
    <div className="min-h-screen w-full bg-slate-50 flex">
      <SideNav activeTab={activeTab} setActiveTab={setActiveTab} user={mockUser} />
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <Header onOpenAddAccount={() => console.log('Open Modal')} />
        <main className="p-4 sm:p-6 lg:p-8 w-full max-w-[1600px] mx-auto space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
};