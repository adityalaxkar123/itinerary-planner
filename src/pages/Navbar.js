import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Logo</Link>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
          <Link to="/signup" className="text-white hover:text-gray-300">Signup</Link>
          <Link to="/itinerary" className="text-white hover:text-gray-300">Itinerary Planner</Link>
          <Link to="/aboutus" className="text-white hover:text-gray-300">About Us</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-blue-500 py-4`}
      >
        <Link to="/" className="block text-white py-2 px-4">Home</Link>
        <Link to="/login" className="block text-white py-2 px-4">Login</Link>
        <Link to="/signup" className="block text-white py-2 px-4">Signup</Link>
        <Link to="/itinerary" className="block text-white py-2 px-4">Itinerary Planner</Link>
        <Link to="/aboutus" className="block text-white py-2 px-4">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
