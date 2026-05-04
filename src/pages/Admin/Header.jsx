import React from 'react'
import UserAvatar from './../../component/layout/Header/UserAvatar';
import { useAuth } from '../../contexts/AuthContext.jsx';

export default function Header() {
  const { user } = useAuth();

  
  return (
    <>
    <div className='p-6 flex justify-end'>
       <UserAvatar />
    </div>
   
    </>
    
    
  )
}
