import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import HeroCarousel from '../Components/HeroCarousel';
import listings from './ListingData';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

function PreLoginDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [filters, setFilters] = useState({
    city: '',
    type: '',
    price: '',
    disability: ''  // New state for disability filters
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
    const priceValue = extractPriceValue(listing.price);
  
    const matchesCity = city === '' || listing.location.toLowerCase().includes(city.toLowerCase());
    const matchesType = type === '' || (listing.type && listing.type === type);
    const matchesPrice =
      price === '' ||
      (price === 'low' && priceValue < 15000) ||
      (price === 'mid' && priceValue >= 15000 && priceValue <= 30000) ||
      (price === 'high' && priceValue > 30000);
  
    // New disability filter logic
    const matchesDisability =
      disability === '' || (listing.disability && listing.disability.includes(disability));
  
    return matchesCity && matchesType && matchesPrice && matchesDisability;
  };
  
  const applyFilters = () => {
    const results = listings.filter(filterListings);
    setFilteredListings(results);
  };
  

  return (
    <div className="min-h-screen text-[#594E4E] font-body">
      <nav className="bg-brand-bg text-brand-text font-body shadow-md z-50 h-19 relative">
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

      <HeroCarousel />

      <motion.section
        onClick={() => console.log('Section clicked')}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto px-6 py-6 bg-white rounded-xl shadow-md -mt-60 z-50 relative"
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

    {/* Disability Features Filter */}
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


      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto px-6 py-12 mt-50"
      >
        {filteredListings.length === 0 ? (
          <div className="text-center text-gray-500 text-lg py-20">
            No properties found matching your criteria.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-4">
            {filteredListings.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow p-4">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md" />
                <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.location}</p>
                <p className="text-sm font-semibold mt-2">{item.price}</p>
                <Link to={`/property/${item.id}`}>
                  <button className="mt-4 px-4 py-2 bg-[#594E4E] text-white rounded-lg w-full">View Details</button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </motion.section>

      <Footer />
    </div>
  );
}

export default PreLoginDashboard;
