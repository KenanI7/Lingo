import React, { useState } from 'react';
import Sidebar from '@/components/ui/sidebar';

const Settings: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleProfilePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setProfilePhoto(selectedFile);
    }
  };

  const handleChangePassword = async () => {
    try {
      throw new Error("Password change failed!");
      alert("Password change successful!");
    } catch (error) {
      console.error("Error changing password:", error);
      alert("An error occurred while resetting the password.");
    }
  };

  const handleChangeEmail = async () => {
    try {
      throw new Error("Email change failed!");
      alert("Email change successful!");
    } catch (error) {
      console.error("Error changing email:", error);
      alert("An error occurred while resetting the email.");
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col justify-center items-center bg-gray-100 p-8 rounded-lg shadow-lg" style={{ width: "80%", minHeight: "100vh" }}>
        <h1 className="text-3xl font-semibold mb-4">Settings</h1>
        <div>
          <h2>Theme</h2>
          <label>
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === 'light'}
              onChange={toggleTheme}
            />{' '}
            Light
          </label>
          <label>
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />{' '}
            Dark
          </label>
        </div>
        <div>
          <h2>Profile Photo</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePhotoChange}
          />
          {profilePhoto && (
            <img
              src={URL.createObjectURL(profilePhoto)}
              alt="Profile"
              style={{ width: '150px', height: 'auto', marginTop: '10px' }}
            />
          )}
        </div>
        <div style={{ marginTop: '20px' }}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-2" onClick={handleChangePassword}>Change Password</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg" onClick={handleChangeEmail}>Change Email</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
