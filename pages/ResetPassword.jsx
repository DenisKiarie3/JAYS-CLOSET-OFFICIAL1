// pages/ResetPassword.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  // ✅ Extract token from URL using useParams
  const { token } = useParams();
  const navigate = useNavigate();

  // ✅ State for the new password input
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form reload
    setMessage("Resetting...");

    try {
      const res = await fetch(`https://jays-closet-official1-backend.onrender.com/api/auth/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Password reset successful! Redirecting to login...");
        setTimeout(() => navigate("/login?reset=success"), 2000); // ✅ include query param
      } else {
        setMessage(`❌ ${data.error || "Reset failed"}`);
      }
    } catch (err) {
      setMessage("❌ Server error. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-pink-600">Reset Your Password</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ✅ New password input */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter new password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded"
          >
            Reset Password
          </button>
        </form>

        {/* ✅ Show feedback */}
        {message && <p className="mt-4 text-sm text-center text-gray-700">{message}</p>}
      </div>
    </div>
  );
}
