import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    let valid = true;
    if (!email) {
      setErrorEmail('Email is a required field.');
      valid = false;
    } else {
      setErrorEmail('');
    }
    if (!password) {
      setErrorPassword('Password is a required field.');
      valid = false;
    } else {
      setErrorPassword('');
    }
    if (!valid) {
      toast.error('Please fix the errors before proceeding.');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate login process (replace with your actual login logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success('Login successful (demo).');
    } catch (error) {
      toast.error('Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* TOP-LEFT LOGO/NAME */}
      <div className="absolute top-4 left-6 flex items-center space-x-2">
        <Link to="/">
          {/* SVG Logo */}
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

      {/* LEFT COLUMN (LOGIN FORM) */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="max-w-sm w-full">
          {/* Heading */}
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
            Sign in
          </h2>

          {/* Google Sign-In Button */}
          <div className="space-y-4">
            <button className="w-full flex items-center border border-gray-300 rounded-lg py-2.5 px-4 hover:bg-gray-50 transition">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="mx-auto text-gray-700 font-medium">
                Sign in with Google
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Email & Password Fields */}
          <div>
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
            <input
              type="password"
              placeholder="Password"
              className={`w-full border ${
                errorPassword ? 'border-red-500' : 'border-gray-300'
              } rounded-lg p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 mb-1`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorPassword && <p className="text-red-500 text-xs mt-1">{errorPassword}</p>}

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-[#13544e] text-white font-medium py-2.5 rounded-lg hover:bg-green-700 transition disabled:opacity-50 mt-4"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6 text-gray-600">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-[#13544e] hover:underline">
              Sign up here
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN (Animated Text) */}
      <div className="w-full md:w-1/2 bg-[#13544e] text-white flex items-center justify-center p-8">
        <div className="max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            <Typewriter
              words={[
                'Intelligent Proposal Generator',
                'Generate your AI proposal',
                'Boost your productivity',
                'Client History Analysis',
                'Dynamic Content Customization'
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </div>
      </div>

      {/* Toast Container for Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;








// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleEmailLogin = async () => {
//     if (!email) {
//       setMessage('Please enter a valid email address.');
//       return;
//     }

//     setIsLoading(true);
//     setMessage('');

//     try {
//       // Simulate sending a magic link
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       setMessage('Magic link sent to your email. Please check your inbox.');
//     } catch (error) {
//       setMessage('Failed to send magic link. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center justify-center">
//       <div className="w-full max-w-sm px-4">
//         {/* Welcome Header */}
//         <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
//           Welcome Back
//         </h2>

//         {/* Social Buttons */}
//         <div className="space-y-4">
//           <button className="w-full flex items-center border border-gray-300 rounded-lg py-2.5 pl-3 pr-4 hover:bg-gray-50 transition">
//             <img
//               src="https://www.svgrepo.com/show/355037/google.svg"
//               alt="Google"
//               className="w-5 h-5"
//             />
//             <span className="ml-10 text-gray-700 font-medium">
//               Continue with Google
//             </span>
//           </button>
//         </div>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-grow h-px bg-gray-300"></div>
//           <span className="px-4 text-sm text-gray-500">OR</span>
//           <div className="flex-grow h-px bg-gray-300"></div>
//         </div>

//         {/* Email Login */}
//         <div>
//           <input
//             type="email"
//             placeholder="Email address"
//             className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button
//             onClick={handleEmailLogin}
//             disabled={isLoading}
//             className="w-full bg-green-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
//           >
//             {isLoading ? 'Sending...' : 'Send Magic Link'}
//           </button>
//         </div>

//         {/* Status Message */}
//         {message && (
//           <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
//         )}

//         {/* Footer */}
//         <div className="text-center mt-6 text-gray-600">
//           Don’t have an account?{' '}
//           <a href="/signup" className="text-blue-600 hover:underline">
//             Sign up
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





