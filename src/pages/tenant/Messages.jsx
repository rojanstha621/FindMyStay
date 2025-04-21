import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import TenantSidebar from '../../Components/TenantSidebar';

function Messages() {
  const { state } = useLocation();
  const [message, setMessage] = useState(
    state?.propertyId ? `Hi, I'm interested in property ID: ${state.propertyId}` : ''
  );
  const [error, setError] = useState('');

  const handleSend = () => {
    if (message.trim() === '') {
      setError('Message cannot be empty.');
    } else {
      alert('Message sent!');
      setMessage('');
      setError('');
    }
  };

  return (
    <div className="min-h-screen text-[#594E4E] font-body">
      <Navbar />

      <div className="flex">
        <TenantSidebar />
 
        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">💬 Contact Landlord</h1>

          <div className="bg-white p-6 rounded-xl shadow max-w-2xl">
            <textarea
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Type your message..."
            />

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

            <button
              onClick={handleSend}
              className="mt-4 bg-[#594E4E] text-white px-6 py-2 rounded hover:opacity-90"
            >
              Send
            </button>
          </div>
        </main>
      </div>
</div>
  );
}

export default Messages;
