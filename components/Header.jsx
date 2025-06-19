// components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ For SPA navigation
import { Menu, X, Search, User, ShoppingCart } from "lucide-react"; // ✅ Icons

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ Toggle mobile nav

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

      {/* ✅ Nav Links (Always visible on desktop, collapsible on mobile) */}
      <nav className={`bg-pink-50 py-2 ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:space-x-4 text-sm font-medium text-gray-700 px-4">
          <li><Link to="/trousers">Trousers</Link></li>
          <li><Link to="/dresses">Dresses</Link></li>
          <li><Link to="/shoes">Shoes</Link></li>
          <li><Link to="/bags">Bags</Link></li>
          <li><Link to="/sweaters">Sweaters</Link></li>
          <li><Link to="/scarfs">Scarfs</Link></li>
          <li><Link to="/panties">Panties</Link></li>
          <li><Link to="/trench-coats">Trench Coats</Link></li>
          <li><Link to="/skirt-suits">Skirt Suits</Link></li>
          <li><Link to="/dress-suits">Dress Suits</Link></li>
          <li><Link to="/towels">Towels</Link></li>
          <li><Link to="/stockings">Stockings</Link></li>
          <li><Link to="/trouser-suits">Trouser Suits</Link></li>
          <li><Link to="/puffy-jackets">Puffy Jackets</Link></li>
        </ul>
        {/* ✅ Mobile-only Login Section below nav links */}
        <div className="md:hidden bg-pink-100 px-4 py-3 flex items-center space-x-2">
          <Link to="/login" className="flex items-center space-x-2 text-sm font-medium text-gray-700">
            <User className="w-5 h-5" />
            <span>Log in</span>
          </Link>

        </div>
      </nav>
    </header>
  );
}
