import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import listingData from "./ListingData";
import { Link } from "react-router-dom";

function TenantDashboard() {
  const navigate = useNavigate();
  const handleViewDetails = (property) => {
    navigate(`/property/${property.id}`, { state: { property } });
  };

  return (
    <div className="min-h-screen text-[#594E4E] font-body">
      <Navbar />

      <div className="flex">
        <aside className="w-64 bg-[#E5E7EB] p-6 hidden md:block">
        <nav className="space-y-4 text-[16px] font-semibold">
          <Link to="/tenant/my-listings" className="block hover:text-black">📋 My Listings</Link>
          <Link to="/tenant/messages" className="block hover:text-black">💬 Messages</Link>
          <Link to="/tenant/notifications" className="block hover:text-black">🔔 Notifications</Link>
        </nav>
        </aside>

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome Back, Tenant 👋</h1>

          <div className="bg-white p-4 rounded-xl shadow mb-6 flex items-center justify-between">
            <p>You have 2 new notifications!</p>
            <button className="bg-[#594E4E] text-white px-4 py-1 rounded hover:opacity-90">View</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>You messaged your landlord.</li>
                <li>landlord has approved your request.</li>
                <li>You updated your profile.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-2">Your Property Stats</h2>
              <p>Active Listings: <strong>2</strong></p>
              <p>Pending Applications: <strong>1</strong></p>
              <p>Total Bookings: <strong>4</strong></p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Available Listings</h2>
            <div className="grid md:grid-cols-3 gap-6 pr-10 pl-10">
              {listingData.map((listing) => (
                <div key={listing.id} className="bg-white rounded-xl shadow overflow-hidden">
                  <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover"/>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1">{listing.title}</h3>
                    <p className="text-sm mb-2">{listing.price}</p>
                    <button
                      onClick={() => handleViewDetails(listing)}
                      className="px-4 py-2 bg-[#594E4E] text-white rounded hover:opacity-90">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default TenantDashboard;
