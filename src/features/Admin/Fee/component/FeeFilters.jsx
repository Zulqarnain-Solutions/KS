import React from 'react'

export default function FeeFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl shadow">
      <input
        type="text"
        placeholder="Search student..."
        className="flex-1 border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
      />

      <select className="border border-gray-200 rounded-lg px-3 py-2">
        <option value="">All Status</option>
        <option value="paid">Paid</option>
        <option value="pending">Pending</option>
        <option value="overdue">Overdue</option>
      </select>
    </div>
  );
};
