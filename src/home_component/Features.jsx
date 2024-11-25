import React from 'react';

const features = [
  { title: 'Real-time Collaboration', description: 'Work with your team on proposals in real-time.', icon: '🤝' },
  { title: 'AI Templates', description: 'Get started with smart templates powered by AI.', icon: '📄' },
  { title: 'Automated Scheduling', description: 'Quickly schedule meetings with built-in tools.', icon: '📅' },
  { title: 'Instant Feedback', description: 'Receive instant suggestions to improve your proposals.', icon: '💡' },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900">Features</h2>
          <p className="text-lg text-gray-600 mt-4">
            Explore the powerful features that make MyPropose.ai the best tool for streamlining your proposals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-8 rounded-2xl text-center transform hover:scale-105 transition duration-300"
            >
              <div className="text-5xl">{feature.icon}</div>
              <h3 className="text-xl font-bold mt-6 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
