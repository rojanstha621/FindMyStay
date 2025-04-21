import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import tenantProfile from '../../assets/tenantProfile.png'

function Profile() {
  const [formData, setFormData] = useState({
    name: "Rojan Shrestha",
    email: "rojanstha621@gmail.com",
    phone: "9828988214",
    address: "kathmandu, Nepal",
    profileImage: tenantProfile,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profileImage") {
      const file = files[0];
      setFormData({ ...formData, profileImage: file });

      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      setError("Please fill in all required fields.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("✅ Profile updated successfully!");

    // Simulate saving data
    console.log("Profile Data:", formData);
  };

  return (
    <div className="min-h-screen text-[#594E4E] font-body">
      <Navbar />

      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">👤 Your Profile</h2>

        {error && <p className="text-red-600 mb-4 font-medium">{error}</p>}
        {success && <p className="text-green-600 mb-4 font-medium">{success}</p>}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md space-y-6"
        >
          {/* Profile Image */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="flex items-center justify-center h-full text-sm text-gray-500">
                  No image
                </span>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-1">Upload Profile Picture</label>
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={handleChange}
                className="text-sm"
              />
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="9800000000"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Your full address"
              rows={3}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#594E4E] text-white px-6 py-2 rounded hover:opacity-90 transition duration-200"
          >
            Update Profile
          </button>
        </form>
      </main>
    </div>
  );
}

export default Profile;
