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
    location: '',
    features: [],
    disability: [],
  });

  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const propertyTypeFeatures = {
    room: ['Studio', 'High-Speed WiFi'],
    apartment: ['1 Bedroom', '1 Bathroom', 'Balcony', 'Furnished', 'Kitchen', 'Parking Space'],
    house: ['3 Bedrooms', '2 Bathrooms', 'Garden', 'Garage'],
  };

  const disabilityFeatures = ['Wheelchair Accessible', 'Elevator'];

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (name === 'image' && files.length > 0) {
      const file = files[0];
      setFormData({ ...formData, image: file });

      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else if (type === 'checkbox') {
      if (name === 'features' || name === 'disability') {
        setFormData({
          ...formData,
          [name]: checked
            ? [...formData[name], value]
            : formData[name].filter((item) => item !== value),
        });
      }
    } else if (type === 'select-multiple') {
      const options = [...e.target.selectedOptions].map((option) => option.value);
      setFormData({ ...formData, [name]: options });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    if (!formData.title || !formData.price || !formData.type || !formData.location) {
      setErrorMessage('All fields are required!');
      return false;
    }
    if (formData.price <= 0) {
      setErrorMessage('Price must be a positive number!');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setTimeout(() => {
      console.log('Submitted Listing:', formData);
      setFormData({
        title: '',
        price: '',
        type: '',
        description: '',
        image: null,
        location: '',
        features: [],
        disability: [],
      });
      setPreview(null);
      setIsLoading(false);
      alert('Listing submitted successfully!');
    }, 1000); // Simulate submission delay
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

            {errorMessage && <div className="text-red-600 text-center mb-2">{errorMessage}</div>}

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
                <option value="room">Room</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
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
              <label className="block font-semibold mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="e.g., Kathmandu, Nepal"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Features</label>
              <select
                name="features"
                value={formData.features}
                onChange={handleChange}
                multiple
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                {propertyTypeFeatures[formData.type]?.map((feature) => (
                  <option key={feature} value={feature}>
                    {feature}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Disability Features</label>
              <select
                name="disability"
                value={formData.disability}
                onChange={handleChange}
                multiple
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                {disabilityFeatures.map((disability) => (
                  <option key={disability} value={disability}>
                    {disability}
                  </option>
                ))}
              </select>
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
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit Listing'}
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default AddListing;
