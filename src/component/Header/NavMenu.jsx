import React from "react";
import { Link } from "react-router-dom";

function NavMenu({menuOpen}) {
  return (
    <nav className= {`nav ${menuOpen? 'active' : ''}`}>

      <ul className="nav-list">

        {/* Each item ready for React Router */}
        <li><Link to="/">Home</Link></li>

        <li><Link to="/about">About</Link></li>

        <li><Link to="/courses">Courses</Link></li>

        <li><Link to="/teacher">Teachers</Link></li>

        <li><Link to="/contact">Contact Us</Link></li>

      </ul>

    </nav>
  );
}

export default NavMenu;