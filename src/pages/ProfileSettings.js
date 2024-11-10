// src/pages/ProfileSettings.js
import React, { useState } from 'react';

const ProfileSettings = () => {
  const [profile, setProfile] = useState({ name: '', email: '', notifications: false });

  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {['name', 'email'].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-gray-700 capitalize mb-2">{field}</label>
            <input
              type="text"
              name={field}
              value={profile[field]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={profile.notifications}
            onChange={() => setProfile({ ...profile, notifications: !profile.notifications })}
            className="mr-2"
          />
          Enable notifications
        </label>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Save Changes</button>
      </div>
    </div>
  );
};

export default ProfileSettings;
