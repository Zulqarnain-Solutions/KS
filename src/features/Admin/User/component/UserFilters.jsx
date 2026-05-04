import React from 'react'

export default function UserFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl shadow">
      <input
        type="text"
        placeholder="Search by name or email..."
        className="flex-1 border border-gray-200 rounded-lg px-3 py-2  focus:outline-1 focus:outline-indigo-500 "
      />

      <select className="border border-gray-200 rounded-lg px-4 py-2 outline-none">
        <option value="">All Roles</option>
        <option value="admin">Admin</option>
        <option value="editor">Editor</option>
      </select>

      <select className="border border-gray-200 rounded-lg px-4 py-2 outline-none">
        <option value="">Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
};
