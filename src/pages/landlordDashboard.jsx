import React from "react";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import LandlordNavbar from "../Components/LandlordNavbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import LandlordSidebar from "../Components/LandlordSidebar";

function LandlordDashboard() {
  const listings = [
    {
      id: 1,
      title: "Luxury Flat in Lalitpur",
      price: "Rs. 30,000/month",
      image: image1,
    },
    {
      id: 2,
      title: "Budget Room in Bhaktapur",
      price: "Rs. 10,000/month",
      image: image2,
    },
  ];

  return (
    <div className="min-h-screen text-[#594E4E] font-body">
      <LandlordNavbar />

      <div className="flex">
        {/* Sidebar */}
        <LandlordSidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome Back, Landlord 👋</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-lg font-semibold">Total Listings</h2>
              <p className="text-2xl font-bold mt-2">2</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-lg font-semibold">Total Bookings</h2>
              <p className="text-2xl font-bold mt-2">5</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-lg font-semibold">Pending Requests</h2>
              <p className="text-2xl font-bold mt-2">1</p>
            </div>
          </div>

          {/* My Listings Section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">My Listings</h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-xl shadow overflow-hidden">
                <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{listing.title}</h3>
                  <p className="text-sm mt-1">{listing.price}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <button className="text-sm text-[#594E4E] underline">Edit</button>
                    <button className="text-sm text-red-600 underline">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer  />
    </div>
  );
}

export default LandlordDashboard;
