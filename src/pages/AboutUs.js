import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-50 text-[#0e141b] font-sans flex flex-col items-center">
      <div className="w-full max-w-5xl p-6 flex flex-col items-center">
        {/* Page Header */}
        <h1 className="text-4xl font-bold leading-tight text-center mb-6">
          About Us
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-2xl mb-10">
          At MyPropose.ai, we are dedicated to revolutionizing the proposal process with AI-powered solutions designed to enhance productivity and creativity for businesses worldwide.
        </p>

        {/* Mission Section */}
        <section className="w-full my-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 text-base">
            To empower individuals and organizations to craft professional, high-impact proposals with ease and efficiency through the power of artificial intelligence.
          </p>
        </section>

        {/* Vision Section */}
        <section className="w-full my-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 text-base">
            To be the leading platform for proposal creation, streamlining workflows and enhancing communication between businesses and clients globally.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="w-full my-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
          <ul className="text-gray-700 text-base list-disc pl-6 space-y-2">
            <li>Innovation - Constantly pushing the boundaries of what's possible.</li>
            <li>Efficiency - Maximizing productivity for our users.</li>
            <li>Integrity - Building trust through transparency and reliability.</li>
            <li>Customer-Centric - Prioritizing the needs of our users in everything we do.</li>
          </ul>
        </section>

        {/* Team Section */}
        <section className="w-full my-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((member) => (
              <div key={member} className="flex flex-col items-center text-center p-4 bg-slate-50 border rounded-lg">
                <div
                  className="w-24 h-24 rounded-full bg-cover bg-center mb-4"
                  style={{ backgroundImage: `url(https://via.placeholder.com/150)` }}
                ></div>
                <h3 className="font-semibold">Team Member {member}</h3>
                <p className="text-gray-500 text-sm">Position</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full my-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">What Our Users Say</h2>
          <div className="space-y-6">
            {[
              {
                quote: "MyPropose.ai has completely changed the way I create proposals. It's efficient and easy to use!",
                name: "Jane Doe",
                position: "Project Manager"
              },
              {
                quote: "The AI-powered features have saved me countless hours. Highly recommended!",
                name: "John Smith",
                position: "Freelance Designer"
              }
            ].map((testimonial, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <p className="text-lg font-semibold text-gray-800">"{testimonial.quote}"</p>
                <p className="text-gray-600 mt-2">- {testimonial.name}, {testimonial.position}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
