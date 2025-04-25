import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import TenantSidebar from "../../Components/TenantSidebar";
import listingsData from "../ListingData"; // adjust path if needed
import { Link } from "react-router-dom";

function MyListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data (for example from an API)
  useEffect(() => {
    setTimeout(() => {
      setListings(listingsData.slice(0, 2)); // Simulate the listings fetching
      setLoading(false);
    }, 500);
  }, []);

  const handleRemoveListing = (id) => {
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings);
    alert("Listing removed successfully!");
  };

  return (
    <div className="min-h-screen text-[#594E4E] font-body">
      <Navbar />
      <div className="flex">
        <TenantSidebar />
        <main className="flex-1 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">🛒 Saved Listings</h2>

          {/* Loading Spinner */}
          {loading ? (
            <div className="flex justify-center items-center mt-10">
              <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {/* Empty State */}
              {listings.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                  <p className="text-lg">You haven't added any listings yet.</p>
                  <p className="text-sm mt-2">Explore properties and add them to your cart.</p>
                  <Link
                    to="/properties"
                    className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Browse Listings
                  </Link>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {listings.map((listing) => (
                    <div
                      key={listing.id}
                      className="bg-white p-4 rounded-xl shadow-md transition-all hover:scale-105 hover:shadow-xl"
                    >
                      <Link to={`/property/${listing.id}`} className="block">
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-full h-40 object-cover rounded mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-1">{listing.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{listing.location}</p>
                        <p className="text-sm text-gray-600 mb-2">{listing.description}</p>
                        <p className="text-[#594E4E] font-semibold">{listing.price}</p>
                      </Link>

                      <div className="flex justify-between items-center mt-4">
                        <button
                          onClick={() => handleRemoveListing(listing.id)}
                          className="text-red-600 hover:text-red-800 font-semibold text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default MyListings;
