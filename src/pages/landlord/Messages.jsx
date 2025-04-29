import React, { useState } from "react";
import LandlordNavbar from "../../Components/LandlordNavbar";
import LandlordSidebar from "../../Components/LandlordSidebar";

function Messages() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "John Doe", content: "Is the flat in Lalitpur still available?", reply: "" },
    { id: 2, sender: "Priya Sharma", content: "Can I schedule a visit this weekend?", reply: "" },
    { id: 3, sender: "Aarati Gurung", content: "What is the rent for the 2BHK in Pokhara?", reply: "" },
    { id: 4, sender: "Sita Sharma", content: "Is the 3BHK in Kathmandu still available?", reply: "" },
  ]);
  const [showModal, setShowModal] = useState(false); // Modal visibility
  const [currentMessage, setCurrentMessage] = useState(null); // Current message to reply to
  const [replyText, setReplyText] = useState(""); // Reply text

  // Function to delete a message
  const deleteMessage = (id) => {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
  };

  // Function to open the reply modal
  const openReplyModal = (message) => {
    setCurrentMessage(message);
    setShowModal(true);
  };

  // Function to handle reply text change
  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  // Function to send the reply and update the message
  const sendReply = () => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === currentMessage.id ? { ...msg, reply: replyText } : msg
      )
    );
    setShowModal(false);
    setReplyText(""); // Reset reply text
  };

  return (
    <div className="min-h-screen bg-white font-body text-[#594E4E]">
      <LandlordNavbar />
      <div className="flex">
        <LandlordSidebar />
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4">📬 Messages</h2>
          {messages.length === 0 ? (
            <p>No messages yet.</p>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{msg.sender}</p>
                    <p className="mt-1">{msg.content}</p>
                    {msg.reply && (
                      <p className="mt-2 text-sm font-medium text-green-600">Reply: {msg.reply}</p>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => openReplyModal(msg)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                    >
                      Reply
                    </button>
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Reply Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-[#F2F2F2] p-6 rounded-lg w-100 mb-100">
            <h3 className="text-xl font-semibold mb-4">Reply to {currentMessage.sender}</h3>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              value={replyText}
              onChange={handleReplyChange}
              rows="4"
              placeholder="Type your reply here..."
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={sendReply}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Send Reply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Messages;
