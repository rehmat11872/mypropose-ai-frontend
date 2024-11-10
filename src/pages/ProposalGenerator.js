// src/pages/ProposalGenerator.js
import React, { useState } from 'react';

const ProposalGenerator = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [proposal, setProposal] = useState('');

  const handleGenerateProposal = () => {
    // Placeholder logic for generating proposal
    setProposal(`Generated proposal for job: ${jobTitle}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Generate a Proposal</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <label className="block text-gray-700 mb-2">Job Title</label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <label className="block text-gray-700 mb-2">Job Description</label>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          rows="4"
        />
        <button onClick={handleGenerateProposal} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Generate Proposal
        </button>
        {proposal && <div className="mt-4 p-4 bg-gray-100 rounded">{proposal}</div>}
      </div>
    </div>
  );
};

export default ProposalGenerator;
