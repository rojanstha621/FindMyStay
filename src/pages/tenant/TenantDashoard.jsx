import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import listingData from "../ListingData";
import Chatbot from "../../Components/ChatBot";
import RoommateMatch from "../../Components/RoommateMatch";
import TenantSidebar from "../../Components/TenantSidebar";
import PropertyListings from "../../Components/PropertyLisitngs"; // <-- Import it here!

function TenantDashboard() {
  const navigate = useNavigate();
  const [showChatbot, setShowChatbot] = useState(false);
  const [showRoommate, setShowRoommate] = useState(false);

  const [filters, setFilters] = useState({
    city: "",
    type: "",
    price: "",
    disability: ""
  });

  const [filtered, setFiltered] = useState(listingData);
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 8;

  const extractPrice = (price) => parseInt(price.replace(/[^\d]/g, ""), 10) || 0;

  const applyFilters = (currentFilters) => {
    const { city, type, price, disability } = currentFilters;
    const result = listingData.filter((item) => {
      const matchCity = city === "" || item.location.toLowerCase().includes(city.toLowerCase());
      const matchType = type === "" || item.type === type;
      const matchPrice =
        price === "" ||
        (price === "low" && extractPrice(item.price) < 15000) ||
        (price === "mid" && extractPrice(item.price) >= 15000 && extractPrice(item.price) <= 30000) ||
        (price === "high" && extractPrice(item.price) > 30000);
      const matchDisability =
        disability === "" || (item.disability && item.disability.includes(disability));
      return matchCity && matchType && matchPrice && matchDisability;
    });
    setFiltered(result);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const startIdx = (currentPage - 1) * listingsPerPage;
  const currentListings = filtered.slice(startIdx, startIdx + listingsPerPage);
  const totalPages = Math.ceil(filtered.length / listingsPerPage);

  const handleViewDetails = (listing) => {
    navigate(`/property/${listing.id}`, { state: { property: listing } });
  };

  return (
    <div className="min-h-screen bg-white text-[#594E4E] font-body relative">
      <Navbar />

      <div className="flex">
        <TenantSidebar />

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome Back, Tenant 👋</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-xl shadow mb-6">
            <input
              type="text"
              name="city"
              value={filters.city}
              onChange={handleFilterChange}
              placeholder="Search by city"
              className="p-2 border rounded-md"
            />
            <select name="type" value={filters.type} onChange={handleFilterChange} className="p-2 border rounded-md">
              <option value="">Type</option>
              <option value="room">Room</option>
              <option value="apartment">Apartment</option>
            </select>
            <select name="price" value={filters.price} onChange={handleFilterChange} className="p-2 border rounded-md">
              <option value="">Price</option>
              <option value="low">Under 15,000</option>
              <option value="mid">15,000–30,000</option>
              <option value="high">Above 30,000</option>
            </select>
            <select name="disability" value={filters.disability} onChange={handleFilterChange} className="p-2 border rounded-md">
              <option value="">Disability</option>
              <option value="wheelchair">Wheelchair Accessible</option>
              <option value="elevator">Elevator</option>
              <option value="no_steps">No Steps</option>
            </select>
          </div>

          <h2 className="text-xl font-semibold mb-4">Available Listings</h2>

          {/* Instead of manual cards, use PropertyListings here */}
          <PropertyListings listings={currentListings} handleViewDetails={handleViewDetails} />

          {totalPages > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 border rounded ${currentPage === i + 1 ? "bg-[#594E4E] text-white" : "bg-white"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </main>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-40">
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full p-4 shadow-md"
          title="Open Chatbot"
        >
          🤖
        </button>
        <button
          onClick={() => setShowRoommate(!showRoommate)}
          className="bg-pink-100 hover:bg-pink-200 text-pink-800 rounded-full p-4 shadow-md"
          title="Roommate Matching"
        >
          👯
        </button>
      </div>

      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
      {showRoommate && <RoommateMatch onClose={() => setShowRoommate(false)} />}

      <Footer />
    </div>
  );
}

export default TenantDashboard;
