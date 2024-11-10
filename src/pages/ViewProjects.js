// src/pages/ViewProjects.js
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of project 1',
    technologies: 'React, Node.js',
    link: '#',
    image: 'https://via.placeholder.com/150',
  },
  // Add more project data here
];

const ViewProjects = () => (
  <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6">Your Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <p className="text-gray-600 mt-2 text-sm">{project.technologies}</p>
            <a href={project.link} className="text-blue-500 hover:underline mt-4 block">
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ViewProjects;
