import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function LoggedInNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }) =>
    `hover:text-black transition-all duration-200 px-3 py-1 rounded-md ${
      isActive ? 'bg-[#F3F3F3] text-[#594E4E] font-bold shadow-md' : ''
    }`;

  return (
    <nav className="bg-white text-[#594E4E] font-body shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Find My Stay" className="h-8" />
          <span className="font-bold text-lg">FindMyStay</span>
        </Link>

        {/* Hamburger Menu */}
        <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex items-center gap-8 font-semibold text-sm absolute md:static top-16 left-0 w-full md:w-auto bg-brand-bg px-6 md:px-0 shadow-md md:shadow-none ${isOpen ? 'block' : 'hidden'}`}>
          <li className="py-2 md:py-0">
            <NavLink to="/TenantDashboard" className={navLinkClass}>
              🏠 Dashboard
            </NavLink>
          </li>
          <li className="py-2 md:py-0">
            <NavLink to="/tenant/profile" className={navLinkClass}>
              👤 Profile
            </NavLink>
          </li>
          <li className="py-2 md:py-0 mt-2 md:mt-0 md:ml-6">
            <NavLink to="/" className="block text-red-600 hover:text-red-800 border border-red-500 rounded-full px-4 py-1 transition-all duration-200">
              🚪 Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default LoggedInNavbar;
