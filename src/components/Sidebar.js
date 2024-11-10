// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
    <nav className="w-64 h-full bg-gray-800 text-white p-6">
        <ul>
            <li><Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">Home</Link></li>
            <li><Link to="/add-project" className="block py-2 px-4 hover:bg-gray-700 rounded">Add Project</Link></li>
            <li><Link to="/view-projects" className="block py-2 px-4 hover:bg-gray-700 rounded">View Projects</Link></li>
            <li><Link to="/proposal-generator" className="block py-2 px-4 hover:bg-gray-700 rounded">Proposal Generator</Link></li>
            <li><Link to="/about-us" className="block py-2 px-4 hover:bg-gray-700 rounded">About Us</Link></li>
            <li><Link to="/contact-us" className="block py-2 px-4 hover:bg-gray-700 rounded">Contact Us</Link></li>
            <li><Link to="/profile-settings" className="block py-2 px-4 hover:bg-gray-700 rounded">Profile Settings</Link></li>
            <li><Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded">Logout</Link></li>
        </ul>
    </nav>
);

export default Sidebar;
