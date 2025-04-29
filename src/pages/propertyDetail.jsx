import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import listings from "../pages/ListingData"; // Import your listing data

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = listings.find((item) => String(item.id) === String(id));
  const [isFavorited, setIsFavorited] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("NPR");
  const [convertedPrice, setConvertedPrice] = useState(null); // null until calculated

  // Currency conversion rates
  const conversionRates = {
    NPR: 1,
    USD: 0.0084,
    EUR: 0.0076,
  };

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Run currency conversion whenever currency or property changes
  useEffect(() => {
    if (property) {
      convertCurrency(selectedCurrency);
    }
  }, [selectedCurrency, property]);

  const handleFavoriteToggle = () => {
    setIsFavorited((prev) => !prev);
  };

  const handleBookNow = () => {
    navigate(`/booking/${property.id}`);
  };

  const handleContactLandlord = () => {
    navigate(`/contact-landlord/${property.id}`);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency); // Triggers conversion in useEffect
  };

  const convertCurrency = (currency) => {
    if (!property || !property.price) return;

    // Extract numeric part from price string
    const priceMatch = property.price.match(/[\d,]+/);
    if (!priceMatch) {
      setConvertedPrice(null);
      return;
    }

    const rawPrice = parseFloat(priceMatch[0].replace(/,/g, "")); // Remove commas, convert to float
    const rate = conversionRates[currency] || 1;
    const result = rawPrice * rate;

    setConvertedPrice(result);
  };

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Property not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <button
              onClick={() => navigate(-1)}
              className="mb-4 text-blue-600 hover:underline"
            >
              ← Back to Listings
            </button>

            <h1 className="text-3xl font-bold text-[#594E4E]">
              {property.title}
            </h1>
            <p className="text-md text-gray-500 mt-1">{property.location}</p>
            <p className="text-2xl font-semibold text-[#3D3D3D] mt-2">
              {convertedPrice !== null
                ? `${selectedCurrency} ${convertedPrice.toFixed(2)}`
                : "Price not available"}
            </p>
            <select
              value={selectedCurrency}
              onChange={(e) => handleCurrencyChange(e.target.value)}
              className="mt-2 p-2 border border-gray-300 rounded-md"
            >
              <option value="NPR">NPR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>

          <div className="border-t pt-4 text-sm space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">Description:</span>{" "}
              {property.description}
            </p>
            <p>
              <span className="font-semibold">Type:</span> {property.type}
            </p>

            {property.features && property.features.length > 0 && (
              <div className="mt-2">
                <p className="font-semibold">Features:</p>
                <ul className="list-disc list-inside text-gray-700">
                  {property.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {property.disability && property.disability.length > 0 && (
              <div className="mt-2">
                <p className="font-semibold">Disability Access:</p>
                <ul className="list-disc list-inside text-gray-700">
                  {property.disability.includes("wheelchair") && (
                    <li>Wheelchair Accessible</li>
                  )}
                  {property.disability.includes("elevator") && (
                    <li>Elevator Available</li>
                  )}
                  {property.disability.includes("no_steps") && (
                    <li>No Steps (Step-free)</li>
                  )}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleBookNow}
              className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition"
            >
              Book Now
            </button>
            <button
              onClick={handleContactLandlord}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition"
            >
              Contact Landlord
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <img
            src={property.image || "https://via.placeholder.com/600x400"}
            alt={property.title}
            className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
            onDoubleClick={handleFavoriteToggle}
          />
          <button
            onClick={handleFavoriteToggle}
            className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
          >
            {isFavorited ? (
              <AiFillHeart className="text-red-600 text-3xl" />
            ) : (
              <AiOutlineHeart className="text-red-600 text-3xl" />
            )}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
