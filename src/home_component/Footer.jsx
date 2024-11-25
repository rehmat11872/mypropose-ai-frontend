import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">MyPropose.ai</h3>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact Us</a>
            <a href="#privacy" className="text-gray-300 hover:text-white transition">Privacy Policy</a>
            <a href="#terms" className="text-gray-300 hover:text-white transition">Terms of Services</a>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6">
          <p className="text-sm">
            © {new Date().getFullYear()} MyPropose.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
