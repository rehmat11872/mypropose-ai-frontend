import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Validation errors
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    // Reset errors
    setErrorName('');
    setErrorEmail('');
    setErrorPassword('');

    let valid = true;

    // Basic validation
    if (!name.trim()) {
      setErrorName('Name is required.');
      valid = false;
    }
    if (!email.trim()) {
      setErrorEmail('Email is required.');
      valid = false;
    }
    if (!password.trim()) {
      setErrorPassword('Password is required.');
      valid = false;
    }

    // If any field is invalid, show toast and stop
    if (!valid) {
      toast.error('Please fix the errors before proceeding.');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate an API call to register user
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // On success
      toast.success('Verification code sent to your email!');
      // Navigate to the next screen where user enters code
      navigate('/verify-code', {
        state: {
          email, // pass email if needed for verification
        },
      });
    } catch (error) {
      // On error
      toast.error('Registration failed. Please try again.');
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
        {/* Replace with your actual logo image if you have one */}
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
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900">
          Let’s get started
        </h1>
        <p className="text-gray-500 mt-1">
          Register to start your 7-days free trial
        </p>

        {/* Google Sign In */}
        <button
          className="mt-8 w-full flex items-center justify-center border border-gray-300 rounded-lg py-2.5 px-4 hover:bg-gray-50 transition"
          // onClick={...}  // If you want to integrate Google OAuth
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="mx-auto text-gray-700 font-medium">
            Sign up with Google
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">
            or sign up with email
          </span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Name */}
        <div className="mb-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full border ${
              errorName ? 'border-red-500' : 'border-gray-300'
            } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errorName && (
            <p className="text-red-500 text-xs mt-1">{errorName}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4 text-left">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full border ${
              errorEmail ? 'border-red-500' : 'border-gray-300'
            } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errorEmail && (
            <p className="text-red-500 text-xs mt-1">{errorEmail}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4 text-left">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full border ${
              errorPassword ? 'border-red-500' : 'border-gray-300'
            } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errorPassword && (
            <p className="text-red-500 text-xs mt-1">{errorPassword}</p>
          )}
        </div>

        {/* Register Button */}
        <button
          onClick={handleSignup}
          disabled={isLoading}
          className="w-full bg-[#13544e] text-white font-semibold rounded-lg py-3 mt-4 hover:bg-green-700 transition disabled:opacity-50"
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>

        {/* Terms & Policy */}
        <p className="text-xs text-gray-500 mt-3">
          By signing up, I agree with MyProposeAI{' '}
          <Link
            to="#"
            className="text-[#13544e] hover:underline"
          >
            Terms & Privacy Policy
          </Link>
        </p>

        {/* Already have an account? */}
        <p className="text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-[#13544e] hover:underline">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const navigate = useNavigate();
//   const handleSubmit = async () => {
//     if (email) {
//       try {
//         // Sending the email to backend for sending magic link
//         // await axios.post("/api/send-magic-link", { email });
//         setIsSubmitted(true);
//         // Redirect to magic link form after successful submission
//         navigate("/magic-link");
//       } catch (error) {
//         alert("Failed to send magic link. Please try again.");
//       }
//     } else {
//       alert("Please enter a valid email address.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
//       <div className="w-full max-w-md text-center">
//         {!isSubmitted ? (
//           <>
//             <h2 className="text-2xl font-semibold text-gray-900">Sign Up</h2>
//             <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-3 mt-6 hover:bg-gray-50 transition">
//               <img
//                 src="https://www.svgrepo.com/show/355037/google.svg"
//                 alt="Google"
//                 className="w-5 h-5"
//               />
//               <span className="ml-3 text-gray-700 font-medium">
//                 Continue with Google
//               </span>
//             </button>
//             <div className="flex items-center justify-center my-4">
//               <span className="h-px w-full bg-gray-300"></span>
//               <span className="mx-4 text-gray-500 text-sm">OR</span>
//               <span className="h-px w-full bg-gray-300"></span>
//             </div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               onClick={handleSubmit}
//               className="w-full bg-blue-600 text-white font-semibold rounded-lg py-3 mt-4 hover:bg-blue-700 transition"
//             >
//               Continue
//             </button>
//           </>
//         ) : (
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-800">
//               Magic Link Sent!
//             </h3>
//             <p className="text-gray-600 mt-4">
//               A magic link has been sent to <span className="font-medium">{email}</span>.
//               Please check your email to continue.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Signup;




