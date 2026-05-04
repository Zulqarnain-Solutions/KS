import React from 'react'
import { logout as authLogout } from '../../../api/authApi'
import { useAuth } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function UserAvatarNavMenu({profileMenu}) {

  const { logout } = useAuth();


   async function handleClick() {
        const data = await authLogout();

        // This logout is a context method that store global user data 
        logout();
        
    }

  return (
    <>
    <div className={ `rounded-[8px] w-[200px] h-auto p-4 bg-white absolute top-11 right-1 border-1 border-gray-200 z-10 shadow-[0_0_15px_rgba(0,0,0,0.15)] ${profileMenu? "" : "hidden"}` }>
        <ul className="flex flex-col font-medium text-gray-600">
            <li className="hover:bg-gray-100 hover:text-gray-950 rounded-[6px]"><Link to="/profile" className="p-2 block w-full h-full flex gap-[15px] items-center">
            <i className="fi fi-rs-user"></i> Profile</Link></li>
            {/* <li className="hover:bg-gray-100 hover:text-gray-950 p-2">Setting</li> */}
            <li className="hover:bg-gray-100 hover:text-gray-950 p-2 flex gap-[15px] items-center rounded-[6px]"
            onClick={ handleClick }
            ><i className="fi fi-rs-sign-out-alt"></i>Logout</li>
        </ul>
    </div>
    </>
  )
}
