const activities = [
  { id: 1, text: "New user registered", time: "2 min ago" },
  { id: 2, text: "Order #1234 placed", time: "10 min ago" },
  { id: 3, text: "Payment received", time: "30 min ago" },
  { id: 4, text: "Server restarted", time: "1 hour ago" },
];


import React from 'react'

export default function ActivityList() {
 return (
    <div className="space-y-4">
      {activities.map((item) => (
        <div key={item.id} className="flex justify-between items-center">
          <p className="text-gray-700 text-sm">{item.text}</p>
          <span className="text-xs text-gray-400">{item.time}</span>
        </div>
      ))}
    </div>
  );
}
