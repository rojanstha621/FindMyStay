import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import listingData from "../ListingData"; // <-- Import your data
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Toast from "../../Components/Toast";

function ContactLandlordPage() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });


  useEffect(() => {
    const matchedProperty = listingData.find(item => String(item.id) === String(id));
    // const matchedProperty = listingData.find((p) => p.id === id);
    setProperty(matchedProperty);
    setLoading(false);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast({ show: true, message: `Message sent to the landlord of "${property?.title}"`, type: "success" });
    setMessage("");
    setName("");
    setEmail("");
  
    setTimeout(() => {
      setToast({ ...toast, show: false });
    }, 3000);
  };


  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center text-lg">Loading...</div>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (

        <div className="flex-grow flex items-center justify-center text-lg text-red-500">
          No property information found for ID: {id}
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Contact Landlord about: <span className="text-blue-600">{property.title}</span>
          </h1>

          <p className="text-center text-sm text-gray-500 mb-4">Property ID: {id}</p>

          <div className="mb-6 flex justify-center">
            <img
              src={property.image || "https://via.placeholder.com/400x200"}
              alt={property.title}
              className="rounded-lg w-full max-w-md object-cover h-48"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Your Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                placeholder="Write your message here..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            We'll forward your message to the landlord of <strong>{property.title}</strong>.
          </p>
        </div>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}

      <Footer />
    </div>
  );
}

export default ContactLandlordPage;
