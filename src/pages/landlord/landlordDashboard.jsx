import React, { useState } from "react";
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import LandlordNavbar from "../../Components/LandlordNavbar";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import LandlordSidebar from "../../Components/LandlordSidebar";

function LandlordDashboard() {
  const [listings, setListings] = useState([
    {
      id: 1,
      title: "1BHK Apartment",
      price: "Rs. 15,000/month",
      image: image1,
      location: "Kathmandu, Nepal",
      description: "A 1BHK apartment with all basic amenities.",
      features: ["1 Bedroom", "1 Bathroom", "Balcony", "Furnished"],
      type: "apartment",
      disability: ["wheelchair"]
    },
    {
      id: 2,
      title: "Lakeview Apartment",
      price: "Rs. 25,000/month",
      image: image2,
      location: "Pokhara, Nepal",
      description: "Apartment in Pokhara near lake.",
      features: ["2 Bedrooms", "1 Bathroom", "Kitchen", "Parking Space"],
      type: "apartment",
      disability: ["elevator", "wheelchair"]
    },
    {
      id: 3,
      title: "Single Room",
      price: "Rs. 12,000/month",
      image: image3,
      location: "Lalitpur, Nepal",
      description: "A room for singles or students.",
      features: ["Studio", "High-Speed WiFi"],
      type: "room",
      disability: []
    },
  ]);

  const handleRemove = (id) => {
    console.log("Remove clicked for ID:", id);
    setListings((prev) => prev.filter((l) => l.id !== id));
  };

  return (
    <div className="min-h-screen bg-white text-[#594E4E] font-body">
      <LandlordNavbar />

      <div className="flex">
        <LandlordSidebar />

        <main className="flex-1 p-4 sm:p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome Back, Landlord 👋</h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-lg font-semibold">Total Listings</h2>
              <p className="text-2xl font-bold mt-2">{listings.length}</p>
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

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">My Listings</h2>
            <Link to="/landlord/add-listings" className="text-blue-600 hover:underline">Add New Listing</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{listing.title}</h3>
                  <p className="text-sm mt-2">{listing.price}</p>
                  <p className="text-sm mt-1 text-gray-600 truncate">{listing.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <Link to={`/landlord/edit-listing/${listing.id}`} className="text-sm text-blue-600 hover:underline">Edit</Link>
                    <button onClick={() => handleRemove(listing.id)} className="text-sm text-red-600 hover:underline">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default LandlordDashboard;
