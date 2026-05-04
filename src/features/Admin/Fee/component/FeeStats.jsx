import React from 'react'

export default function FeeStats({data}) {
  const total = data.reduce((sum, i) => sum + i.total, 0);
  const paid = data.reduce((sum, i) => sum + i.paid, 0);
  const pending = total - paid;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Total Collected" value={`Rs ${paid}`} color="green" />
      <Card title="Pending Amount" value={`Rs ${pending}`} color="yellow" />
      <Card title="Total Fees" value={`Rs ${total}`} color="blue" />
    </div>
  );
};

const Card = ({ title, value, color }) => {
  const colors = {
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-600",
    blue: "bg-blue-100 text-blue-600",
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className={`text-2xl font-bold mt-2 ${colors[color]}`}>
        {value}
      </h2>
    </div>
  );
};
