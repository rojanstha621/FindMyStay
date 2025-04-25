import React, { useState } from 'react';
import Footer from "../Components/Footer";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="min-h-screen flex flex-col text-[#594E4E] font-body bg-white">
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

      <main className="flex-grow">
        <section className="bg-[#f9f9f9] py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            
            {/* Info Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#2f2f2f]">📞 Contact Us</h2>
              <p className="text-gray-600 text-lg">
                Whether you're looking for help, want to give feedback, or have a business inquiry, we're here for you. Feel free to reach out — we typically respond within 24 hours.
              </p>

              <div className="space-y-4 text-base text-gray-700">
                <div>
                  <strong>Email:</strong> findmystaynepal@gmail.com
                </div>
                <div>
                  <strong>Phone:</strong> (+997) 9828988214
                </div>
                <div>
                  <strong>Office:</strong> Top Floor, Hilton, Kathmandu, Nepal.                </div>
                <div>
                  <strong>Hours:</strong> Mon–Fri, 9:00 AM – 6:00 PM
                </div>
              </div>
            </div>

            {/* Form Section */}
            <form className="bg-white shadow-lg rounded-xl p-8 space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-800">Send us a message</h3>
              
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#594E4E] outline-none"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#594E4E] outline-none"
                required
              />

              <textarea
                placeholder="Write your message here..."
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-[#594E4E] outline-none"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-[#594E4E] text-white px-6 py-3 rounded-md hover:bg-[#453c3c] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <div className="h-10" />
      <Footer />
    </div>
  );
};

export default Contact;
