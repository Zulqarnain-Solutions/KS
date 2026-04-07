import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import UserAvatarNavMenu from './UserAvatarNavMenu';

export default function UserAvatar() {

    const [profileMenu, setProfileMenu] = useState(false);

    const { user } = useAuth()
    // console.log(user?.data?.loggedInUser?.avatar);


  return (
    <>
    <div className="w-[35px] h-[35px] bg-gray-200 rounded-full relative"
    onClick={ () => {
        setProfileMenu(!profileMenu);
    }}
    >
       <div className="w-full h-full rounded-full overflow-hidden  bg-gray-200 flex items-center justify-center">
       {
         user?.data?.avatar?
         <img src={`${ user?.data?.loggedInUser?.avatar || user?.data?.avatar }`} alt="" />
         :
         <i className="fi fi-rs-user"></i>
       }
         
       </div>
        <UserAvatarNavMenu profileMenu={profileMenu} />
    </div>
    </>
  )
}
