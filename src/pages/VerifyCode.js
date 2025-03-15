import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerifyCode = () => {
  const [code, setCode] = useState('');
  const [errorCode, setErrorCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // If you passed the user's email from the Signup page via navigate('/verify-code', { state: { email } })
  // You can retrieve it here for display if needed:
  // const userEmail = location.state?.email;

  const handleVerify = async () => {
    // Reset previous errors
    setErrorCode('');

    // Validate code
    if (!code.trim()) {
      setErrorCode('Verification code is required.');
      toast.error('Please fix the errors before proceeding.');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate an API call (replace with your real backend call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // On success:
      toast.success('Verification successful! You are now registered.');
      // Navigate to dashboard or any other page
      navigate('/dashboard');
    } catch (error) {
      // On failure:
      toast.error('Invalid code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
      {/* Toast Container for notifications */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Top-left logo or text */}
      <div className="absolute top-4 left-6 flex items-center space-x-2">
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
        <Link to="/">
          <span className="text-xl font-bold text-[#13544e] cursor-pointer">
          MyProposeAI
          </span>
        </Link>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-md p-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Verify your code</h1>
        <p className="text-gray-500 mt-1">
          We’ve sent a 6-digit verification code to your email. Enter it below:
        </p>

        {/* Verification Code Input */}
        <div className="mt-8 text-left">
          <input
            type="text"
            placeholder="Enter your verification code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={`w-full border ${
              errorCode ? 'border-red-500' : 'border-gray-300'
            } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errorCode && (
            <p className="text-red-500 text-xs mt-1">{errorCode}</p>
          )}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={isLoading}
          className="w-full bg-[#13544e] text-white font-semibold rounded-lg py-3 mt-4 hover:bg-green-700 transition disabled:opacity-50"
        >
          {isLoading ? 'Verifying...' : 'Verify Code'}
        </button>

        {/* Resend Code */}
        <p className="text-sm text-gray-600 mt-6">
          Didn’t receive a code?{' '}
          <button
            onClick={() => toast.info('Code resent! (demo)')}
            className="text-[#13544e] hover:underline"
          >
            Resend code
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerifyCode;
