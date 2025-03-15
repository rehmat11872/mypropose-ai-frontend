import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
       
               {/* Logo Section */}
               <div className="flex items-center space-x-2">
          <Link to="/">
            {/* SVG Logo */}
            <svg
              className="w-6 h-6 text-[#13544e]"
              viewBox="0 0 48 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <Link to="/">
            <span className="text-xl font-bold text-[#13544e] cursor-pointer">
              MyProposeAI
            </span>
          </Link>
        </div>

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
          <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ'S</a>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex">
          <button className="bg-[#13544e] text-white px-4 py-2 rounded hover:bg-[#13544e] mr-2">
            
            <Link to="/signup" >Sign Up</Link>
          </button>
          <button className="border border-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-100">
            
            <Link to="/login" >Log In</Link>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 px-6 py-4">
            <a  className="text-gray-600 hover:text-blue-600"><Link to="/dashboard" >Home</Link></a>
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ'S</a>
          </nav>
          <div className="flex flex-col px-6 py-4">
          <button className="bg-[#13544e] text-white px-4 py-2 rounded hover:bg-[#13544e] mr-2">
            
            <Link to="/signup" >Sign Up</Link>
          </button>
          <button className="border border-gray-300 text-gray-900 px-4 py-2 rounded hover:bg-gray-100">
            
            <Link to="/login" >Log In</Link>
          </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
