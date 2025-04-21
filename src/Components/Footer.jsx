import React from "react";

function Footer() {
  return (
    <footer className="bg-[#2F2A2A] text-[#FFFFFF] font-body border-t border-[#E0D6C5]">
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
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Login</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-md font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Room Listings</a></li>
            <li><a href="#" className="hover:underline">Roommate Matching</a></li>
            <li><a href="#" className="hover:underline">Chatbot Help</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@findmystay.com</p>
          <p className="text-sm mt-1">Phone: +977-9812345678</p>
        </div>
      </div>

      <div className="border-t border-[#E0D6C5] py-4 text-center text-sm">
        © {new Date().getFullYear()} FindMyStay. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
