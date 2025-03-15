// src/home_component/Hero.jsx
import React from 'react';
import { TiCreditCard, TiFlash, TiHeadphones } from 'react-icons/ti';

const Hero = () => {
  return (
    <section
      className="bg-[#13544e] text-white py-12" 
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      <div
        className="
          max-w-screen-xl
          mx-auto
          px-6 md:px-10 lg:px-0
          flex flex-col-reverse lg:flex-row
          items-center
          lg:justify-between
          gap-8 lg:gap-16
        "
      >
        {/* LEFT COLUMN */}
        <div
          className="
            w-full
            lg:w-1/2
            mt-0       /* Remove extra margin-top */
            pl-6 md:pl-10 lg:pl-20
          "
        >
          {/* Main Heading */}
          <h1
            className="
              text-[2rem]
              md:text-[2.5rem]
              lg:text-[44px]
              font-medium
              leading-tight
              mb-3
            "
            style={{ color: '#FFFFFF' }}
          >
            My Propose AI Upwork
          </h1>

          {/* Subheading with wavy underline */}
          <div className="relative mb-6">
            <h2
              className="
                text-[17px]
                font-medium
                leading-tight
                pr-2
              "
            >
              {/* AI Proposal Generator, lead scoring, analytics for upwork. */}
              AI Proposal Creation, lead scoring,  analytics for upwork.
            </h2>
            <svg
  className="absolute left-0 bottom-[-4px] w-full h-[12px]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 500 150"
  preserveAspectRatio="none"
>
  <path
    d="M0 140 Q150 100, 300 130 T250 110"
    stroke="#0F935B"
    strokeWidth="60"
    fill="none"
  />
</svg>

            {/* <svg
              className="absolute left-1/2 bottom-[-53%] w-[106%] h-full transform -translate-x-1/2 overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <path
                d="M1.65186 148.981C1.65186 148.981 73.8781 98.5943 206.859 93.0135C339.841 87.4327 489.874 134.065 489.874 134.065"
                stroke="white"
                strokeWidth="35"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}
          </div>

          {/* Paragraph */}
          <p className="text-base lg:text-lg mb-8 leading-relaxed">


            An AI-powered tool that transforms your Upwork proposal process. 
            MyProspose.ai leverages your professional details, skills, 
            project history, and client insights to craft personalized, 
            winning proposals. Our solution helps freelancers stand out 
            and win more projects on Upwork
          </p>

          {/* CTA Buttons (same width) */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <button className="bg-white text-[#13544e] font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition-colors min-w-[180px]">
              Get free account
            </button>
            <a 
    href="https://youtu.be/3x2YY7apzRk?si=oyLfFfGPu891pXjb" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button 
      className="border border-white text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-white hover:text-[#13544e] transition-colors min-w-[180px]"
    >
      Watch demo (2min)
    </button>
  </a>
          </div>

          {/* Icons Row */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <TiCreditCard className="text-[#0F935B] text-2xl" />
              <span>No card required</span>
            </div>
            <div className="flex items-center gap-2">
              <TiFlash className="text-[#0F935B] text-2xl" />
              <span>Quick set-up</span>
            </div>
            <div className="flex items-center gap-2">
              <TiHeadphones className="text-[#0F935B] text-2xl" />
              <span>Best customer care</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="https://upwex.io/wp-content/uploads/2024/06/upwex-aitools-for-upwork-home.svg"
            alt="Upwex AI Tools for Upwork"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
