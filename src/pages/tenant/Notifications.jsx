import React from "react";
import Navbar from "../../Components/Navbar";
import TenantSidebar from "../../Components/TenantSidebar";

function Notifications() {
  const notifications = [
    "Your booking for 'Luxury Flat in Lalitpur' has been approved.",
    "New message from landlord: 'Is the timing okay for a visit?'",
    "Your profile was updated successfully.",
    "You received a new property recommendation.",
  ];

  return (
    <div className="max-h-full text-[#594E4E] font-body">
      <Navbar />

      <div className="flex">
        <TenantSidebar />

        <main className="flex-1 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">🔔 Notifications</h2>

          {notifications.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <p className="text-lg">You're all caught up!</p>
              <p className="text-sm mt-2">Check back later for updates.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {notifications.map((note, idx) => (
                <div
                  key={idx}
                  className="bg-white border-l-4 border-blue-500 p-4 rounded-xl shadow-sm"
                >
                  <p className="text-sm">{note}</p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Notifications;
