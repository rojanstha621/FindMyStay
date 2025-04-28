// src/Components/PropertyListings.jsx
import React from 'react';
import { FaWheelchair, FaBed, FaBath, FaWifi, FaCarAlt, FaDoorOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function PropertyListings({ listings }) {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      {listings.map((item) => (
        <div key={item.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />

          <div className="flex justify-between items-start mb-4">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600 mt-3">{item.location}</p>
              <p className="text-sm font-semibold mt-3">{item.price}</p>
            </div>

            {/* Right side - Icons */}
            <div className="flex flex-col gap-2 text-gray-600 text-sm items-end">
              <div className="flex flex-wrap gap-2 justify-end">
                {item.features.includes("1 Bedroom") && (
                  <span className="flex flex-row-reverse items-center gap-1" title="1 Bedroom">
                    1<FaBed />
                  </span>
                )}
                {item.features.includes("2 Bedrooms") && (
                  <span className="flex flex-row-reverse items-center gap-1" title="2 Bedrooms">
                    2<FaBed />
                  </span>
                )}
                {item.features.includes("3 Bedrooms") && (
                  <span className="flex flex-row-reverse items-center gap-1" title="3 Bedrooms">
                    3<FaBed />
                  </span>
                )}
                {item.features.includes("4 Bedrooms") && (
                  <span className="flex flex-row-reverse items-center gap-1" title="4 Bedrooms">
                    4<FaBed />
                  </span>
                )}
                {item.features.includes("1 Bathroom") && (
                  <span className="flex flex-row-reverse items-center gap-1" title="1 Bathroom">
                    1<FaBath />
                  </span>
                )}
                {item.features.includes("2 Bathrooms") && (
                  <span className="flex flex-row-reverse items-center gap-1" title="2 Bathrooms">
                    2<FaBath />
                  </span>
                )}
                {item.features.includes("3 Bathrooms") && (
                  <span className="flex flex-row-reverse items-center gap-1" title="3 Bathrooms">
                    3<FaBath />
                  </span>
                )}
                {item.features.includes("Balcony") && (
                  <span className="flex flex-row-reverse items-center gap-1" title="Balcony">
                    <FaDoorOpen />
                  </span>
                )}
                {item.features.includes("Parking Space") && (
                  <span className="flex flex-row-reverse items-center gap-1" title="Parking Space">
                    <FaCarAlt />
                  </span>
                )}
                {(item.features.includes("WiFi") || item.features.includes("High-Speed WiFi")) && (
                  <span className="flex flex-row-reverse items-center gap-1" title="WiFi">
                    <FaWifi />
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* View Details Button */}
          <Link
            to={`/property/${item.id}`}
            className="mt-auto bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-md transition"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PropertyListings;
