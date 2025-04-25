import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import TenantSidebar from "../../Components/TenantSidebar";

function Settings() {
  const [email, setEmail] = useState("rojans033@gmail.com");
  const [phone, setPhone] = useState("9828988214");
  const [password, setPassword] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleSave = () => {
    alert("Settings saved!");
    setPassword("");
  };

  return (
    <div className="min-h-screen font-body text-[#594E4E]">
      <Navbar />
      <div className="flex">
        <TenantSidebar />
        <main className="flex-1 p-6 bg-white">
          <h2 className="text-2xl font-bold mb-6">⚙️ Settings</h2>
          <div className="bg-gray-100 p-6 rounded-lg max-w-xl space-y-5">
            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">📧 Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 font-medium">📱 Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium">🔐 Change Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="New password"
              />
            </div>

            {/* Email Notifications Toggle */}
            <div className="flex items-center justify-between">
              <span>🔔 Email Notifications</span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={emailNotifications}
                  onChange={() => setEmailNotifications(!emailNotifications)}
                />
                <div className={`w-11 h-6 rounded-full ${emailNotifications ? "bg-green-500" : "bg-gray-300"} relative`}>
                  <div
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transform transition ${
                      emailNotifications ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>

        

            {/* Save Button */}
            <button
              onClick={handleSave}
              className="mt-4 bg-[#594E4E] text-white px-6 py-2 rounded hover:opacity-90"
            >
              Save Changes
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Settings;
