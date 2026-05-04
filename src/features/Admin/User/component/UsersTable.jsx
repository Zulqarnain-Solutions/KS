const users = [
  {
    id: 1,
    name: "Ali Khan",
    email: "ali@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    email: "sara@example.com",
    role: "Editor",
    status: "Inactive",
  },
];

import React from 'react'

export default function UsersTable({ onEdit }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-100 text-gray-600 text-sm">
          <tr>
            <th className="p-4">Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th className="text-right pr-10">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className=" hover:bg-gray-50 transition"
            >
              <td className="p-4">{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {user.status}
                </span>
              </td>

              <td className="text-right pr-4 space-x-2">
                <button
                  onClick={() => onEdit(user)}
                  className="text-indigo-600 px-2 py-1 rounded-lg hover:underline hover:bg-blue-100 text-sm"
                >
                  Edit
                </button>

                <button className="text-red-500 px-2 py-1 rounded-lg hover:underline hover:bg-red-100 text-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
