

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    text: 'This tool saved me hours of manual work. The AI templates are truly a game-changer!',
    date: 'Nov 20, 2024',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Jane Smith',
    text: 'I can’t imagine going back to writing proposals manually. MyPropose.ai is worth every penny!',
    date: 'Nov 18, 2024',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Alex Johnson',
    text: 'Our team has become so much more efficient with this tool. Highly recommended!',
    date: 'Nov 15, 2024',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
  {
    name: 'Sophia Brown',
    text: 'The customer support is amazing, and the tool itself has helped us close deals faster!',
    date: 'Nov 10, 2024',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Michael Lee',
    text: 'The automated proposal generator saved me hours of tedious work. Fantastic!',
    date: 'Nov 8, 2024',
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
  {
    name: 'Emily Davis',
    text: 'We’ve streamlined our proposal process entirely. The AI suggestions are incredibly accurate!',
    date: 'Nov 5, 2024',
    image: 'https://randomuser.me/api/portraits/women/25.jpg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 mt-4">
            Hear from our satisfied customers who’ve experienced incredible results with MyPropose.ai.
          </p>
        </div>
  
        {/* Slider */}
        <div className="mt-16 relative">
          <div className="overflow-hidden relative">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
            >
              ❮
            </button>
  
            {/* Testimonial Card */}
            <div className="flex items-center justify-center">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-xl rounded-lg p-10 max-w-3xl mx-auto text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-200 mb-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">@{testimonials[currentIndex].name}</h4>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <p className="mt-6 text-sm text-gray-400">{testimonials[currentIndex].date}</p>
              </motion.div>
            </div>
  
            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
            >
              ❯
            </button>
          </div>
  
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-4 w-4 rounded-full cursor-pointer transition ${
                  currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default Testimonials;

// import React from 'react';

// const testimonials = [
//   {
//     name: 'John Doe',
//     text: 'This tool saved me hours of manual work. The AI templates are truly a game-changer!',
//     date: 'Nov 20, 2024',
//     image: 'https://randomuser.me/api/portraits/men/32.jpg',
//   },
//   {
//     name: 'Jane Smith',
//     text: 'I can’t imagine going back to writing proposals manually. MyPropose.ai is worth every penny!',
//     date: 'Nov 18, 2024',
//     image: 'https://randomuser.me/api/portraits/women/44.jpg',
//   },
//   {
//     name: 'Alex Johnson',
//     text: 'Our team has become so much more efficient with this tool. Highly recommended!',
//     date: 'Nov 15, 2024',
//     image: 'https://randomuser.me/api/portraits/men/85.jpg',
//   },
//   {
//     name: 'Sophia Brown',
//     text: 'The customer support is amazing, and the tool itself has helped us close deals faster!',
//     date: 'Nov 10, 2024',
//     image: 'https://randomuser.me/api/portraits/women/68.jpg',
//   },
//   {
//     name: 'Michael Lee',
//     text: 'The automated proposal generator saved me hours of tedious work. Fantastic!',
//     date: 'Nov 8, 2024',
//     image: 'https://randomuser.me/api/portraits/men/54.jpg',
//   },
//   {
//     name: 'Emily Davis',
//     text: 'We’ve streamlined our proposal process entirely. The AI suggestions are incredibly accurate!',
//     date: 'Nov 5, 2024',
//     image: 'https://randomuser.me/api/portraits/women/25.jpg',
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section id="testimonials" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6 lg:px-12">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto">
//           <h2 className="text-4xl font-extrabold text-gray-900">What Our Customers Say</h2>
//           <p className="text-lg text-gray-600 mt-4">
//             Hear from our satisfied customers who’ve experienced incredible results with MyPropose.ai.
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg p-6 rounded-2xl relative transform hover:scale-105 transition duration-300"
//             >
//               {/* Profile Image */}
//               <div className="absolute -top-6 left-6 w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
//                 <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
//               </div>

//               {/* Testimonial Content */}
//               <div className="mt-8">
//                 <h4 className="font-bold text-gray-900">@{testimonial.name}</h4>
//                 <p className="text-gray-600 mt-4 text-sm leading-relaxed">"{testimonial.text}"</p>
//               </div>

//               {/* Date */}
//               <p className="text-gray-400 text-xs absolute bottom-4 right-4">{testimonial.date}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
