import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';  // Notice we import both Link and NavLink
import Footer from '../Components/Footer';
import HeroCarousel from '../Components/HeroCarousel';
import listings from './ListingData';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { FaWheelchair, FaBed, FaBath, FaWifi, FaCarAlt, FaCouch, FaDoorOpen, FaLeaf } from 'react-icons/fa';
import { MdElevator, MdStairs } from 'react-icons/md';
import Chatbot from "../Components/ChatBot";
import RoommateMatch from "../Components/RoommateMatch";
import PropertyListings from '../Components/PropertyLisitngs';

function PreLoginDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showRoommate, setShowRoommate] = useState(false);

  const [filters, setFilters] = useState({
    city: '',
    type: '',
    price: '',
    disability: ''
  });

  const [filteredListings, setFilteredListings] = useState(listings);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const extractPriceValue = (priceString) => {
    const num = priceString.replace(/[^\d]/g, '');
    return parseInt(num, 10) || 0;
  };

  
  const filterListings = (listing) => {
    const { city, type, price, disability } = filters;
    const priceValue = extractPriceValue(listing.price || '');
  
    const matchesCity = city === '' || listing.location?.toLowerCase().includes(city.toLowerCase());
    const matchesType = type === '' || listing.type === type;
    const matchesPrice =
      price === '' ||
      (price === 'low' && priceValue < 15000) ||
      (price === 'mid' && priceValue >= 15000 && priceValue <= 30000) ||
      (price === 'high' && priceValue > 30000);
    const matchesDisability =
      disability === '' || listing.disability?.includes(disability);
  
    return matchesCity && matchesType && matchesPrice && matchesDisability;
  };
  
  const applyFilters = () => {
    const results = listings.filter(filterListings);
    setFilteredListings(results);
  };

  // ACTIVE LINK STYLING FUNCTION
  const navLinkClass = ({ isActive }) =>
    `hover:text-black block px-3 py-1 rounded-md ${
      isActive ? 'bg-[#F3F3F3] text-[#594E4E] font-bold shadow-md' : ''
    }`;

  return (
    <div className="min-h-screen flex flex-col text-[#594E4E] font-body bg-white">
      {/* Navbar */}
      <nav className="bg-white text-brand-text font-body shadow-md z-50 h-19 relative">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Find My Stay Logo" className="h-8" />
            <span className="font-bold text-lg text-black">FindMyStay</span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none text-xl">
              {isOpen ? '✖' : '☰'}
            </button>
          </div>

          {/* Navigation Links */}
          <ul className={`md:flex md:space-x-8 text-[16px] font-bold absolute md:static top-16 left-0 w-full md:w-auto bg-white px-6 md:px-0 ${isOpen ? 'block' : 'hidden'}`}>
            <li className="py-2 md:py-0">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li className="py-2 md:py-0">
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
            </li>
            <li className="py-2 md:py-0">
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Login/Signup Buttons */}
          <div className="hidden md:flex space-x-3">
            <Link to="/login" className="px-4 py-2 border rounded-lg hover:bg-black hover:text-white">
              Log In
            </Link>
            <Link to="/signup" className="px-4 py-2 border rounded-lg hover:bg-black hover:text-white">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Filters Section */}
      <motion.section
        onClick={() => console.log('Section clicked')}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto px-6 py-6 bg-white rounded-xl shadow-md -mt-45 z-50 relative"
      >
        <div className="grid md:grid-cols-5 gap-4">
          <input
            type="text"
            name="city"
            value={filters.city}
            onChange={handleInputChange}
            placeholder="Search by city"
            className="p-2 border border-gray-300 rounded-lg"
            aria-label="Search by city"
          />
          <select
            name="type"
            value={filters.type}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-lg"
            aria-label="Filter by property type"
          >
            <option value="">Property Type</option>
            <option value="room">Room</option>
            <option value="apartment">Apartment</option>
          </select>
          <select
            name="price"
            value={filters.price}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-lg"
            aria-label="Filter by price range"
          >
            <option value="">Price Range</option>
            <option value="low">Under Rs 15,000</option>
            <option value="mid">Rs 15,000 - Rs 30,000</option>
            <option value="high">Above Rs 30,000</option>
          </select>
          <select
            name="disability"
            value={filters.disability}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-lg"
            aria-label="Filter by disability features"
          >
            <option value="">Disability Features</option>
            <option value="wheelchair">Wheelchair Accessible</option>
            <option value="elevator">Elevator Access</option>
            <option value="no_steps">No Steps</option>
            <option value="other">Other Features</option>
          </select>

          <button
            type="button"
            onClick={applyFilters}
            className="bg-[#594E4E] text-white px-4 py-2 rounded-lg"
          >
            Filter
          </button>
        </div>
      </motion.section>

      {/* Property Listings */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-8xl mx-auto  py-12 mt-20"
      >
        <PropertyListings listings={filteredListings} />
      </motion.section>

      {/* Floating Chatbot & Roommate Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-40">
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="bg-black-600 outline hover:bg-blue-200 text-black-800 rounded-full p-4 shadow-md"
          title="Open Chatbot"
        >
          🤖
        </button>
        <button
          onClick={() => setShowRoommate(!showRoommate)}
          className="bg-black-100 outline hover:bg-pink-200 text-black-800 rounded-full p-4 shadow-md"
          title="Roommate Matching"
        >
          👯
        </button>
      </div>

      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
      {showRoommate && <RoommateMatch onClose={() => setShowRoommate(false)} />}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default PreLoginDashboard;
