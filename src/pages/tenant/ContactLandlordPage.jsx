import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function ContactLandlordPage() {
  const location = useLocation();
  const { propertyId } = location.state || {}; // Get propertyId from state if available

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ideally, send the message to the backend here
    alert("Message sent to the landlord!");
    setMessage(""); // Clear the message after submission
    setName(""); // Clear name input
    setEmail(""); // Clear email input
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Contact the Landlord</h1>

        {propertyId && (
          <p className="text-lg text-center text-gray-500 mb-6">
            You're inquiring about Property ID: {propertyId}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="text-sm font-semibold text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              placeholder="Write your message here..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-gray-500">
          <p>We will get back to you as soon as possible. Thank you for reaching out!</p>
        </div>
      </div>
    </div>
  );
}

export default ContactLandlordPage;
