import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
