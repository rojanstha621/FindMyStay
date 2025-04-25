import React, { useState } from "react";
import LandlordNavbar from "../../Components/LandlordNavbar";
import LandlordSidebar from "../../Components/LandlordSidebar";

function BookingL() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Ankit Thapa",
      property: "Luxury Flat in Lalitpur",
      date: "2025-04-20",
      status: "Pending",
      contact: "9876543210",
      price: "Rs. 20,000",
    },
    {
      id: 2,
      name: "Ram Karki",
      property: "Lakeview Apartment - Pokhara",
      date: "2025-04-15",
      status: "Approved",
      contact: "9812345678",
      price: "Rs. 15,000",
    },
    {
      id: 3,
      name: "Sita Sharma",
      property: "Hilltop Villa - Kathmandu",
      date: "2025-04-25",
      status: "Pending",
      contact: "9823446789",
      price: "Rs. 30,000",
    },
    {
      id: 4,
      name: "Bina Magar",
      property: "Single Room - Lalitpur",
      date: "2025-04-18",
      status: "Approved",
      contact: "9801122334",
      price: "Rs. 10,000",
    },
  ]);

  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setToastVisible] = useState(false);

  const handleApprove = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status: "Approved" } : req
      )
    );
    setToastMessage("Booking approved!");
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const handleReject = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status: "Rejected" } : req
      )
    );
    setToastMessage("Booking rejected!");
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const handleRemove = (id) => {
    setRequests((prevRequests) =>
      prevRequests.filter((req) => req.id !== id)
    );
  };

  return (
    <div className="min-h-screen font-body bg-gray-100 text-[#594E4E]">
      <LandlordNavbar />

      <div className="flex">
        <LandlordSidebar />

        <main className="flex-1 p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">🔔 Booking Requests</h2>

          {requests.length === 0 ? (
            <p className="text-xl text-gray-600">No booking requests at the moment.</p>
          ) : (
            <div className="space-y-6">
              {requests.map((req) => (
                <div
                  key={req.id}
                  className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
                    req.status === "Pending" ? "animate-fadeIn" : "animate-fadeOut"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-gray-800">{req.property}</h3>
                    <span
                      className={`px-4 py-2 text-white rounded-full ${
                        req.status === "Pending"
                          ? "bg-yellow-500"
                          : req.status === "Approved"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {req.status}
                    </span>
                  </div>
                  <p className="mt-2 text-lg"><strong>Tenant:</strong> {req.name}</p>
                  <p className="text-lg"><strong>Booking Date:</strong> {req.date}</p>
                  <p className="text-lg"><strong>Contact:</strong> {req.contact}</p>
                  <p className="text-lg"><strong>Price:</strong> {req.price}</p>

                  <div className="mt-4 flex space-x-4">
                    <button
                      onClick={() => {
                        handleApprove(req.id);
                        handleRemove(req.id);
                      }}
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => {
                        handleReject(req.id);
                        handleRemove(req.id);
                      }}
                      className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-200"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Toast Notification */}
      {isToastVisible && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md">
          <p>{toastMessage}</p>
        </div>
      )}
    </div>
  );
}

export default BookingL;
