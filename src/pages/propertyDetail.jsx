import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import listings from './ListingData';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; // Heart icons

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = listings.find((item) => item.id === parseInt(id));

  const [isFavorited, setIsFavorited] = useState(false); // State to manage heart icon animation

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-600">
        Property not found.
      </div>
    );
  }

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
    alert(isFavorited ? "Removed from favorites" : "Added to favorites");
  };

  const handleBookNow = () => {
    navigate(`/booking/${property.id}`, { state: { property } });
  };
  const handleContactLandlord = () => {
    navigate("/contact-landlord", { state: { propertyId: property.id } }); // Pass propertyId to the new page
  };

  return (
    <div className="min-h-screen bg-gray-100 text-[#3C3C3C] font-body">
      <Navbar />

      {/* Property Details Section */}
      <div className="max-w-screen-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-xl flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="flex-1 overflow-hidden rounded-xl shadow-lg">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-semibold text-[#594E4E]">{property.title}</h1>
          <p className="text-lg text-gray-700">{property.location}</p>
          <p className="text-xl font-bold text-[#3D3D3D]">{property.price}</p>

          <p className="text-base text-gray-600">{property.description}</p>

          {/* Property Type */}
          <p className="text-sm text-gray-600 font-semibold">Property Type: <span className="font-normal">{property.type}</span></p>

          {/* Disability Features */}
          {property.disability.length > 0 && (
            <p className="text-sm text-gray-600 font-semibold">
              Disability Features:{" "}
              <span className="font-normal">
                {property.disability.join(", ")}
              </span>
            </p>
          )}

          {/* Property Features */}
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            {property.features.map((feature, index) => (
              <li key={index} className="text-sm">{feature}</li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Heart Icon */}
            <button
              onClick={handleFavoriteToggle}
              className="flex items-center justify-center p-2 bg-transparent rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              {isFavorited ? (
                <AiFillHeart className="text-red-600 text-3xl animate-heartbeat" />
              ) : (
                <AiOutlineHeart className="text-red-600 text-3xl" />
              )}
            </button>

            {/* Book Now & Contact Landlord Buttons */}
            <button
              onClick={handleBookNow}
              className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition-colors duration-300"
            >
              Book Now
            </button>
            <button
              onClick={handleContactLandlord}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Landlord
            </button>
          </div>
        </div>
      </div>
      <div className='mt-30'></div>        
      <Footer />
    </div>
  );
}

export default PropertyDetails;
