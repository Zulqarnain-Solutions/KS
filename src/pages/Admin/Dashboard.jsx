import React from 'react'
import StatCard from '../../features/Admin/Dashboard/component/StatCard';
import RevenueChart from '../../features/Admin/Dashboard/component/RevenueChart';
import ActivityList from '../../features/Admin/Dashboard/component/ActivityList';

export default function Dashboard() {
    return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800">
        Dashboard Overview
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Users" value="1,240" change="+12%" />
        <StatCard title="Revenue" value="$5,400" change="+8%" />
        <StatCard title="Orders" value="320" change="-3%" />
      </div>

      {/* Charts + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Revenue Growth</h2>
          <RevenueChart />
        </div>

        {/* Activity */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ActivityList />
        </div>
      </div>
    </div>
  );
}
