import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import listings from './ListingData';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = listings.find((item) => item.id === parseInt(id));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-600">
        Property not found.
      </div>
    );
  }

  const handleAddToCart = () => { 
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = existingCart.some((item) => item.id === property.id);

    if (!isAlreadyInCart) {
      localStorage.setItem("cart", JSON.stringify([...existingCart, property]));
      alert("Property added to cart!");
    } else {
      alert("Property is already in the cart.");
    }
  };

  const handleBookNow = () => {
    navigate(`/booking/${property.id}`, { state: { property } });
  };

  const handleContactLandlord = () => {
    navigate(`/messages`, { state: { propertyId: property.id } });
  };

  return (
    <div className="min-h-screen text-[#594E4E] font-body">
      <Navbar />

      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col lg:flex-row gap-6 mt-10 mx-4">
        <div className="flex-1">
          <img src={property.image} alt={property.title} className="rounded-xl w-full h-[400px] object-cover" />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
          <p className="text-sm text-gray-600 mb-1">{property.location}</p>
          <p className="text-lg font-semibold mb-4">{property.price}</p>

          <p className="mb-4">{property.description}</p>

          <ul className="list-disc pl-6 mb-6">
            {property.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAddToCart}
              className="bg-[#594E4E] text-white px-4 py-2 rounded-lg hover:opacity-90"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBookNow}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:opacity-90"
            >
              Book Now
            </button>
            <button
              onClick={handleContactLandlord}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-90"
            >
              Contact Landlord
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PropertyDetails;
