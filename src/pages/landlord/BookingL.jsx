import React from "react";
import LandlordNavbar from "../../Components/LandlordNavbar";
import LandlordSidebar from "../../Components/LandlordSidebar";

function BookingL() {
  const requests = [
    {
      id: 1,
      name: "Ankit Thapa",
      property: "Luxury Flat in Lalitpur",
      date: "2025-04-20",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen font-body text-[#594E4E]">
      <LandlordNavbar />

      <div className="flex">
        <LandlordSidebar />

        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4">🔔 Booking Requests</h2>

          {requests.length === 0 ? (
            <p>No booking requests at the moment.</p>
          ) : (
            <div className="space-y-4">
              {requests.map((req) => (
                <div key={req.id} className="bg-white p-4 rounded shadow">
                  <p><strong>Name:</strong> {req.name}</p>
                  <p><strong>Property:</strong> {req.property}</p>
                  <p><strong>Date:</strong> {req.date}</p>
                  <p><strong>Status:</strong> {req.status}</p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default BookingL;
