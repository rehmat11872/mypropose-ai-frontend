import React, { useState } from 'react';

// FAQ data with logo/icon
// const faqs = [
//   {
//     question: 'What is a Payment Gateway?',
//     answer: 'A payment gateway is a service that authorizes credit card or direct payments.',
//     icon: '💳', // Example icon or image
//   },
//   {
//     question: 'What makes MyPropose.ai different?',
//     answer: 'MyPropose.ai leverages advanced AI to simplify proposal writing.',
//     icon: '🤖', // Example icon or image
//   },
//   {
//     question: 'How does it integrate with Upwork?',
//     answer: 'It seamlessly integrates with Upwork to help you create proposals faster.',
//     icon: '🔗', // Example icon or image
//   },
//   {
//     question: 'What does the free trial include?',
//     answer: 'The free trial includes access to basic templates and tools for 14 days.',
//     icon: '🎁', // Example icon or image
//   },
// ];

const faqs = [
  {
    question: 'What is MyPropose.ai?',
    answer:
      'MyPropose.ai is an AI-driven proposal generator that leverages your professional details, skills, project history, and client feedback to create tailored proposals for Upwork.',
    icon: '🤖',
  },
  {
    question: 'How does MyPropose.ai generate proposals?',
    answer:
      'It uses advanced AI algorithms to analyze your profile and past projects, crafting personalized proposals that enhance your chances of success on Upwork.',
    icon: '💡',
  },
  {
    question: 'How does it integrate with Upwork?',
    answer:
      'Our platform seamlessly connects with Upwork, enabling you to manage and send your generated proposals directly from within MyPropose.ai.',
    icon: '🔗',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. We prioritize your privacy and security by using state-of-the-art encryption and data protection measures to safeguard your personal and professional information.',
    icon: '🔒',
  },
  {
    question: 'Can I customize the generated proposals?',
    answer:
      'Yes, every proposal is fully editable. You can personalize the content to match your unique voice and approach, ensuring that your proposal truly represents you.',
    icon: '✍️',
  },
  {
    question: 'Do you offer a free trial?',
    answer:
      'Yes, we provide a free trial that gives you access to essential features, allowing you to experience the benefits of our AI-driven proposal generation before committing.',
    icon: '🎁',
  },
  {
    question: 'What makes MyPropose.ai different?',
    answer:
      'We uniquely combine AI-powered insights, real-time client history analysis, and customizable templates to generate proposals that are both data-driven and highly personalized.',
    icon: '⭐',
  },
  // {
  //   question: 'Can I collaborate with my team?',
  //   answer:
  //     'Yes, MyPropose.ai supports team collaboration, so you can work with colleagues to refine proposals and share insights for better results.',
  //   icon: '🤝',
  // },
  {
    question: 'What if I need further assistance?',
    answer:
      'Our dedicated support team is always available to help. You can contact us via our support page or email for any questions or technical assistance.',
    icon: '❓',
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
