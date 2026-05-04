import React from 'react'
import { NavLink } from 'react-router-dom';

export default function SideBar() {


 const sidebarItems = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: "fi fi-rs-dashboard"
   
  },
  {
    title: "Students",
    path: "/admin/user",
    icon: "fi fi-rs-student"
  },
  {
    title: "Fees",
    path: "/admin/fee",
    icon: "fi fi-rs-fee-receipt"
  },
  {
    title: "Courses",
    path: "/admin/courses",
    icon: "fi fi-rs-e-learning"
  },
];



  return (
    <>
    <div className="flex flex-col h-[100vh] px-5 py-10 bg-white sticky top-0 border-r-gray-300 border-r-2 ">
       
      
      {/* Logo */}
      <div className="text-xl font-semibold px-4 py-5">
        Admin Panel
      </div>

      {/* Menu */}
      <nav className="flex-1 p-3 space-y-2">
        {sidebarItems.map((item, index) => {
          
          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-100thub copilot  font-medium w-60
                ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-900  hover:bg-gray-100"
                }`
              }
            >
           {  ({isActive}) => (
               <>
                <i className={ `flex items-center text-xl ${ item.icon} ${isActive ? "text-white" : "text-gray-800 "}`}></i>
                <span>{item.title}</span>
               </>

        )}

            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 text-sm text-gray-800 ">
        © 2026 Academy Admin
      </div>
    </div>
    </>
  )
}















