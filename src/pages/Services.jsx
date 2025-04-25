import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen flex flex-col text-[#594E4E] font-body bg-white">
      {/* Navbar */}
      <nav className="bg-white text-brand-text font-body shadow-md z-50 h-19 relative">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Find My Stay Logo" className="h-8" />
            <span className="font-bold text-lg text-black">FindMyStay</span>
          </Link>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none text-xl">
              {isOpen ? '✖' : '☰'}
            </button>
          </div>

          <ul className={`md:flex md:space-x-8 text-[16px] font-bold absolute md:static top-16 left-0 w-full md:w-auto bg-white px-6 md:px-0 ${isOpen ? 'block' : 'hidden'}`}>
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
            <Link to="/login" className="px-4 py-2 border rounded-lg hover:bg-black hover:text-white">Log In</Link>
            <Link to="/signup" className="px-4 py-2 border rounded-lg hover:bg-black hover:text-white">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-10 text-black">What We Offer</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-left">
            <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">🏠 Room Rentals</h3>
              <p className="text-sm text-gray-600">
                Discover affordable and verified rental spaces that meet your needs and budget.
              </p>
            </div>
            <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">👯 Roommate Matching</h3>
              <p className="text-sm text-gray-600">
                Connect with potential roommates who share similar preferences and lifestyles.
              </p>
            </div>
            <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">✅ Verified Listings</h3>
              <p className="text-sm text-gray-600">
                All listings are carefully verified for accuracy, safety, and transparency.
              </p>
            </div>
            <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">📍 Location Insights</h3>
              <p className="text-sm text-gray-600">
                Get detailed insights on neighborhoods, accessibility, and nearby facilities.
              </p>
            </div>
            <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">🔒 Privacy & Security</h3>
              <p className="text-sm text-gray-600">
                All interactions and transactions are secured for your peace of mind.
              </p>
            </div>
            <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">📞 Customer Support</h3>
              <p className="text-sm text-gray-600">
                Dedicated support team available to help with your rental journey.
              </p>
            </div>
          </div>
        </section>

        {/* Spacer to push footer down if content is short */}
        <div className="h-50" />
      </main>

      {/* Footer appears at bottom */}
      <Footer />
    </div>
  );
};

export default Services;
