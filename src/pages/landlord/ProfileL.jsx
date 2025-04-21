import React, { useState } from "react";
import LandlordNavbar from "../../Components/LandlordNavbar";
import LandlordSidebar from "../../Components/LandlordSidebar";
import landlordProfile from "../../assets/landlordProfile.png"; // Replace with actual image

function Profile() {
  const [formData, setFormData] = useState({
    name: "Rojan Lama",
    email: "rojanlama@example.com",
    phone: "9801234567",
    address: "Patan, Lalitpur, Nepal",
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
    console.log("Landlord Profile:", formData);
  };

  return (
    <div className="min-h-screen font-body text-[#594E4E] flex flex-col">
      <LandlordNavbar />

      <div className="flex flex-1">
        <LandlordSidebar />

        <main className="flex-1 p-6 flex justify-center items-center min-h-[calc(100vh-4rem)]">
          <div className="w-full max-w-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center">👤 Landlord Profile</h2>

            {error && <p className="text-red-600 mb-4 font-medium text-center">{error}</p>}
            {success && <p className="text-green-600 mb-4 font-medium text-center">{success}</p>}

            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md p-6 rounded-xl space-y-6"
            >
              {/* Profile Image Upload */}
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <img
                      src={formData.profileImage}
                      alt="Current"
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Upload Profile Picture
                  </label>
                  <input
                    type="file"
                    name="profileImage"
                    accept="image/*"
                    onChange={handleChange}
                    className="text-sm"
                  />
                </div>
              </div>

              {/* Full Name */}
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
          </div>
        </main>
      </div>
    </div>
  );
}

export default Profile;
