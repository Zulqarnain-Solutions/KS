import React from 'react'

export default function StatCard({ title, value, change }) {

    const isPositive = change.includes("+");

  return (
    <>
    <div>
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <span
          className={`text-sm font-medium ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>

      <div className="mt-2 text-2xl font-bold text-gray-800">
        {value}
      </div>
    </div>
    </div>
    </>
  )
}
