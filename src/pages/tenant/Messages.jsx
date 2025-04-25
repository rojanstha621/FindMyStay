import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import TenantSidebar from '../../Components/TenantSidebar';

function Messages() {
  const { state } = useLocation();
  const [message, setMessage] = useState(
    state?.propertyId ? `Hi, I'm interested in property ID: ${state.propertyId}` : ''
  );
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // For submission state

  // Sample landlord name (you can replace it with dynamic data)
  const landlordName = state?.landlordName || "Landlord";
  const propertyTitle = state?.propertyTitle || "Property";

  const handleSend = () => {
    if (message.trim() === '') {
      setError('Message cannot be empty.');
    } else if (message.length < 10) {
      setError('Message must be at least 10 characters long.');
    } else {
      setIsSubmitting(true);
      setError('');
      setTimeout(() => {
        alert('Message sent!');
        setIsSubmitting(false);
        setMessage('');
      }, 1500); // Simulate network delay
    }
  };

  const handleClear = () => {
    setMessage('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-[#594E4E] font-body">
      <Navbar />

      <div className="flex">
        <TenantSidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white rounded-lg shadow-lg mx-4 mt-6">
          <h1 className="text-3xl font-semibold text-[#594E4E] mb-4">💬 Contact {landlordName}</h1>

          {/* Property Information Section */}
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-[#594E4E] mb-2">Property Information</h3>
            <p className="text-lg text-gray-700">
              <strong>Property Title: </strong>{propertyTitle}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Landlord: </strong>{landlordName}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
            <textarea
              rows="8"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4 text-lg"
              placeholder="Type your message here..."
            />

            {/* Display error message */}
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handleSend}
                disabled={isSubmitting}
                className={`${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#594E4E] hover:bg-[#4A3C3A]'
                } text-white px-8 py-3 rounded-lg transition duration-300`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <button
                onClick={handleClear}
                className="text-[#594E4E] hover:text-[#4A3C3A] text-lg px-6 py-2 rounded-lg transition duration-300"
              >
                Clear
              </button>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Messages;
