import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-card h-screen fixed left-0 top-0 border-r border-gray-800 flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-primary tracking-wider">LuminaAI</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <a href="#" className="flex items-center space-x-3 text-textPrimary bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800 transition-colors">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
          <span className="font-medium">Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-textSecondary p-3 rounded-lg hover:bg-gray-800 hover:text-textPrimary transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
          <span className="font-medium">Campaigns</span>
        </a>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-3 text-sm text-textSecondary">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold">JD</div>
          <div>
            <p className="text-textPrimary font-medium">Jane Doe</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
