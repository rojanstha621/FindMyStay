import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/image1.jpg";
import LandlordNavbar from "../../Components/LandlordNavbar";
import LandlordSidebar from "../../Components/LandlordSidebar";

const MyListings = () => {
  const navigate = useNavigate();
  const [listings, setListings] = useState([
    {
      id: 1,
      title: "Luxury Flat in Lalitpur",
      price: "Rs. 30,000/month",
      image: image1,
    },
  ]);

  const handleDelete = (id) => {
    setListings(listings.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen font-body text-[#594E4E]">
      <LandlordNavbar />
      <div className="flex">
        <LandlordSidebar />
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4">📋 My Listings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-xl shadow overflow-hidden"
              >
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{listing.title}</h3>
                  <p className="text-sm">{listing.price}</p>
                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={() =>
                        navigate(`/landlord/edit-listing/${listing.id}`, {
                          state: { listing }, // Pass the listing data to the edit page
                        })
                      }
                      className="text-sm text-[#594E4E] underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(listing.id)}
                      className="text-sm text-red-600 underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyListings;
