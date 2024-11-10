import React from 'react';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <div className="flex flex-1 flex-col items-center px-10 py-10">
        <div className="w-full max-w-[512px]">
          <h3 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#0e141b] px-4 pb-3 text-center">Create a free account</h3>

          {/* Email Input */}
          <div className="flex flex-col gap-4 px-4 py-3">
            <label className="w-full">
              <p className="text-base font-medium text-[#0e141b] pb-2">Email</p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full h-14 p-[15px] text-base font-normal text-[#0e141b] bg-slate-50 border border-[#d0dbe7] rounded-xl placeholder:text-[#4e7397] focus:outline-none"
              />
            </label>
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-4 px-4 py-3">
            <label className="w-full">
              <p className="text-base font-medium text-[#0e141b] pb-2">Password</p>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full h-14 p-[15px] text-base font-normal text-[#0e141b] bg-slate-50 border border-[#d0dbe7] rounded-xl placeholder:text-[#4e7397] focus:outline-none"
              />
            </label>
          </div>

          {/* Full Name Input */}
          <div className="flex flex-col gap-4 px-4 py-3">
            <label className="w-full">
              <p className="text-base font-medium text-[#0e141b] pb-2">Full name</p>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full h-14 p-[15px] text-base font-normal text-[#0e141b] bg-slate-50 border border-[#d0dbe7] rounded-xl placeholder:text-[#4e7397] focus:outline-none"
              />
            </label>
          </div>

          {/* Skills Input */}
          <div className="flex flex-col gap-4 px-4 py-3">
            <label className="w-full">
              <p className="text-base font-medium text-[#0e141b] pb-2">Skills</p>
              <textarea
                placeholder="What are your skills? (e.g. web design, proofreading)"
                className="w-full min-h-36 p-[15px] text-base font-normal text-[#0e141b] bg-slate-50 border border-[#d0dbe7] rounded-xl placeholder:text-[#4e7397] resize-none focus:outline-none"
              ></textarea>
            </label>
          </div>

          {/* Industry Select */}
          <div className="flex flex-col gap-4 px-4 py-3">
            <label className="w-full">
              <p className="text-base font-medium text-[#0e141b] pb-2">Industry</p>
              <select
                className="w-full h-14 p-[15px] text-base font-normal text-[#0e141b] bg-slate-50 border border-[#d0dbe7] rounded-xl placeholder:text-[#4e7397] focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>Select an industry</option>
                <option value="industry1">Industry One</option>
                <option value="industry2">Industry Two</option>
                <option value="industry3">Industry Three</option>
              </select>
            </label>
          </div>

          {/* Role Select */}
          <div className="flex flex-col gap-4 px-4 py-3">
            <label className="w-full">
              <p className="text-base font-medium text-[#0e141b] pb-2">Role</p>
              <select
                className="w-full h-14 p-[15px] text-base font-normal text-[#0e141b] bg-slate-50 border border-[#d0dbe7] rounded-xl placeholder:text-[#4e7397] focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>Select a role</option>
                <option value="role1">Role One</option>
                <option value="role2">Role Two</option>
                <option value="role3">Role Three</option>
              </select>
            </label>
          </div>

          {/* Sign Up Button */}
          <div className="flex px-4 py-3">
            <button className="w-full h-10 px-4 bg-[#1980e6] text-slate-50 text-sm font-bold rounded-xl flex items-center justify-center">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
