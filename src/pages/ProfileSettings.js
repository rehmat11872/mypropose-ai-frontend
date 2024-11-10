import React, { useState } from 'react';

export default function ProfileSettings() {
  const [settings, setSettings] = useState({
    name: '',
    email: '',
    password: '',
    notifications: true,
    darkMode: false,
    showProfilePublicly: true,
  });

  const [activeSection, setActiveSection] = useState('Account');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'Account':
        return (
          <div className="space-y-4">
            <label className="flex flex-col">
              <span className="font-medium text-gray-700">Name</span>
              <input
                type="text"
                name="name"
                value={settings.name}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              />
            </label>
          </div>
        );

      case 'Preferences':
        return (
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-medium text-gray-700 mr-3">Dark Mode</span>
              <button
                onClick={() => handleToggle('darkMode')}
                className={`w-10 h-6 flex items-center rounded-full p-1 ${
                  settings.darkMode ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`h-4 w-4 rounded-full bg-white transform transition-transform ${
                    settings.darkMode ? 'translate-x-4' : ''
                  }`}
                ></div>
              </button>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-gray-700 mr-3">Show Profile Publicly</span>
              <button
                onClick={() => handleToggle('showProfilePublicly')}
                className={`w-10 h-6 flex items-center rounded-full p-1 ${
                  settings.showProfilePublicly ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`h-4 w-4 rounded-full bg-white transform transition-transform ${
                    settings.showProfilePublicly ? 'translate-x-4' : ''
                  }`}
                ></div>
              </button>
            </div>
          </div>
        );

      case 'Notifications':
        return (
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-medium text-gray-700 mr-3">Email Notifications</span>
              <button
                onClick={() => handleToggle('notifications')}
                className={`w-10 h-6 flex items-center rounded-full p-1 ${
                  settings.notifications ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`h-4 w-4 rounded-full bg-white transform transition-transform ${
                    settings.notifications ? 'translate-x-4' : ''
                  }`}
                ></div>
              </button>
            </div>
          </div>
        );

      case 'Privacy':
        return (
          <div>
            <p className="text-gray-700">Manage your data and privacy settings here. Options include adjusting who can see your profile and deleting your account.</p>
          </div>
        );

      case 'Password Change':
        return (
          <div className="space-y-4">
            <label className="flex flex-col">
              <span className="font-medium text-gray-700">Current Password</span>
              <input
                type="password"
                className="mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium text-gray-700">New Password</span>
              <input
                type="password"
                className="mt-1 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              />
            </label>
          </div>
        );

      case 'My Plan':
        return (
          <div>
            <p className="text-gray-700">Your current plan: Free</p>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md">Upgrade to Pro</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col items-center p-8">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-6">Settings</h1>

        {/* Tab Navigation */}
        <nav className="flex space-x-4 mb-6">
          {['Account', 'Preferences', 'Notifications', 'Privacy', 'Password Change', 'My Plan'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`pb-2 font-medium ${
                activeSection === section ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
              }`}
            >
              {section}
            </button>
          ))}
        </nav>

        {/* Section Content */}
        <div>{renderContent()}</div>

        {/* Save Button */}
        <button className="w-full mt-8 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}
