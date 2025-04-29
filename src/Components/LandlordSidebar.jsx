import React from "react";
import { Link, useLocation } from "react-router-dom";

function LandlordSidebar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-3 py-2 rounded transition-colors ${
      pathname === path ? "bg-white text-black shadow" : "hover:text-black text-[#594E4E]"
    }`;

  return (
    <aside className="w-70 h-screen screen bg-[#E5E7EB] p-6 hidden md:block overflow-y-auto ">

      <h2 className="text-xl font-bold mb-6 text-[#594E4E]">Landlord Panel</h2>
      <nav className="space-y-3 text-[16px] font-medium">
        <Link to="/landlord/my-listings" className={linkClass("/landlord/my-listings")}>
          📋 My Listings
        </Link>
        <Link to="/landlord/add-listings" className={linkClass("/landlord/add-listings")}>
          ➕ Add New Listing
        </Link>
        <Link to="/landlord/messages" className={linkClass("/landlord/messages")}>
          💬 Messages
        </Link>
        <Link to="/landlord/requests" className={linkClass("/landlord/requests")}>
          🔔 Booking Requests
        </Link>
        <Link to="/landlord/payments" className={linkClass("/landlord/payments")}>
          💰 Payments
        </Link>
        <Link to="/landlord/settings" className={linkClass("/landlord/settings")}>
          ⚙️ Settings
        </Link>
      </nav>
    </aside>
  );
}

export default LandlordSidebar;
