import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
    

      <div className="flex flex-1 flex-col items-center px-10 py-10">
        <div className="w-full max-w-[512px]">
          <h1 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#0e141b] px-4 pb-3 pt-5">Log in</h1>
          <p className="text-base font-normal text-[#0e141b] px-4 pb-3">Log in to get started</p>

          {/* Email Input */}
          <div className="flex flex-col gap-4 px-4 py-3">
            <label className="w-full">
              <p className="text-base font-medium text-[#0e141b] pb-2">Email</p>
              <input
                type="email"
                className="w-full h-14 p-[15px] text-base font-normal text-[#0e141b] bg-slate-50 border border-[#d0dbe7] rounded-xl placeholder:text-[#4e7397] focus:outline-none focus:border-[#d0dbe7]"
                placeholder="Enter your email"
              />
            </label>
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-4 px-4 py-3">
            <label className="w-full">
              <p className="text-base font-medium text-[#0e141b] pb-2">Password</p>
              <input
                type="password"
                className="w-full h-14 p-[15px] text-base font-normal text-[#0e141b] bg-slate-50 border border-[#d0dbe7] rounded-xl placeholder:text-[#4e7397] focus:outline-none focus:border-[#d0dbe7]"
                placeholder="Enter your password"
              />
            </label>
          </div>

          {/* Log In Button */}
          <div className="flex px-4 py-3">
            <button className="w-full h-12 px-5 bg-[#1980e6] text-slate-50 text-base font-bold rounded-xl flex items-center justify-center">
              Log in
            </button>
          </div>

          {/* Alternative Login */}
          <p className="text-sm font-normal text-center text-[#4e7397] px-4 py-3">or</p>
          <div className="flex px-4 py-3">
            <button className="w-full h-12 px-5 bg-[#e7edf3] text-[#0e141b] text-base font-bold rounded-xl flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path>
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-sm font-normal text-center text-[#4e7397] px-4 py-3">Don't have an account?</p>
          <div className="flex px-4 py-3">
            <button className="w-full h-12 px-5 bg-[#e7edf3] text-[#0e141b] text-base font-bold rounded-xl flex items-center justify-center">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
