import React, { useState } from 'react';

export default function ViewProjects() {
  const [projects, setProjects] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    skills: '',
    projectUrl: '',
    projectImage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProject = () => {
    if (isEditing) {
      // Update the edited project
      const updatedProjects = projects.map((project, index) =>
        index === editingIndex ? newProject : project
      );
      setProjects(updatedProjects);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      // Add new project
      setProjects([...projects, newProject]);
    }

    // Reset form
    setNewProject({
      title: '',
      description: '',
      skills: '',
      projectUrl: '',
      projectImage: '',
    });
  };

  const handleEditProject = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    setNewProject(projects[index]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#0e141b] font-sans flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      {/* Add/Edit Project Form */}
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-4">{isEditing ? 'Edit Project' : 'New Project'}</h2>
        <form className="space-y-4">
          <label className="flex flex-col">
            <span className="font-medium">Title</span>
            <input
              type="text"
              name="title"
              value={newProject.title}
              onChange={handleChange}
              className="form-input mt-1 p-3 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium">Description</span>
            <textarea
              name="description"
              value={newProject.description}
              onChange={handleChange}
              className="form-textarea mt-1 p-3 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200"
            ></textarea>
          </label>
          <label className="flex flex-col">
            <span className="font-medium">Skills</span>
            <input
              type="text"
              name="skills"
              value={newProject.skills}
              onChange={handleChange}
              className="form-input mt-1 p-3 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="e.g., React, JavaScript, Tailwind CSS"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium">Project URL</span>
            <input
              type="url"
              name="projectUrl"
              value={newProject.projectUrl}
              onChange={handleChange}
              className="form-input mt-1 p-3 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="https://"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium">Project Image URL</span>
            <input
              type="text"
              name="projectImage"
              value={newProject.projectImage}
              onChange={handleChange}
              className="form-input mt-1 p-3 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="https://"
            />
          </label>
          <button
            type="button"
            onClick={handleAddProject}
            className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
          >
            {isEditing ? 'Save Changes' : 'Add Project'}
          </button>
        </form>
      </div>

      {/* Project List */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">Your Projects</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <img
                src={project.projectImage || 'https://via.placeholder.com/150'}
                alt="Project"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <p className="text-sm text-blue-600 mt-2">{project.skills}</p>
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-2 inline-block"
                >
                  View Project
                </a>
              )}
              <button
                onClick={() => handleEditProject(index)}
                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-yellow-600 transition"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
