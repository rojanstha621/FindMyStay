import React from "react";
import { Link, useLocation } from "react-router-dom";

function TenantSidebar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-3 py-2 rounded transition-colors ${
      pathname === path ? "bg-white text-black shadow" : "hover:text-black text-[#594E4E]"
    }`;

  return (
    <aside className="w-64 h-screen bg-[#E5E7EB] p-6 hidden md:block overflow-y-auto ">
      <h2 className="text-xl font-bold mb-6 text-[#594E4E]">Tenant Panel</h2>
      <nav className="space-y-3 text-[16px] font-medium">
        <Link to="/tenant/my-listings" className={linkClass("/tenant/my-listings")}>
          ⭐ Favorites
        </Link>
        <Link to="/tenant/notifications" className={linkClass("/tenant/notifications")}>
          🔔 Notifications
        </Link>
        <Link to="/tenant/payments" className={linkClass("/tenant/payments")}>
          💳 Payments
        </Link>
        <Link to="/tenant/settings" className={linkClass("/tenant/settings")}>
          ⚙️ Settings
        </Link>
      </nav>
    </aside>
  );
}

export default TenantSidebar;
