// pages/Login.jsx
import React, { useState } from "react";
import { User, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Login to JAYS-CLOSET</h2>

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

        {/* Submit Button */}
        <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition">
          Log In
        </button>

        {/* Signup redirect */}
        <p className="text-sm text-center text-gray-600 mt-4">
        Don't have an account?{" "}
        <Link to="/signup" className="text-pink-600 hover:underline font-medium">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
