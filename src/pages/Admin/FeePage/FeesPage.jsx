
import React, { useState } from 'react'
import FeeStats from '../../../features/Admin/Fee/component/FeeStats';
import FeeFilters from '../../../features/Admin/Fee/component/FeeFilters';
import FeeTable from '../../../features/Admin/Fee/component/FeeTable';
import PaymentModal from '../../../features/Admin/Fee/component/PaymentModal';

const initialData = [
  {
    id: 1,
    student: "Ali Khan",
    course: "Web Dev",
    total: 10000,
    paid: 6000,
    dueDate: "2026-05-01",
  },
  {
    id: 2,
    student: "Sara Ahmed",
    course: "UI/UX",
    total: 8000,
    paid: 8000,
    dueDate: "2026-04-10",
  },
];




export default function FeesPage() {
  const [data, setData] = useState(initialData);
  const [selected, setSelected] = useState(null);

  const handlePay = (student) => setSelected(student);

  const handlePaymentSubmit = (amount) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === selected.id
          ? { ...item, paid: item.paid + amount }
          : item
      )
    );
    setSelected(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Fees Management</h1>
      </div>

      {/* Stats */}
      <FeeStats data={data} />

      {/* Filters */}
      <FeeFilters />

      {/* Table */}
      <FeeTable data={data} onPay={handlePay} />

      {/* Modal */}
      {selected && (
        <PaymentModal
          student={selected}
          onClose={() => setSelected(null)}
          onSubmit={handlePaymentSubmit}
        />
      )}
    </div>
  );
};
