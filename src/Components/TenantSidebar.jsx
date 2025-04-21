import React from "react";
import { Link } from "react-router-dom";

function TenantSidebar() {
  return (
    <aside className="w-64 h-screen bg-[#E5E7EB] p-6 hidden md:block">
      <nav className="space-y-4 text-[16px] font-semibold">
        <Link to="/tenant/my-listings" className="block hover:text-black">
          📋 My Listings
        </Link>
        <Link to="/tenant/messages" className="block hover:text-black">
          💬 Messages
        </Link>
        <Link to="/tenant/notifications" className="block hover:text-black">
          🔔 Notifications
        </Link>
      </nav>
    </aside>
  );
}

export default TenantSidebar;
