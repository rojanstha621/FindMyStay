import React, { useState } from "react";
import LandlordNavbar from "../../Components/LandlordNavbar";
import LandlordSidebar from "../../Components/LandlordSidebar";

function LandlordPayments() {
  // State for payments
  const [payments, setPayments] = useState([
    {
      tenant: "Sita Sharma",
      amount: "Rs. 15,000",
      status: "Paid",
      date: "2025-04-01",
      property: "1BHK Apartment - Kathmandu",
    },
    {
      tenant: "Ram Karki",
      amount: "Rs. 25,000",
      status: "Pending",
      date: "2025-04-10",
      property: "Lakeview Apartment - Pokhara",
    },
    {
      tenant: "Bina Magar",
      amount: "Rs. 12,000",
      status: "Paid",
      date: "2025-03-25",
      property: "Single Room - Lalitpur",
    },
    {
      tenant: "Ankit Thapa",
      amount: "Rs. 20,000",
      status: "Pending",
      date: "2025-04-05",
      property: "Luxury Flat - Lalitpur",
    },
    {
      tenant: "Aarati Gurung",
      amount: "Rs. 18,000",
      status: "Paid",
      date: "2025-03-30",
      property: "3BHK - Pokhara",
    },
  ]);

  // Handle status change
  const handleStatusChange = (tenantName) => {
    setPayments((prevPayments) =>
      prevPayments.map((payment) =>
        payment.tenant === tenantName
          ? { ...payment, status: payment.status === "Paid" ? "Pending" : "Paid" }
          : payment
      )
    );
  };

  return (
    <div className="min-h-screen font-body text-[#594E4E]">
      <LandlordNavbar />
      <div className="flex">
        <LandlordSidebar />
        <main className="p-6 w-full">
          <h1 className="text-2xl font-bold mb-4">💸 Payment Tracking</h1>
          <div className="overflow-x-auto bg-white p-4 rounded-xl shadow">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="border-b text-[#594E4E] font-semibold">
                  <th className="py-3 px-4">Tenant</th>
                  <th className="py-3 px-4">Property</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{payment.tenant}</td>
                    <td className="py-2 px-4">{payment.property}</td>
                    <td className="py-2 px-4">{payment.amount}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          payment.status === "Paid"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">{payment.date}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleStatusChange(payment.tenant)}
                        className={`px-4 py-2 rounded-md ${
                          payment.status === "Paid" ? "bg-yellow-500" : "bg-green-500"
                        } text-white hover:bg-opacity-80 transition-all`}
                      >
                        {payment.status === "Paid" ? "Mark Pending" : "Mark Paid"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LandlordPayments;
