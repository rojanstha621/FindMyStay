import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import listingData from "./ListingData";
import { Link } from "react-router-dom";
import Chatbot from "../Components/ChatBot";
import RoommateMatch from "../Components/RoommateMatch";
import TenantSidebar from "../Components/TenantSidebar";

function TenantDashboard() {
  const navigate = useNavigate();
  const [showChatbot, setShowChatbot] = useState(false);
  const [showRoommate, setShowRoommate] = useState(false);

  const handleViewDetails = (property) => {
    navigate(`/property/${property.id}`, { state: { property } });
  };

  return (
    <div className="min-h-screen text-[#594E4E] font-body relative">
      <Navbar />

      <div className="flex">
        <TenantSidebar />

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome Back, Tenant 👋</h1>

          <div className="bg-white p-4 rounded-xl shadow mb-6 flex items-center justify-between">
            <p>You have 2 new notifications!</p>
            <Link
                to="/tenant/notifications"
                className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 inline-block text-center">
                View
              </Link>
              </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>You messaged your landlord.</li>
                <li>Landlord has approved your request.</li>
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
                      className="px-4 py-2 bg-[#594E4E] text-white rounded hover:opacity-90"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-40">
  {/* Chatbot Button */}
  <button
    onClick={() => setShowChatbot(!showChatbot)}
    className="bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full p-4 shadow-md transition-colors"
    title="Open Chatbot"
  >
    🤖
  </button>

  {/* Roommate Matching Button */}
  <button
    onClick={() => setShowRoommate(!showRoommate)}
    className="bg-pink-100 hover:bg-pink-200 text-pink-800 rounded-full p-4 shadow-md transition-colors"
    title="Roommate Matching"
  >
    👯
  </button>
</div>



      {/* Popups */}
      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
      {showRoommate && <RoommateMatch onClose={() => setShowRoommate(false)} />}

      <Footer />
    </div>
  );
}

export default TenantDashboard;
