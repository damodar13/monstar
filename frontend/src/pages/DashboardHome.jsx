import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { SpendChart, CTRChart, ConversionChart } from '../components/Charts';

const DashboardHome = () => {
  return (
    <MainLayout>
      {/* Key Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card p-6 rounded-xl border border-gray-800 shadow-sm">
          <h3 className="text-textSecondary text-sm font-medium mb-1">Total Spend</h3>
          <p className="text-3xl font-bold text-textPrimary">$12,450</p>
          <div className="mt-2 text-sm text-green-400 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            <span>+14.5% from last period</span>
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-gray-800 shadow-sm">
          <h3 className="text-textSecondary text-sm font-medium mb-1">Total Clicks</h3>
          <p className="text-3xl font-bold text-textPrimary">45,210</p>
          <div className="mt-2 text-sm text-green-400 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            <span>+8.2% from last period</span>
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-gray-800 shadow-sm">
          <h3 className="text-textSecondary text-sm font-medium mb-1">Total Conversions</h3>
          <p className="text-3xl font-bold text-textPrimary">1,845</p>
          <div className="mt-2 text-sm text-red-400 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
            <span>-2.4% from last period</span>
          </div>
        </div>
      </div>

      {/* Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card p-6 rounded-xl border border-gray-800 shadow-sm h-[400px] flex flex-col">
          <h3 className="text-textPrimary font-semibold mb-4">Total Spend Overview</h3>
          <div className="flex-1 w-full h-full min-h-0">
            <SpendChart />
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-gray-800 shadow-sm h-[400px] flex flex-col">
          <h3 className="text-textPrimary font-semibold mb-4">Click-Through Rate Trends</h3>
          <div className="flex-1 w-full h-full min-h-0">
            <CTRChart />
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-gray-800 shadow-sm h-[400px] lg:col-span-2 flex flex-col">
          <h3 className="text-textPrimary font-semibold mb-4">Conversion Volume</h3>
          <div className="flex-1 w-full h-full min-h-0">
            <ConversionChart />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardHome;
