import React, { useState } from 'react';

export default function ProposalGenerator() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [generatedProposal, setGeneratedProposal] = useState('');

  const handleGenerateProposal = () => {
    setGeneratedProposal(`
      𝑯𝒆𝒍𝒍𝒐 𝒕𝒉𝒆𝒓𝒆!

      I can help bring your vocational school's website to life with a mobile-first, responsive design that aligns perfectly with your vision. 
      With over five years of experience in web development and a keen eye for design, I specialize in transforming desktop designs into smooth, 
      responsive experiences for mobile and tablet. I’m skilled in optimizing performance and ensuring cross-device and browser compatibility.

      With over five years of experience in web application design and development, I bring a wealth of expertise in Python, Django, Flask, REST APIs, 
      DigitalOcean, AWS ec2, and DevOps. I have extensive experience in Django development and third-party API integrations, ensuring a robust 
      and efficient solution for your needs. My proficiency in tools like Git, Trello, ClickUp, and Slack ensures smooth and efficient project management.

      𝑷𝒐𝒓𝒕𝒇𝒐𝒍𝒊𝒐:
      https://rehmatqadeer.framer.website/
      https://rehmat-resume.netlify.app/
      https://rehmatqadeer.netlify.app/

      Let's discuss how I can add value to your project with my skills and commitment to effective communication. 
      I'm looking forward to your kind response.

      Best Regards,
      Rehmat
    `);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white overflow-x-hidden font-sans">
      <div className="flex h-full flex-col justify-center py-5 px-6">
        <div className="flex flex-col max-w-[960px] w-full mx-auto">
          <p className="text-[#111418] text-[32px] font-bold leading-tight px-4 py-4">New Job</p>

          {/* Title Input */}
          <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col w-full">
              <p className="text-[#111418] text-base font-medium pb-2">Title</p>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full h-14 rounded-xl bg-[#f0f2f4] text-[#111418] p-4 placeholder:text-[#637588] text-base"
                placeholder="Enter job title"
              />
            </label>
          </div>

          {/* Description Input */}
          <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col w-full">
              <p className="text-[#111418] text-base font-medium pb-2">Description</p>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full min-h-[144px] rounded-xl bg-[#f0f2f4] text-[#111418] p-4 placeholder:text-[#637588] text-base"
                placeholder="Enter job description"
              ></textarea>
            </label>
          </div>

          {/* URL Input */}
          <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col w-full">
              <p className="text-[#111418] text-base font-medium pb-2">What is the URL of the job?</p>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full h-14 rounded-xl bg-[#f0f2f4] text-[#111418] p-4 placeholder:text-[#637588] text-base"
                placeholder="Enter job URL"
              />
            </label>
          </div>

          {/* Generate Button */}
          <div className="flex justify-end px-4 py-3">
            <button
              onClick={handleGenerateProposal}
              className="min-w-[84px] h-10 px-4 rounded-xl bg-[#3289e7] text-white text-sm font-bold"
            >
              Generate Proposal
            </button>
          </div>

          {/* Generated Proposal Preview */}
          {generatedProposal && (
            <div className="px-4 py-5">
              <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Generated Proposal</h2>
              <p className="whitespace-pre-line text-[#111418] bg-[#f0f2f4] p-4 rounded-xl">{generatedProposal}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
