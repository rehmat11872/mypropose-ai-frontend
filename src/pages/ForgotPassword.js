import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForgotPasswordMutation } from '../features/auth/authApi';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  
  // RTK Query hook returns a mutation trigger function and an object with status flags
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleForgotPassword = async () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    
    if (!email) {
      setErrorEmail('Email is a required field.');
      toast.error('Please enter your email.');
      return;
    }
    
    if (!emailRegex.test(email)) {
      setErrorEmail('Please enter a valid email address.');
      toast.error('Please enter a valid email address.');
      return;
    }
    
    setErrorEmail('');
    
    try {
      // Trigger the mutation; unwrap() will throw an error if the request fails
    //   await forgotPassword(email).unwrap();
    //   await forgotPassword({ email }).unwrap();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success(`Reset link sent to ${email}. Please check your inbox.`);
    } catch (error) {
      toast.error(error?.data?.message || 'Failed to send password reset link. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top bar with logo */}
      <div className="p-4 flex items-center space-x-2">
        <Link to="/">
          <svg
            className="w-6 h-6 text-[#13544e]"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
              fill="currentColor"
            />
          </svg>
        </Link>
        <Link to="/">
          <span className="text-xl font-bold text-[#13544e] cursor-pointer">
            MyProposeAI
          </span>
        </Link>
      </div>

      {/* Main container */}
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-16">
        <div className="w-full max-w-lg bg-white p-6 sm:p-8 md:p-12 lg:p-16 rounded-lg shadow-md">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
            Reset your password
          </h2>

          <input
            type="email"
            placeholder="Email address"
            className={`w-full border ${
              errorEmail ? 'border-red-500' : 'border-gray-300'
            } rounded-lg p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && <p className="text-red-500 text-xs mt-1">{errorEmail}</p>}

          <button
            onClick={handleForgotPassword}
            disabled={isLoading}
            className="w-full bg-[#13544e] text-white font-medium py-2.5 rounded-lg hover:bg-green-700 transition disabled:opacity-50 mt-4"
          >
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </button>

          {/* Back to Home Link */}
          <div className="text-center mt-6">
            <Link to="/" className="text-[#13544e] hover:underline">
              ⬅ Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ForgotPassword;
