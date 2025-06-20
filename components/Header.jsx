// components/Header.jsx
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom"; // ✅ CHANGED: Use NavLink for nav highlighting
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ REUSABLE CLASS FUNCTION
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-pink-600 underline underline-offset-4"
      : "text-gray-700 hover:text-pink-600 transition";

  return (
    <header className="bg-white shadow-md">
      {/* ✅ Top Row */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* ✅ Mobile menu toggle icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ✅ Search Icon (Desktop only) */}
        <div className="hidden md:block">
          <Search className="w-6 h-6 text-gray-600" />
        </div>

        {/* ✅ Logo - always centered */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://jays-closet-official1-backend.onrender.com/images/logo7.png"
            alt="JAYS-CLOSET Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* ✅ Right icons - Profile + Cart (Desktop only) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <User className="w-6 h-6 text-gray-600" />
          </Link>
          <ShoppingCart className="w-6 h-6 text-gray-600" />
        </div>

        {/* ✅ Mobile right-side icons */}
        <div className="md:hidden flex items-center space-x-4">
          <Search className="w-6 h-6 text-gray-600" />
          <ShoppingCart className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* ✅ Nav Links */}
      <nav className={`bg-pink-50 py-2 ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:space-x-4 text-sm font-medium px-4">
          {/* ✅ CHANGED: All nav items now use NavLink with active styling */}
          <li><NavLink to="/trousers" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Trousers</NavLink></li>
          <li><NavLink to="/dresses" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Dresses</NavLink></li>
          <li><NavLink to="/shoes" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Shoes</NavLink></li>
          <li><NavLink to="/bags" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Bags</NavLink></li>
          <li><NavLink to="/sweaters" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Sweaters</NavLink></li>
          <li><NavLink to="/scarfs" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Scarfs</NavLink></li>
          <li><NavLink to="/panties" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Panties</NavLink></li>
          <li><NavLink to="/trench-coats" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Trench Coats</NavLink></li>
          <li><NavLink to="/skirt-suits" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Skirt Suits</NavLink></li>
          <li><NavLink to="/dress-suits" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Dress Suits</NavLink></li>
          <li><NavLink to="/towels" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Towels</NavLink></li>
          <li><NavLink to="/stockings" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Stockings</NavLink></li>
          <li><NavLink to="/trouser-suits" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Trouser Suits</NavLink></li>
          <li><NavLink to="/puffy-jackets" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Puffy Jackets</NavLink></li>
        </ul>

        {/* ✅ Mobile-only Login Link - CHANGED to NavLink */}
        <div className="md:hidden bg-pink-100 px-4 py-3 flex items-center space-x-2">
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
        </div>
      </nav>
    </header>
  );
}
