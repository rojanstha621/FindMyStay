// Pages/ServicesPage.jsx
import React from "react";
import Navbar from "../Components/Navbar"; // Update path as per your structure
import Footer from "../Components/Footer";

const Services= () => {
  return (
    <div className="min-h-screen flex flex-col text-[#594E4E] font-body bg-white">
      <Navbar />

      <main className="flex-grow">
        <section className="max-w-6xl mx-auto px-6 py-10 text-center">
          <h2 className="text-2xl font-bold mb-6">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-3 text-left">
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">🏠 Room Rentals</h3>
              <p className="text-sm text-gray-600">
                Browse and find affordable rooms that match your needs in your preferred location.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">👯 Roommate Matching</h3>
              <p className="text-sm text-gray-600">
                Find like-minded roommates based on your preferences and lifestyle choices.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">✅ Verified Listings</h3>
              <p className="text-sm text-gray-600">
                All listings are verified and regularly updated to ensure safety and transparency.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
