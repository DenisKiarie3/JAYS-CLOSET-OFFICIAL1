// pages/ForgotPassword.jsx
import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");          // 🔹 State to store entered email
  const [message, setMessage] = useState("");      // 🔹 Message to show success or error
  const [loading, setLoading] = useState(false);   // 🔹 Loading state for UI feedback

  const handleSubmit = async (e) => {
    e.preventDefault();                            // 🔹 Prevent page reload

    setLoading(true);                              // 🔹 Show loading spinner or state
    setMessage("");                                // 🔹 Clear any previous messages

    try {
      const res = await fetch("https://jays-closet-official1-backend.onrender.com/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",      // 🔹 Tell server we're sending JSON
        },
        body: JSON.stringify({ email }),            // 🔹 Send email in body
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Reset link sent! Check your email.");
      } else {
        setMessage(`❌ ${data.error || "Failed to send reset link."}`);
      }
    } catch (err) {
      setMessage("❌ Server error. Please try again later.");
    }

    setLoading(false);                             // 🔹 Stop loading state
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Forgot Password</h2>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium">Enter your email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}     // 🔹 Update state on typing
          className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
          required
        />

        <button
          type="submit"
          disabled={loading}                              // 🔹 Disable while loading
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>

      {message && (                                    // 🔹 Show success/error messages
        <p className="mt-4 text-sm text-center text-gray-700">{message}</p>
      )}
    </div>
  );
}
