// src/Components/PropertyListings.jsx
import React, { useState } from 'react';
import {
  FaWheelchair, FaBed, FaBath, FaWifi, FaCarAlt, FaDoorOpen, FaChair,
  FaDumbbell, FaLock, FaArrowUp
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const featureIcons = {
  "1 Bedroom": <FaBed />,
  "2 Bedrooms": <FaBed />,
  "3 Bedrooms": <FaBed />,
  "4 Bedrooms": <FaBed />,
  "1 Bathroom": <FaBath />,
  "2 Bathrooms": <FaBath />,
  "3 Bathrooms": <FaBath />,
  "Balcony": <FaDoorOpen />,
  "Parking Space": <FaCarAlt />,
  "WiFi": <FaWifi />,
  "High-Speed WiFi": <FaWifi />,
  "Furnished": <FaChair />,
  "Studio": <FaBed />,
  "Gym": <FaDumbbell />,
  "24/7 Security": <FaLock />,
  "Security System": <FaLock />
};

const disabilityIcons = {
  "wheelchair": <FaWheelchair title="Wheelchair Accessible" />,
  "elevator": <FaArrowUp title="Elevator Access" />,
  "no_steps": <FaWheelchair title="Step-free Access" />
};

const conversionRates = {
  USD: 1,
  EUR: 0.93,
  NPR: 132.5
};

const PropertyListings = ({ listings = [] }) => {
  const [currency, setCurrency] = useState('NPR');

  const convertPrice = (priceString) => {
    const match = priceString.match(/\d[\d,]*/);
    if (!match) return '';
    const number = parseInt(match[0].replace(/,/g, ''));
    const priceInUSD = number / 132.5;

    let convertedPrice = priceInUSD;
    if (currency === 'EUR') {
      convertedPrice = priceInUSD * conversionRates.EUR;
    } else if (currency === 'NPR') {
      convertedPrice = priceInUSD * conversionRates.NPR;
    }

    return currency === 'NPR'
      ? `Rs. ${Math.round(convertedPrice).toLocaleString()}/month`
      : `${currency} ${convertedPrice.toFixed(2)}/month`;
  };

  if (listings.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        No properties match your search criteria.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-end mb-4">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="NPR">NPR</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {listings.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow p-4 flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:ring-1 hover:ring-blue-200"
            role="article"
            aria-label={`Property listing for ${item.title}`}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-40 sm:h-48 object-cover rounded-md mb-4 transform transition duration-300 hover:scale-105 hover:brightness-95"
            />

            <div className="mb-2 flex justify-between items-start">
              <div>
                <h2 className="text-base sm:text-lg font-semibold">{item.title}</h2>
                <p className="text-xs sm:text-sm text-gray-600">{item.location}</p>
                <p className="text-sm font-semibold text-gray-800 mt-1">
                  {convertPrice(item.price)}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-gray-600 text-xs sm:text-sm justify-end">
                {item.features.map((feature) =>
                  featureIcons[feature] ? (
                    <span key={feature} className="relative group flex items-center">
                      {featureIcons[feature]}
                      <span className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                        {feature}
                      </span>
                    </span>
                  ) : null
                )}
              </div>
            </div>

            {item.disability?.length > 0 && (
              <div className="flex flex-wrap gap-3 text-blue-600 text-lg mb-4 justify-end">
                {item.disability.map((type) =>
                  disabilityIcons[type] ? (
                    <span key={type}>{disabilityIcons[type]}</span>
                  ) : null
                )}
              </div>
            )}

            <Link
              to={`/property/${item.id}`}
              className="w-full text-sm sm:text-base mt-auto bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;
