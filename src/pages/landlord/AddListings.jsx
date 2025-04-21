import React, { useState } from 'react';
import LandlordNavbar from '../../Components/LandlordNavbar';
import LandlordSidebar from '../../Components/LandlordSidebar';

function AddListing() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    type: '',
    description: '',
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      const file = files[0];
      setFormData({ ...formData, image: file });

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Listing:', formData);

    setFormData({
      title: '',
      price: '',
      type: '',
      description: '',
      image: null,
    });
    setPreview(null);
    alert('Listing submitted successfully!');
  };

  return (
    <div className="min-h-screen text-[#594E4E] font-body">
      <LandlordNavbar />

      <div className="flex">
        <LandlordSidebar />

        <main className="flex-1 flex justify-center items-center min-h-[calc(100vh-64px)] p-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md space-y-4 w-full max-w-2xl"
          >
            <h1 className="text-2xl font-bold text-center mb-2">➕ Add New Listing</h1>

            <div>
              <label className="block font-semibold mb-1">Property Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Apartment in Kathmandu"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Price (Rs/month)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="e.g., 15000"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Property Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">-- Select Type --</option>
                <option value="Room">Room</option>
                <option value="Flat">Flat</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Describe the property, location, and features..."
              ></textarea>
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
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-3 h-48 w-full object-cover rounded-lg"
                />
              )}
            </div>

            <button
              type="submit"
              className="bg-[#594E4E] text-white px-6 py-2 rounded hover:opacity-90 transition duration-200 w-full"
            >
              Submit Listing
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default AddListing;
