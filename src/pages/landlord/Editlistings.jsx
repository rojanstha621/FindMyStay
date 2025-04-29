import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LandlordNavbar from "../../Components/LandlordNavbar";
import LandlordSidebar from "../../Components/LandlordSidebar";
import Footer from "../../Components/Footer";

const EditListing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { listing } = location.state || {};

  const [formData, setFormData] = useState({
    id: listing?.id || "",
    title: listing?.title || "",
    price: listing?.price || "",
    image: listing?.image || null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Listing updated successfully!");
    navigate("/landlord/my-listings");
  };

  return (
    <div className="min-h-screen bg-white font-body text-[#594E4E]">
      <LandlordNavbar />
      <div className="flex">
        <LandlordSidebar />

        <main className="flex-1 p-6 flex justify-center items-start">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md space-y-4 w-full max-w-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">✏️ Edit Listing</h2>

            <div>
              <label className="block font-semibold mb-1">Property Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Price (Rs/month)</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Upload Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="mt-3 h-48 w-full object-cover rounded-lg"
                />
              )}
            </div>

            <button
              type="submit"
              className="bg-[#594E4E] text-white px-6 py-2 rounded hover:opacity-90 transition duration-200 w-full"
            >
              Update Listing
            </button>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default EditListing;
