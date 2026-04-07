import React, { useEffect, useState } from "react";
import "./Header.css";

import BrandLogo from "./BrandLogo";
import NavMenu from "./NavMenu";
import HeaderActions from "./HeaderActionButton";
import Hamburger from "./Hamburger";
import UserAvatar from "./UserAvatar";
import { useAuth } from "../../contexts/AuthContext";
import Spinner from "../Spinner/Spinner";


// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
 
  return (
    <>
    <header className="header">
      <div className="header-container">

        <div className="flex gap-4">
    
          {/* Hamburger */}
        <Hamburger 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen}
        />

        {/* LEFT SECTION - BRAND */}
        <BrandLogo />

        </div>
        
        {/* CENTER NAVIGATION */}
        <NavMenu 
        menuOpen={menuOpen}
        />

        {/* RIGHT ACTIONS or Avatar if user logged in */}
        {
          user? (< UserAvatar />) : (<HeaderActions />)
        }
        

      </div>
    </header>








  



















    </>
  );
}

export default Header;