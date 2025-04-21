import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import landlordIcon from "../assets/landlord.png";
import tenantIcon from "../assets/tenant.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password || !role) {
      setError("All fields are required!");
      return;
    }

    // Simulate successful login
    if (role === "landlord") {
      navigate("/landlordDashboard");
    } else {
      navigate("/tenantDashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="mb-4">
          <p className="mb-2 font-semibold">Login as:</p>
          <div className="flex space-x-4 justify-center">
            <div
              onClick={() => setRole("landlord")}
              className={`cursor-pointer p-3 border rounded-lg ${
                role === "landlord" ? "border-[#594E4E]" : "border-gray-300"
              }`}
            >
              <img src={landlordIcon} alt="Landlord" className="h-10 mx-auto" />
              <p className="text-center mt-1">Landlord</p>
            </div>
            <div
              onClick={() => setRole("tenant")}
              className={`cursor-pointer p-3 border rounded-lg ${
                role === "tenant" ? "border-[#594E4E]" : "border-gray-300"
              }`}
            >
              <img src={tenantIcon} alt="Tenant" className="h-10 mx-auto" />
              <p className="text-center mt-1">Tenant</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-[#594E4E] text-white p-2 rounded hover:opacity-90"
        >
          Login
        </button>

        <div className="text-sm text-center mt-4">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>

        <div className="text-sm text-center mt-2">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
