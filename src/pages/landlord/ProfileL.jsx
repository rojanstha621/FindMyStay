import React, { useState } from "react";
import LandlordNavbar from "../../Components/LandlordNavbar";
import LandlordFooter from "../../Components/Footer"; // (added footer to match tenant style)
import landlordProfile from "../../assets/landlordProfile.png";

function LandlordProfile() {
  const [formData, setFormData] = useState({
    name: "Gharbeti Dada",
    email: "gharbeti@gmail.com",
    phone: "9828988214",
    address: "kathmandu, Nepal",
    profileImage: landlordProfile,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profileImage" && files.length > 0) {
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
      setError("⚠️ Please fill in all required fields.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("✅ Profile updated successfully!");

    console.log("Updated Landlord Profile:", formData);
  };

  return (
    <div className="min-h-screen text-[#594E4E] font-body bg-gray-50">
      <LandlordNavbar />

      <main className="max-w-5xl mx-auto p-6">
        {/* Profile Preview Card */}
        <section className="bg-white p-6 rounded-xl shadow-md flex items-center gap-8 mb-10">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
            <img
              src={previewImage || formData.profileImage}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{formData.name}</h2>
            <p className="text-gray-600">{formData.email}</p>
            <p className="text-gray-600">{formData.phone}</p>
            <p className="text-gray-600">{formData.address}</p>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h3 className="text-2xl font-semibold mb-4">✏️ Update Your Information</h3>

          {error && <div className="bg-red-100 text-red-700 p-3 rounded">{error}</div>}
          {success && <div className="bg-green-100 text-green-700 p-3 rounded">{success}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Image Upload */}
            <div>
              <label className="block font-semibold mb-2">Profile Picture</label>
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={handleChange}
                className="text-sm"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Enter full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Enter email address"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold mb-2">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Enter phone number"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block font-semibold mb-2">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Enter full address"
                rows={3}
              />
            </div>

            {/* Save Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-[#594E4E] hover:bg-[#453C3C] text-white px-8 py-3 rounded text-lg transition duration-300"
              >
                Save Changes
              </button>
            </div>
          </form>
        </section>
      </main>

      <LandlordFooter />
    </div>
  );
}

export default LandlordProfile;
