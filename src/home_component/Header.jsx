import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">MyPropose.ai</div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-gray-600 md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
        
        <a  className="text-gray-600 hover:text-blue-600"><Link to="/dashboard" >Home</Link></a>
          <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600">FAQ'S</a>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
            Sign Up
          </button>
          <button className="border border-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-100">
            Log In
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 px-6 py-4">
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
          </nav>
          <div className="flex flex-col px-6 py-4">
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2">
              Sign Up
            </button>
            <button className="border border-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-100">
              Log In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
