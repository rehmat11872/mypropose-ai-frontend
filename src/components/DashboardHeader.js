// src/components/DashboardHeader.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchClick = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md border-b border-solid border-[#e7edf3]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo Section */}
        <div className="flex items-center space-x-2">
          <Link to="/">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/dashboard"
            className="text-[#0e141b] text-sm font-medium hover:text-blue-300 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/view-projects"
            className="text-[#0e141b] text-sm font-medium hover:text-blue-300 transition-colors"
          >
            View Projects
          </Link>
          <Link
            to="/proposal-generator"
            className="text-[#0e141b] text-sm font-medium hover:text-blue-300 transition-colors"
          >
            Proposal Generator
          </Link>
          <Link
            to="/client-anaylsis"
            className="text-[#0e141b] text-sm font-medium hover:text-blue-300 transition-colors"
          >
            Client Analysis
          </Link>
        </nav>

        {/* Right: Mobile Toggle and Profile/Search */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#0e141b] focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Search Button and Input */}
          <button
            onClick={handleSearchClick}
            className="hidden md:flex items-center justify-center rounded-xl h-10 bg-[#e7edf3] text-[#0e141b] text-sm font-bold px-2.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </button>
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block bg-[#e7edf3] text-[#0e141b] text-sm font-bold px-2.5 rounded-xl h-10"
            />
          )}

          {/* Profile Icon */}
          <Link to="/profile-settings">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/d7c3b4ff-c5b4-438b-83f5-0cc086ef7967.png")',
              }}
            ></div>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-b border-gray-200">
          <div className="px-4 py-2 space-y-2 text-right">
            <Link
              to="/dashboard"
              className="block text-[#0e141b] text-base font-medium hover:text-blue-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/view-projects"
              className="block text-[#0e141b] text-base font-medium hover:text-blue-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              View Projects
            </Link>
            <Link
              to="/proposal-generator"
              className="block text-[#0e141b] text-base font-medium hover:text-blue-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Proposal Generator
            </Link>
            <Link
              to="/client-anaylsis"
              className="block text-[#0e141b] text-base font-medium hover:text-blue-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Client Analysis
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default DashboardHeader;
