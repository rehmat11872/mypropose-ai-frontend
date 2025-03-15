// src/components/Footer.jsx

import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#09060E] text-gray-300 pt-12 pb-8">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* --- Top Section: 4 Columns --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 1) Brand & short intro */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">MyProposeAI</h2>
            <p className="text-sm text-gray-400 mb-6">
              Boost your Upwork success with MyProposeAI AI-powered tools.
            </p>

            {/* Social Links */}
            <div className="flex flex-col gap-3">
              {/* Facebook */}
              <a
                href="#"
                className="inline-flex items-center border border-gray-600 px-3 py-2 rounded-md font-medium text-gray-300 hover:bg-gray-700 hover:border-gray-700 transition"
              >
                <FaFacebookF className="mr-2" />
                Facebook
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="inline-flex items-center border border-gray-600 px-3 py-2 rounded-md font-medium text-gray-300 hover:bg-gray-700 hover:border-gray-700 transition"
              >
                <FaInstagram className="mr-2" />
                Instagram
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="inline-flex items-center border border-gray-600 px-3 py-2 rounded-md font-medium text-gray-300 hover:bg-gray-700 hover:border-gray-700 transition"
              >
                <FaTwitter className="mr-2" />
                X
              </a>
            </div>
          </div>

          {/* 2) Features */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>CLient Analysis</li>
              <li>Upwork AI Job Assistant</li>
              <li>Upwork Proposal Generation</li>
              <li>Analytics and Reporting</li>
              <li>AI Job Researcher</li>
            </ul>
          </div>

          {/* 3) Product */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>How It Works</li>
              <li>Getting Started</li>
              <li>
              <Link to="/contact-us">
                      Contact us
                    </Link>
              </li>
              <li >
              <Link to="/about-us">
                    About us
                </Link>
              </li>
                   
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>

            </ul>
          </div>

          {/* 4) Latest articles */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Latest articles</h3>
            <ul className="space-y-2 text-sm">
              <li>Upwork vs. AI Tools: Why MyProposeAI is Better</li>
              <br />
              <li>Rating and Lead Scoring with MyProposeAI</li>
              <br />
              <li>Proposal Writing: Best Practices</li>
              <br />
              <li>Pipedrive Integration Success Stories</li>
              <br />
              {/* <li>... (etc)</li> */}
            </ul>
          </div>
        </div>
        {/* --- /End Top Section --- */}

        <hr className="border-gray-700 my-8" />

        {/* --- Bottom Section --- */}
        <div className="text-center">
          {/* Privacy/Terms Links (centered) */}
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-gray-100">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Data Protection
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Legal Notice
              </a>
            </li>
          </ul>

          {/* Brand icons row */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="text-gray-300 text-sm">MyProposeAI</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="YouTube"
              className="h-5"
            />
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Upwork-logo.svg"
              alt="Upwork"
              className="h-5"
            /> */}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500 mt-4">
            MyProposeAI © {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
