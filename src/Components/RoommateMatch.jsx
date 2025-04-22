import React, { useState } from "react";

const RoommateMatch = ({ onClose }) => {
  const [formData, setFormData] = useState({
    gender: "",
    budget: "",
    location: "",
    cleanliness: "",
    smoking: "",
    sleepSchedule: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
  };

  return (
    <div className="fixed bottom-20 right-6 w-96 bg-white shadow-lg rounded-xl p-5 z-50 max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold">👯 Roommate Finder</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-black text-xl">&times;</button>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-3 text-sm">
          <div>
            <label className="block font-medium">Preferred Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select</option>
              <option value="any">Any</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Monthly Budget (NPR)</label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="e.g. 8000"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Preferred Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="e.g. Kathmandu, Lalitpur"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Cleanliness Level</label>
            <select
              name="cleanliness"
              value={formData.cleanliness}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select</option>
              <option value="very_clean">Very Clean</option>
              <option value="moderate">Moderate</option>
              <option value="messy">Messy</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Smoking Preference</label>
            <select
              name="smoking"
              value={formData.smoking}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select</option>
              <option value="no">No Smoking</option>
              <option value="yes">Okay with Smoking</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Pet</label>
            <select
              name="sleepSchedule"
              value={formData.sleepSchedule}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select</option>
              <option value="doggy">Doddy</option>
              <option value="cat">Cat</option>
              <option value="lion">Lion</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#594E4E] text-white py-2 px-4 rounded hover:opacity-90"
          >
            Find Matches
          </button>
        </form>
      ) : (
        <div className="text-sm">
          <p className="text-green-600 font-medium">✅ Match request submitted!</p>
          <p className="mt-2">We’ll notify you once we find a compatible roommate.</p>
          <button
            onClick={onClose}
            className="mt-4 w-full bg-[#594E4E] text-white py-2 px-4 rounded hover:opacity-90"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default RoommateMatch;
