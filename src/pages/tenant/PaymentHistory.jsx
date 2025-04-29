import React, { useState, useMemo, useCallback } from "react";
import Navbar from "../../Components/Navbar";
import TenantSidebar from "../../Components/TenantSidebar";
import Footer from "../../Components/Footer";


function PaymentHistory() {
  // Sample payment data with tenant names
  const payments = [
    { id: 1, date: "2025-04-01", amount: "Rs. 15,000", status: "Paid", tenantName: "John Doe", receiptUrl: "/receipts/receipt1.pdf" },
    { id: 2, date: "2025-03-01", amount: "Rs. 20,000", status: "Paid", tenantName: "Jane Smith", receiptUrl: "/receipts/receipt2.pdf" },
    { id: 3, date: "2025-02-01", amount: "Rs. 17,000", status: "Overdue", tenantName: "Sam Brown", receiptUrl: null },
    { id: 4, date: "2025-01-01", amount: "Rs. 30,000", status: "Paid", tenantName: "Lily White", receiptUrl: "/receipts/receipt4.pdf" },
    { id: 5, date: "2024-12-01", amount: "Rs. 23,000", status: "Paid", tenantName: "Michael Green", receiptUrl: "/receipts/receipt5.pdf" },
    { id: 6, date: "2024-11-01", amount: "Rs. 26,000", status: "Overdue", tenantName: "Olivia Black", receiptUrl: null },
  ];

  // Filters and pagination state
  const [statusFilter, setStatusFilter] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const paymentsPerPage = 5;

  // Filtered payments using useMemo
  const filteredPayments = useMemo(() => {
    return payments.filter((p) => {
      const matchStatus =
        statusFilter === "All" || p.status === statusFilter;
      const matchFrom = !fromDate || new Date(p.date) >= new Date(fromDate);
      const matchTo = !toDate || new Date(p.date) <= new Date(toDate);
      return matchStatus && matchFrom && matchTo;
    });
  }, [payments, statusFilter, fromDate, toDate]);

  const totalPages = Math.ceil(filteredPayments.length / paymentsPerPage);
  
  // Ensure current page is within bounds
  const currentPayments = useMemo(() => {
    return filteredPayments.slice(
      (currentPage - 1) * paymentsPerPage,
      currentPage * paymentsPerPage
    );
  }, [filteredPayments, currentPage]);

  // Export to CSV using useCallback
  const handleExport = useCallback(() => {
    const rows = [
      ["ID", "Date", "Amount", "Tenant Name", "Status"],
      ...filteredPayments.map((p) => [p.id, p.date, p.amount, p.tenantName, p.status]),
    ];
    const csvContent =
      "data:text/csv;charset=utf-8," +
      rows.map((r) => r.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "payment_history.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [filteredPayments]);

  return (
    <div className="min-h-screen font-body bg-brand-bg text-[#594E4E]">
      <Navbar />
      <div className="flex">
        <TenantSidebar />
        <main className="flex-1 p-6 bg-white transition-colors duration-200">
          <h2 className="text-2xl font-bold mb-4">💳 Payment History</h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6 items-end">
            {/* Status Filter */}
            <div>
              <label className="block mb-1 text-sm font-medium">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1); // Reset page on filter change
                }}
                className="border p-2 rounded"
              >
                <option value="All">All</option>
                <option value="Paid">Paid</option>
                <option value="Overdue">Overdue</option>
              </select>
            </div>
            {/* Date Range Filters */}
            <div>
              <label className="block mb-1 text-sm font-medium">From</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => {
                  setFromDate(e.target.value);
                  setCurrentPage(1); // Reset page on filter change
                }}
                className="border p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">To</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => {
                  setToDate(e.target.value);
                  setCurrentPage(1); // Reset page on filter change
                }}
                className="border p-2 rounded"
              />
            </div>
            {/* Export Button */}
            <button
              onClick={handleExport}
              className="ml-auto bg-[#594E4E] text-white px-4 py-2 rounded hover:opacity-90 transition"
            >
              Export CSV
            </button>
          </div>

          {/* List */}
          {filteredPayments.length === 0 ? (
            <p className="text-gray-500">No payments match your filters.</p>
          ) : (
            <div className="space-y-4">
              {currentPayments.map((p) => (
                <div
                  key={p.id}
                  className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">{p.amount}</h3>
                      <p className="text-sm text-gray-600">Tenant: {p.tenantName}</p>
                      <p className="text-sm text-gray-600 text-gray-300">
                        Date: {p.date}
                      </p>
                    </div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs ${
                        p.status === "Paid"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                  {p.receiptUrl ? (
                    <a
                      href={p.receiptUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-blue-600 hover:underline"
                    >
                      View Receipt
                    </a>
                  ) : (
                    <p className="mt-3 text-sm text-red-600">
                      Receipt unavailable
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-6 flex justify-center space-x-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50 bg-[#594E4E] text-white hover:opacity-90"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1
                      ? "bg-[#594E4E] text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50 bg-[#594E4E] text-white hover:opacity-90"
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentHistory;
