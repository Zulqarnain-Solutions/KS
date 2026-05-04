import React from 'react'

const getStatus = (item) => {
  const remaining = item.total - item.paid;
  const today = new Date();
  const due = new Date(item.dueDate);

  if (remaining === 0) return "Paid";
  if (due < today) return "Overdue";
  return "Pending";
};

export default function FeeTable ({ data, onPay }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-100 text-sm text-gray-600">
          <tr>
            <th className="p-4">Student</th>
            <th>Course</th>
            <th>Total</th>
            <th>Paid</th>
            <th>Progress</th>
            <th>Status</th>
            <th className="text-right pr-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            const remaining = item.total - item.paid;
            const percent = (item.paid / item.total) * 100;
            const status = getStatus(item);

            return (
              <tr key={item.id} className=" hover:bg-gray-50">
                <td className="p-4 font-medium">{item.student}</td>
                <td>{item.course}</td>
                <td>Rs {item.total}</td>
                <td>Rs {item.paid}</td>
                <td>Rs {remaining}</td>

                {/* Status */}
                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      status === "Paid"
                        ? "bg-green-100 text-green-600"
                        : status === "Overdue"
                        ? "bg-red-100 text-red-500"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {status}
                  </span>
                </td>

                {/* Actions */}
                <td className="text-right pr-4">
                  <button
                    onClick={() => onPay(item)}
                    className="text-indigo-600 text-sm hover:underline"
                  >
                    Pay
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};