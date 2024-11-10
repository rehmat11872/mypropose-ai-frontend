import React from 'react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-slate-50 text-[#0e141b] font-sans flex flex-col items-center">
      <div className="w-full max-w-5xl p-6 flex flex-col items-center">
        {/* Page Header */}
        <h1 className="text-4xl font-bold leading-tight text-center mb-6">Contact Us</h1>
        <p className="text-lg text-center text-gray-600 max-w-2xl mb-10">
          We're here to help! Reach out to us with any questions, feedback, or inquiries.
        </p>

        {/* Contact Form Section */}
        <section className="w-full p-6 bg-white rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-base font-medium">Name</span>
                <input
                  type="text"
                  className="form-input mt-1 p-3 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200"
                  placeholder="Your full name"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-base font-medium">Email</span>
                <input
                  type="email"
                  className="form-input mt-1 p-3 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200"
                  placeholder="Your email address"
                />
              </label>
            </div>
            <label className="flex flex-col">
              <span className="text-base font-medium">Subject</span>
              <input
                type="text"
                className="form-input mt-1 p-3 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200"
                placeholder="Subject of your message"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-base font-medium">Message</span>
              <textarea
                className="form-textarea mt-1 p-3 h-32 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200"
                placeholder="Type your message here..."
              ></textarea>
            </label>
            <button className="w-full mt-4 p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Information Section */}
        <section className="w-full p-6 bg-white rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-medium">Address</h3>
              <p className="text-gray-600">
                123 MyPropose.ai Street, Suite 100 <br />
                City, State, ZIP Code
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Phone</h3>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium">Email</h3>
              <p className="text-gray-600">support@mypropose.ai</p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with an actual map embed URL */}
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019944942736!2d-122.40355868468106!3d37.77492977975814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814b8f8e7c97%3A0xa5e8b4c7bd29514f!2sMyPropose.ai!5e0!3m2!1sen!2sus!4v1614264165913!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
