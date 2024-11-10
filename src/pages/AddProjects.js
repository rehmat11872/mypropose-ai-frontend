// src/pages/AddProjects.js
import React, { useState } from "react";

const AddProjects = () => {
  const [title, setTitle] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the project submission logic
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Add New Project</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input 
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {/* Add more form fields as necessary */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjects;
