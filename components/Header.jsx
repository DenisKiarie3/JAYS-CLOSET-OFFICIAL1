import React, { useState, useEffect } from "react"; // ✅ UPDATED
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("jays_token");

  const [user, setUser] = useState(null); // ✅ NEW

  // ✅ Load user info from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("jays_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-pink-600 underline underline-offset-4"
      : "text-gray-700 hover:text-pink-600 transition";

  return (
    <header className="bg-white shadow-md">
      {/* ✅ Top Row */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop search icon */}
        <div className="hidden md:block">
          <Search className="w-6 h-6 text-gray-600" />
        </div>

        {/* Logo */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://jays-closet-official1-backend.onrender.com/images/logo7.png"
            alt="JAYS-CLOSET Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* Desktop right-side */}
        <div className="hidden md:flex items-center space-x-4">
          {/* ✅ Show user greeting if logged in */}
          {token && user && (
            <span className="text-sm text-gray-600 font-medium">
              Hello, {user.name.split(" ")[0]}
            </span>
          )}
          {token ? (
            <button
              onClick={() => {
                localStorage.removeItem("jays_token");
                localStorage.removeItem("jays_user"); // ✅ clear user too
                navigate("/login");
              }}
              className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-700 transition"
              title="Logout"
            >
              <User className="w-5 h-5" />
              <span className="hidden md:inline">Logout</span>
            </button>
          ) : (
            <Link to="/login">
              <User className="w-6 h-6 text-gray-600" />
            </Link>
          )}
          <ShoppingCart className="w-6 h-6 text-gray-600" />
        </div>

        {/* Mobile right-side icons */}
        <div className="md:hidden flex items-center space-x-4">
          <Search className="w-6 h-6 text-gray-600" />
          <ShoppingCart className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Nav links */}
      <nav className={`bg-pink-50 py-2 ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:space-x-4 text-sm font-medium px-4">
          {[
            "trousers", "dresses", "shoes", "bags", "sweaters", "scarfs", "panties",
            "trench-coats", "skirt-suits", "dress-suits", "towels", "stockings",
            "trouser-suits", "puffy-jackets"
          ].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item}`}
                className={navLinkStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ✅ Mobile-only login/logout */}
        <div className="md:hidden bg-pink-100 px-4 py-3 flex items-center space-x-2">
          {token ? (
            <button
              onClick={() => {
                localStorage.removeItem("jays_token");
                localStorage.removeItem("jays_user"); // ✅ clear user too
                setIsMenuOpen(false);
                navigate("/login");
              }}
              className="flex items-center space-x-2 text-sm font-medium text-red-600 hover:text-red-700 transition"
              title="Logout"
            >
              <User className="w-5 h-5" />
              <span>Logout</span>
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-sm font-medium ${
                  isActive ? "text-pink-600 underline underline-offset-2" : "text-gray-700"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="w-5 h-5" />
              <span>Log in</span>
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}
