import React, { useState } from 'react'

export default function PaymentModal({ student, onClose, onSubmit }) {
  const remaining = student.total - student.paid;
  const [amount, setAmount] = useState("");

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          Pay Fee - {student.student}
        </h2>

        <p className="text-sm text-gray-500 mb-2">
          Remaining: Rs {remaining}
        </p>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full border rounded-lg px-3 py-2"
        />

        <select className="w-full border rounded-lg px-3 py-2 mt-3">
          <option>Cash</option>
          <option>Bank</option>
          <option>Online</option>
        </select>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="border px-4 py-2 rounded-lg">
            Cancel
          </button>

          <button
            onClick={() => onSubmit(amount)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};