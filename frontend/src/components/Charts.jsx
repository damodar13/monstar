import React from 'react';
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const mockData = [
  { name: 'Sep 1', spend: 4000, clicks: 2400, conversions: 240 },
  { name: 'Sep 2', spend: 3000, clicks: 1398, conversions: 210 },
  { name: 'Sep 3', spend: 2000, clicks: 9800, conversions: 229 },
  { name: 'Sep 4', spend: 2780, clicks: 3908, conversions: 200 },
  { name: 'Sep 5', spend: 1890, clicks: 4800, conversions: 218 },
  { name: 'Sep 6', spend: 2390, clicks: 3800, conversions: 250 },
  { name: 'Sep 7', spend: 3490, clicks: 4300, conversions: 210 },
];

const customTooltipStyle = {
  backgroundColor: '#1e293b',
  border: '1px solid #374151',
  borderRadius: '0.5rem',
  color: '#f8fafc'
};

const SpendChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart data={mockData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3}/>
          <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
      <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
      <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
      <Tooltip contentStyle={customTooltipStyle} itemStyle={{ color: '#38bdf8' }} />
      <Area type="monotone" dataKey="spend" stroke="#38bdf8" fillOpacity={1} fill="url(#colorSpend)" strokeWidth={2} />
    </AreaChart>
  </ResponsiveContainer>
);

const CTRChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={mockData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
      <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
      <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
      <Tooltip contentStyle={customTooltipStyle} itemStyle={{ color: '#818cf8' }} />
      <Line type="monotone" dataKey="clicks" stroke="#818cf8" strokeWidth={2} dot={{ fill: '#818cf8', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
    </LineChart>
  </ResponsiveContainer>
);

const ConversionChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={mockData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
      <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
      <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
      <Tooltip contentStyle={customTooltipStyle} cursor={{ fill: '#374151', opacity: 0.4 }} />
      <Legend wrapperStyle={{ paddingTop: '10px' }} />
      <Bar dataKey="conversions" fill="#10b981" radius={[4, 4, 0, 0]} name="Conversions" />
    </BarChart>
  </ResponsiveContainer>
);

export { SpendChart, CTRChart, ConversionChart };
