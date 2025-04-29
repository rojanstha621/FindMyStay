import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import TenantSidebar from "../../Components/TenantSidebar";
import Footer from "../../Components/Footer";

function Settings() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("rojans033@gmail.com");
  const [phone, setPhone] = useState("9828988214");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDeleteAccount = () => {
    setShowDeleteConfirm(false);
    setSuccessMessage("⚠️ Your account has been scheduled for deletion.");

    setTimeout(() => {
      setSuccessMessage("");
      navigate("/");
    }, 2000);
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => phone.length >= 8 && phone.length <= 15;

  const handleSave = () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!validatePhone(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }
    if (password && password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setSuccessMessage("✅ Settings saved successfully!");
    setPassword("");
    setConfirmPassword("");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="min-h-screen font-body bg-brand-bg text-[#594E4E]">
      <Navbar />
      <div className="flex">
        <TenantSidebar />
        <main className="flex-1 p-6 bg-white transition-colors duration-200">
          <h2 className="text-3xl font-bold mb-8">⚙️ Settings</h2>

          {successMessage && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg shadow">
              {successMessage}
            </div>
          )}

          {/* Delete Account Button */}
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="absolute top-45 right-7 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-xl shadow-lg transition-all"
          >
            Delete Account
          </button>

          {/* Profile Info Section */}
          <section className="bg-white p-6 rounded-xl shadow mb-8">
            <h3 className="text-xl font-semibold mb-4">👤 Profile Information</h3>
            <div className="space-y-5">
              <div>
                <label className="block mb-1 font-medium">📧 Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <p className="text-xs text-gray-500 mt-1">We’ll never share your email.</p>
              </div>

              <div>
                <label className="block mb-1 font-medium">📱 Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <p className="text-xs text-gray-500 mt-1">Add a number where we can reach you.</p>
              </div>
            </div>
          </section>

          {/* Security Settings Section */}
          <section className="bg-white p-6 rounded-xl shadow mb-8">
            <h3 className="text-xl font-semibold mb-4">🔐 Security Settings</h3>
            <div className="space-y-5">
              <div>
                <label className="block mb-1 font-medium">New Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter new password"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Confirm password"
                />
              </div>

              {/* Two-Factor Authentication Toggle */}
              <div className="flex items-center justify-between pt-4">
                <span>Two-Factor Authentication</span>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={twoFactorAuth}
                    onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                  />
                  <div className={`w-11 h-6 rounded-full transition ${twoFactorAuth ? "bg-green-500" : "bg-gray-300"} relative`}>
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition transform ${twoFactorAuth ? "translate-x-full" : ""}`}></div>
                  </div>
                </label>
              </div>
            </div>
          </section>

          {/* Preferences Section */}
          <section className="bg-white p-6 rounded-xl shadow mb-8">
            <h3 className="text-xl font-semibold mb-4">🔔 Notification Preferences</h3>
            <div className="space-y-5">
              {/* Email Notifications */}
              <div className="flex items-center justify-between">
                <span>Email Notifications</span>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={emailNotifications}
                    onChange={() => setEmailNotifications(!emailNotifications)}
                  />
                  <div className={`w-11 h-6 rounded-full transition ${emailNotifications ? "bg-green-500" : "bg-gray-300"} relative`}>
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition transform ${emailNotifications ? "translate-x-full" : ""}`}></div>
                  </div>
                </label>
              </div>

              {/* SMS Notifications */}
              <div className="flex items-center justify-between">
                <span>SMS Notifications</span>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={smsNotifications}
                    onChange={() => setSmsNotifications(!smsNotifications)}
                  />
                  <div className={`w-11 h-6 rounded-full transition ${smsNotifications ? "bg-green-500" : "bg-gray-300"} relative`}>
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition transform ${smsNotifications ? "translate-x-full" : ""}`}></div>
                  </div>
                </label>
              </div>
            </div>
          </section>

          {/* Privacy Section */}
          <section className="bg-white p-6 rounded-xl shadow mb-8">
            <h3 className="text-xl font-semibold mb-4">🔒 Privacy Settings</h3>
            <div className="flex items-center justify-between">
              <span>Show My Profile to Others</span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={profileVisibility}
                  onChange={() => setProfileVisibility(!profileVisibility)}
                />
                <div className={`w-11 h-6 rounded-full transition ${profileVisibility ? "bg-green-500" : "bg-gray-300"} relative`}>
                  <div className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition transform ${profileVisibility ? "translate-x-full" : ""}`}></div>
                </div>
              </label>
            </div>
          </section>

          {/* Save Changes Button */}
          <div className="mt-8 flex justify-left">
            <button
              onClick={handleSave}
              className=" bg-[#594E4E] hover:bg-[#473b3b] text-white px-8 py-3 rounded-xl shadow-lg transition-all  "
            >
              Save Changes
            </button>
          </div>

          {/* Delete Confirmation Modal */}
          {showDeleteConfirm && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-8 rounded-xl shadow-xl text-center max-w-sm space-y-5">
                <h2 className="text-2xl font-bold text-red-600">Are you sure?</h2>
                <p className="text-gray-600">This action cannot be undone. Your account and all data will be permanently deleted.</p>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleDeleteAccount}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
                  >
                    Yes, Delete
                  </button>
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-black px-5 py-2 rounded-xl transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Settings;
