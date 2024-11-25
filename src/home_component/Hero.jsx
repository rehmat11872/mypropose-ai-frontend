import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        {/* Upper Content Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Transform the Way You Write Proposals with AI-Powered Personalization
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              Stand out with tailored, human-like proposals that get results.
            </p>
            {/* Buttons */}
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <button className="bg-orange-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition">
                Sign in
              </button>
              <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="https://picsum.photos/400/300?random=1"
              alt="Upper Section Graphic"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Lower Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-10">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Power Up Your Proposal Success with MyPropose.ai
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Leverage AI to create proposals that impress and win.
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-6 space-y-2">
              <li>Upwork API Integration</li>
              <li>Portfolio Matching</li>
              <li>Human-Like Proposal Generation</li>
              <li>Client Analysis Tool</li>
              <li>Automated Scheduling</li>
              <li>Instant Feedback on Proposals</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="https://picsum.photos/400/300?random=2"
              alt="Lower Section Graphic"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
