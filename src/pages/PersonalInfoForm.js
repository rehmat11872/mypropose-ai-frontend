import React, { useState } from "react";
import { motion } from "framer-motion";

const PersonalInfoForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    education: "",
    profession: "",
    certifications: "",
    upworkURL: "",
    githubURL: "",
    skills: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    // from-blue-500 to-purple-600
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r  text-white">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full  bg-white text-gray-800 shadow-xl rounded-xl overflow-hidden">
          {/* Header with Progress */}
          <div className="flex items-center bg-gradient-to-r from-blue-600 to-purple-500 p-6">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white">
                {step === 1 ? "Personal Information" : "Add Your Skills"}
              </h1>
            </div>
            <div className="w-1/2 bg-gray-200 rounded-lg overflow-hidden h-2">
              <motion.div
                className="h-full bg-blue-600"
                animate={{ width: step === 1 ? "50%" : "100%" }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Step Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="p-8"
          >
            {step === 1 ? (
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Fill in your personal details to get started.
                </p>
                {[
                  { label: "Full Name", name: "fullName", type: "text" },
                  { label: "Education", name: "education", type: "text" },
                  { label: "Profession", name: "profession", type: "text" },
                  { label: "Certifications", name: "certifications", type: "text" },
                  { label: "Upwork URL", name: "upworkURL", type: "url" },
                  { label: "GitHub URL", name: "githubURL", type: "url" },
                ].map(({ label, name, type }) => (
                  <div className="mb-6" key={name}>
                    <label className="block text-lg font-medium text-gray-700">
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleInputChange}
                      className="mt-2 w-full border rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
                      placeholder={`Enter your ${label.toLowerCase()}`}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Add your skills to showcase your expertise.
                </p>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="Describe your skills and expertise"
                  rows="6"
                  className="w-full border rounded-lg p-4 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Back
              </button>
              {step === 1 ? (
                <button
                  onClick={nextStep}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={() => alert("Going to Dashboard!")}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Go to Dashboard
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
