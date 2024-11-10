import React from "react";
import { Link } from "react-router-dom";


const Home = () => (
  <div className="bg-white min-h-screen flex flex-col">
    {/* Header */}
    <header className="border-b border-gray-200 px-10 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4 text-gray-900">
        <div className="w-8 h-8">
          <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold">MyPropose.ai</h2>
      </div>
      <div className="flex gap-2">
        <Link to="/dashboard">
        <button className="bg-gray-100 text-gray-900 font-bold px-4 py-2 rounded-xl hover:bg-gray-200">
          Dashboard
        </button>
        </Link>
        <button className="bg-gray-100 text-gray-900 font-bold px-4 py-2 rounded-xl hover:bg-gray-200 flex items-center gap-2">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48Z"></path>
          </svg>
        </button>
      </div>
    </header>

    {/* Main Content */}
    <main className="flex flex-1 flex-col items-center px-10 py-10">
      <section className="max-w-4xl flex flex-col md:flex-row gap-8 items-center">
        {/* Hero Image */}
        <div
          className="bg-cover bg-center w-full h-64 md:w-1/2 rounded-xl"
          style={{
            backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/c8429098-2409-4fa4-a1d3-44fe8edcc331.png')",
          }}
        ></div>

        {/* Hero Text */}
        <div className="flex flex-col gap-4 text-left">
          <h1 className="text-gray-900 text-4xl font-black">Welcome to MyPropose.ai</h1>
          <p className="text-gray-600 text-lg">
            Crafting proposals is easier than ever with our AI-powered writing assistant. Get started in minutes by
            signing up or logging in.
          </p>
          <div className="flex gap-3">
          <Link to="/signup-page">
            <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-xl hover:bg-blue-600 transition">
              Sign Up
            </button>
            </Link>
            <Link to="/login-page">
              <button className="bg-gray-100 text-gray-900 font-bold py-2 px-6 rounded-xl hover:bg-gray-200 transition">Log In</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col items-center gap-10 mt-10">
        <h2 className="text-gray-900 text-3xl font-bold text-center">Features that make MyPropose.ai great</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Real-time collaboration",
              description: "Work with your team on the same proposal in real time. No more messy version control.",
              image: "https://cdn.usegalileo.ai/sdxl10/54a35ad5-8fa9-455e-a5e6-d3f38483c915.png",
            },
            {
              title: "Smart proposal templates",
              description: "Get started with a wide range of proposal templates. Our AI will help you fill in the blanks.",
              image: "https://cdn.usegalileo.ai/stability/b790d2b6-32f8-4205-8185-88c4f830e551.png",
            },
            {
              title: "Automated scheduling",
              description: "Set up a meeting in seconds. We'll find the best time for everyone.",
              image: "https://cdn.usegalileo.ai/stability/46c99cb1-a8bd-4d6c-b7b3-dc846badb6b7.png",
            },
            {
              title: "Instant feedback",
              description: "Get instant suggestions on how to improve your proposals. Our AI will help you write better, faster.",
              image: "https://cdn.usegalileo.ai/stability/618712df-5d77-4cd4-ae86-2eb0eb978c05.png",
            },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div
                className="bg-cover bg-center w-full h-32 rounded-xl"
                style={{ backgroundImage: `url('${feature.image}')` }}
              ></div>
              <h3 className="text-gray-900 font-medium">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  </div>
);

export default Home;
