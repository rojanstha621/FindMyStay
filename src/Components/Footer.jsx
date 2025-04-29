import React from "react";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Social Media Icons

function Footer() {
  return (
    <footer className="bg-[#303442] text-[#ffffff] font-body border-t border-[#E0D6C5]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-3">FindMyStay</h2>
          <p className="text-sm">
            Your trusted platform to find and rent rooms, connect with
            roommates, and manage your property needs.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-md font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-md font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="#" className="hover:underline">Room Listings</Link></li>
            <li><Link to="#" className="hover:underline">Roommate Matching</Link></li>
            <li><Link to="#" className="hover:underline">Chatbot Help</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: <a href="mailto:support@findmystay.com" className="hover:underline">support@findmystay.com</a></p>
          <p className="text-sm mt-1">Phone: <a href="tel:+9779812345678" className="hover:underline">+977-9812345678</a></p>
        </div>
      </div>

      {/* Social Media */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center space-x-6">
        <a href="https://facebook.com" aria-label="Facebook" className="text-[#E0D6C5] hover:text-white">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" className="text-[#E0D6C5] hover:text-white">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" aria-label="Instagram" className="text-[#E0D6C5] hover:text-white">
          <FaInstagram size={24} />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#E0D6C5] py-4 text-center text-sm">
        © {new Date().getFullYear()} FindMyStay. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
