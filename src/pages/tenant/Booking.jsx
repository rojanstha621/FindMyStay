import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Components/Navbar';


function Booking() {
  const { state } = useLocation();
  const property = state?.property;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }
    if (!formData.date) newErrors.date = "Booking date is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSuccessMessage(`✅ Booking confirmed for ${property.title} on ${formData.date}!`);
    setFormData({ name: '', email: '', date: '' });
    setErrors({});
  };

  const placeholderImage = 'https://via.placeholder.com/400';

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
        No property selected for booking.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between text-[#594E4E] font-body bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Property Preview */}
            <div className="h-full">
              <img
                src={property.image || placeholderImage}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Booking Form */}
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
              <p className="text-gray-600 mb-4">{property.description}</p>
              <p className="font-semibold text-[#594E4E] mb-2">Price: Rs. {property.price}/month</p>
              <p className="text-sm text-gray-500 mb-6">Type: {property.type}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="date" className="block mb-1 font-medium">Preferred Booking Date</label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                  {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                </div>

                <button
                  type="submit"
                  className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition"
                >
                  Confirm Booking
                </button>
              </form>

              {successMessage && (
                <p className="text-green-600 font-semibold mt-4">{successMessage}</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Booking;
