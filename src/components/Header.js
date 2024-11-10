// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

   const [showSearch, setShowSearch] = useState(false); // State to control search visibility

  // Toggle search visibility on button click
  const handleSearchClick = () => {
    setShowSearch(prevState => !prevState); // Toggle search state
  };
  return (


  <header className="flex items-center justify-between px-10 py-3 border-b border-solid border-b-[#e7edf3]">
    {/* Logo Section */}
    <div className="flex items-center gap-4 text-[#0e141b]">
      <div className="w-10 h-10">
        <svg
          viewBox="0 0 48 48"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">MyPropose.ai</h2>
    </div>

    {/* Navigation Links */}
    <nav className="flex items-center gap-8">
      <Link to="/" className="text-[#0e141b] text-sm font-medium leading-normal hover:text-blue-300 transition-colors">
        Home
      </Link>
      <Link to="/dashboard" className="text-[#0e141b] text-sm font-medium leading-normal hover:text-blue-300 transition-colors">
        Dashboard
      </Link>
      <Link to="/add-project" className="text-[#0e141b] text-sm font-medium leading-normal hover:text-blue-300 transition-colors">
        Add Project
      </Link>
      <Link to="/view-projects" className="text-[#0e141b] text-sm font-medium leading-normal hover:text-blue-300 transition-colors">
        View Projects
      </Link>
      <Link to="/proposal-generator" className="text-[#0e141b] text-sm font-medium leading-normal hover:text-blue-300 transition-colors">
        Proposal Generator
      </Link>
    </nav>

    {/* Profile / Search / Settings */}
    <div className="flex items-center gap-2">
      <button onClick={handleSearchClick} className="flex items-center justify-center rounded-xl h-10 bg-[#e7edf3] text-[#0e141b] text-sm font-bold tracking-[0.015em] px-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>
      </button>
      {/* Conditional rendering for search input */}
      {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#e7edf3] text-[#0e141b] text-sm font-bold tracking-[0.015em] px-2.5 rounded-xl h-10"
          />
        )}
      <button className="flex items-center justify-center rounded-xl h-10 bg-[#e7edf3] text-[#0e141b] text-sm font-bold tracking-[0.015em] px-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
        </svg>
      </button>
      <button className="flex items-center justify-center rounded-xl h-10 bg-[#e7edf3] text-[#0e141b] text-sm font-bold tracking-[0.015em] px-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
        </svg>
      </button>
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10"
        style={{
          backgroundImage:
            'url("https://cdn.usegalileo.ai/stability/d7c3b4ff-c5b4-438b-83f5-0cc086ef7967.png")',
        }}
      ></div>
    </div>
  </header>
);
};

export default Header;





// // src/components/Header.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => (
//   <header className="bg-gray-800 text-white p-4">
//     <div className="container mx-auto flex justify-between items-center">
//       <h1 className="text-2xl font-bold">MyPropose.ai</h1>
//       <nav>
//         <Link to="/" className="mx-2 hover:text-blue-300">Home</Link>
//         <Link to="/dashboard" className="mx-2 hover:text-blue-300">Dashboard</Link>
//         <Link to="/about-us" className="mx-2 hover:text-blue-300">About Us</Link>
//         <Link to="/contact-us" className="mx-2 hover:text-blue-300">Contact Us</Link>
//       </nav>
//     </div>
//   </header>
// );

// export default Header;
