import React from "react";
import Navbar from "../../Components/Navbar";
import TenantSidebar from "../../Components/TenantSidebar";
import listingsData from "../ListingData"; // adjust path if needed

function MyListings() {
  const listings = listingsData.slice(0, 2); // take only first 2 items

  return (
    <div className="min-h-screen text-[#594E4E] font-body">
      <Navbar />
      <div className="flex">
        <TenantSidebar />
        <main className="flex-1 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">🛒 Saved Listings</h2>
          {listings.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <p className="text-lg">You haven't added any listings yet.</p>
              <p className="text-sm mt-2">Explore properties and add them to your cart.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <div key={listing.id} className="bg-white p-4 rounded-xl shadow-md">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-1">{listing.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{listing.description}</p>
                  <p className="text-[#594E4E] font-semibold">{listing.price}</p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default MyListings;
