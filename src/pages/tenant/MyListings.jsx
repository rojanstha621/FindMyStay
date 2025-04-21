import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import TenantSidebar from "../../Components/TenantSidebar";

function MyListings() {
  const listings = [
    {
      id: 1,
      title: "Modern Studio Apartment",
      description: "A cozy and modern studio in Kathmandu with great city views.",
      price: "Rs. 25,000/month",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      id: 2,
      title: "Spacious Family Home",
      description: "Perfect for families. Includes a garden and 2-car garage.",
      price: "Rs. 55,000/month",
      image: "https://images.unsplash.com/photo-1560185127-6ed189bf204d",
    },
    {
      id: 3,
      title: "Luxury Flat in Lalitpur",
      description: "Premium location, 3BHK flat with 24/7 security.",
      price: "Rs. 70,000/month",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20d",
    },
  ];

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
