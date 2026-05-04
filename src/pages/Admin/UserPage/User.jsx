import React, { useState } from 'react'
import UserFilters from '../../../features/Admin/User/component/UserFilters';
import UsersTable from '../../../features/Admin/User/component/UsersTable';
import UserFormModal from '../../../features/Admin/User/component/UserFormModal';

export default function User() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAdd = () => {
    setSelectedUser(null);
    setIsOpen(true);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Users</h1>
        <button
          onClick={handleAdd}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          + Add User
        </button>
      </div>

      {/* Filters */}
      <UserFilters />

      {/* Table */}
      <UsersTable onEdit={handleEdit} />

      {/* Modal */}
      {isOpen && (
        <UserFormModal
          user={selectedUser}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
