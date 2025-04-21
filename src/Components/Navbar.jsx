import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function LoggedInNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#FFFFFF] text-[#594E4E] font-body shadow-md">
      <div className="max-w-7xl mx-auto px-0 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Find My Stay" className="h-8" />
          <span className="font-bold text-lg">FindMyStay</span>
        </Link> 

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Menu Items */}
        <ul className={`md:flex md:space-x-8 font-semibold text-[15px] absolute md:static top-16 left-0 w-full md:w-auto px-6 md:px-0 ${isOpen ? 'block' : 'hidden'}`}>
          <li className="py-2 md:py-0">
            <Link to="/TenantDashboard" className={({ isActive }) => `block hover:text-black ${isActive ? 'text-[#594E4E]' : ''}`}>
              🏠 Dashboards
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/tenant/profile" className={({ isActive }) => `block hover:text-black ${isActive ? 'text-[#594E4E]' : ''}`}>
              👤 Profile
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/"className={({ isActive }) => `block hover:text-red ${isActive ? 'text-[#594E4E]' : ''}`}>
              🚪 Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default LoggedInNavbar;
