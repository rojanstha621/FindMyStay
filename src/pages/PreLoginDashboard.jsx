import React, { useState } from 'react';
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import listings from './ListingData';

function PreLoginDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen text-[#594E4E] font-body">
      <nav className="bg-brand-bg text-brand-text font-body shadow-md">
        <div className="max-w-7xl mx-auto px-0 py-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Find My Stay Logo" className="h-8" />
            <span className="font-bold text-lg">FindMyStay</span>
          </Link>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none text-xl">
              {isOpen ? '✖' : '☰'}
            </button>
          </div>

          <ul
            className={`md:flex md:space-x-8 text-[16px] font-bold absolute md:static top-16 left-0 w-full md:w-auto bg-brand-bg px-6 md:px-0 ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <li className="py-2 md:py-0">
              <Link to="/" className="hover:text-black block">Home</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/services" className="hover:text-black block">Services</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/contact" className="hover:text-black block">Contact</Link>
            </li>
          </ul>

          <div className="hidden md:flex space-x-3">
            <Link to="/login" className="px-4 py-2 border rounded-lg hover:bg-brand-text hover:text-white">Log In</Link>
            <Link to="/signup" className="px-4 py-2 border rounded-lg hover:bg-brand-text hover:text-white">Sign Up</Link>
          </div>
        </div>
      </nav>

      <header className="text-center py-10 px-6">
        <h1 className="text-3xl font-bold mb-2">Find Your Perfect Stay</h1>
        <p className="text-lg">Browse listings and filter by your preferences</p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-4 bg-white rounded-xl shadow-md mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          <input type="text" placeholder="Search by city" className="p-2 border border-gray-300 rounded-lg" />
          <select className="p-2 border border-gray-300 rounded-lg">
            <option value="">Property Type</option>
            <option value="room">Room</option>
            <option value="apartment">Apartment</option>
          </select>
          <select className="p-2 border border-gray-300 rounded-lg">
            <option value="">Price Range</option>
            <option value="low">Under Rs 15,000</option>
            <option value="mid">Rs 15,000 - Rs 30,000</option>
            <option value="high">Above Rs 30,000</option>
          </select>
          <button className="bg-[#594E4E] text-white px-4 py-2 rounded-lg">Filter</button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-4">
          {listings.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow p-4">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm">{item.location}</p>
              <p className="text-sm font-semibold mt-2">{item.price}</p>
              <Link to={`/property/${item.id}`}>
                <button className="mt-4 px-4 py-2 bg-[#594E4E] text-white rounded-lg w-full">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PreLoginDashboard;
