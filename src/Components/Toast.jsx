import React from "react";

const Toast = ({ message, type = "success", onClose }) => {
  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  }[type];

  return (
    <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50`}>
      {message}
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 underline text-white hover:text-gray-100"
        >
          Close
        </button>
      )}
    </div>
  );
};

export default Toast;
