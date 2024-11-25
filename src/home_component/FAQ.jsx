import React, { useState } from 'react';

// FAQ data with logo/icon
const faqs = [
  {
    question: 'What is a Payment Gateway?',
    answer: 'A payment gateway is a service that authorizes credit card or direct payments.',
    icon: '💳', // Example icon or image
  },
  {
    question: 'What makes MyPropose.ai different?',
    answer: 'MyPropose.ai leverages advanced AI to simplify proposal writing.',
    icon: '🤖', // Example icon or image
  },
  {
    question: 'How does it integrate with Upwork?',
    answer: 'It seamlessly integrates with Upwork to help you create proposals faster.',
    icon: '🔗', // Example icon or image
  },
  {
    question: 'What does the free trial include?',
    answer: 'The free trial includes access to basic templates and tools for 14 days.',
    icon: '🎁', // Example icon or image
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-600 mt-4">
          Quick answers to questions you may have. Can't find what you're looking for?
        </p>
        <div className="mt-10 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 mb-4 cursor-pointer transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                {/* Logo or Icon */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{faq.icon}</span> {/* Add logo or image */}
                  <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                </div>
                <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
              {openIndex === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
