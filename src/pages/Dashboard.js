// src/pages/Dashboard.js
import React from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => (
    <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
            <h1 className="text-3xl font-bold mb-6">Welcome, [User's Name]</h1>
            {/* Add additional dashboard-specific content here */}
            <p className="text-gray-700">Your dashboard content goes here.</p>
        </main>
    </div>
);

export default Dashboard;
