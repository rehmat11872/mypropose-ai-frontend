import React from 'react';

const plans = [
  {
    title: 'Intro',
    price: '$20',
    duration: '/month',
    planType: 'Intro',
    description: 'For most businesses that want to optimize web queries',
    features: [
      'All limited links',
      'Own analytics platform',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
    ],
    buttonText: 'Choose Plan',
    bgColor: 'bg-white',
    textColor: 'text-gray-900',
  },
  {
    title: 'Base',
    price: '$120',
    duration: '/month',
    planType: 'Base',
    description: 'For most businesses that want to optimize web queries',
    features: [
      'All limited links',
      'Own analytics platform',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
    ],
    buttonText: 'Choose Plan',
    bgColor: 'bg-white',
    textColor: 'text-gray-900',
  },
  {
    title: 'Pro',
    price: '$200',
    duration: '/month',
    planType: 'Pro',
    description: 'For most businesses that want to optimize web queries',
    features: [
      'All limited links',
      'Own analytics platform',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
    ],
    buttonText: 'Choose Plan',
    bgColor: 'bg-orange-500',
    textColor: 'text-white',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Simple and Affordable Pricing Plans
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Choose a plan that fits your needs without breaking the bank. Our flexible pricing offers the best value, ensuring quality and affordability for everyone.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.bgColor} shadow-lg p-8 rounded-2xl transform hover:scale-105 transition duration-300`}
            >
              <div className={`${plan.textColor}`}>
                {/* Price */}
                <p className="text-4xl font-extrabold">
                  {plan.price}
                  <span className="text-lg font-medium">{plan.duration}</span>
                </p>
                <p className="text-sm font-bold uppercase">{plan.planType}</p>

                {/* Title */}
                <h3 className="text-xl font-bold mt-4">{plan.description}</h3>

                {/* Features */}
                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✔</span>
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`${
                    plan.bgColor === 'bg-orange-500'
                      ? 'bg-white text-orange-500'
                      : 'bg-orange-500 text-white'
                  } mt-6 px-6 py-3 rounded-lg font-bold hover:opacity-90`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
