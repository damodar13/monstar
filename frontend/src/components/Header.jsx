import React from 'react';

const Header = () => {
  return (
    <header className="h-20 bg-background border-b border-gray-800 flex items-center justify-between px-8 sticky top-0 z-10">
      <div>
        <h2 className="text-xl font-semibold text-textPrimary">Global Metrics Overview</h2>
        <p className="text-sm text-textSecondary">Analyze your campaign performance</p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-card border border-gray-700 rounded-lg p-2 text-sm">
          <span className="text-textSecondary mr-2">Date Range:</span>
          <select className="bg-transparent text-textPrimary outline-none cursor-pointer">
            <option className="bg-card">Last 7 Days</option>
            <option className="bg-card">Last 30 Days</option>
            <option className="bg-card">This Month</option>
            <option className="bg-card">Custom...</option>
          </select>
        </div>

        <button className="bg-primary hover:bg-blue-500 text-background font-medium py-2 px-4 rounded-lg transition-colors">
          Export Report
        </button>
      </div>
    </header>
  );
};

export default Header;
