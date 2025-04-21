import React from "react";
import { Link } from "react-router-dom";

function LandlordSidebar() {
  return (
    <aside className="w-64 h-screen bg-[#E5E7EB] p-6 hidden md:block">
      <nav className="space-y-4 text-[16px] font-semibold">
        <Link to="/landlord/my-listings" className="block hover:text-black">
          📋 My Listings
        </Link>
        <Link to="/landlord/add-listings" className="block hover:text-black">
          ➕ Add New Listing
        </Link>
        <Link to="/landlord/messages" className="block hover:text-black">
          💬 Messages
        </Link>
        <Link to="/landlord/requests" className="block hover:text-black">
          🔔 Booking Requests
        </Link>
      </nav>
    </aside>
  );
}

export default LandlordSidebar;
