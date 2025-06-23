// pages/Login.jsx
import React, { useState } from "react";
import { User, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // ✅ import the toast function

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Handle login logic
  async function handleLogin(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(
        "https://jays-closet-official1-backend.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("jays_token", data.token);
        localStorage.setItem("jays_user", JSON.stringify(data.user)); // ✅ Store user info // ✅ Store token (or user info)
        toast.success("Logged in successfully!");        // ✅ Show success toast
        navigate("/dashboard");                                  // ✅ Redirect to homepage or dashboard
      } else {
        toast.error(data.error || "Invalid email or password."); // ✅ Show error from server
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Server error. Please try again.");    // ✅ Show catch error
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
          Login to JAYS-CLOSET
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <User className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="email"
              className="flex-1 outline-none text-sm"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <Lock className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="password"
              className="flex-1 outline-none text-sm"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

         {/* ✅ Forgot password link here */}
        <div className="text-right">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-semibold py-2 rounded-md transition
            ${loading ? "bg-pink-300 cursor-not-allowed" : "bg-pink-600 hover:bg-pink-700"}`}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

        {/* Redirect to signup */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-pink-600 hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
