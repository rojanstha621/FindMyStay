import React from "react";
import LandlordNavbar from "../../Components/LandlordNavbar";
import LandlordSidebar from "../../Components/LandlordSidebar";

function Messages() {
  const messages = [
    { id: 1, sender: "John Doe", content: "Is the flat in Lalitpur still available?" },
    { id: 2, sender: "Priya Sharma", content: "Can I schedule a visit this weekend?" },
  ];

  return (
    <div className="min-h-screen font-body text-[#594E4E]">
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
                <div key={msg.id} className="bg-white p-4 rounded shadow">
                  <p className="font-semibold">{msg.sender}</p>
                  <p className="mt-1">{msg.content}</p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Messages;
