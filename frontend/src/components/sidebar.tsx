// Sidebar.tsx
import React, { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import HamburgerMenu from './hamburger'; // Importing the HamburgerMenu component
import { Link } from '@reach/router';


const Sidebar: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>('user123'); // Placeholder username
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`bg-gray-800 text-white fixed top-0 left-0 p-4 ${isMobileMenuOpen ? 'w-full' : 'w-1/5 md:w-auto'} h-full flex flex-col items-start`}>
      {/* Hamburger Menu Component */}
      <HamburgerMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />

      {/* Profile Image and Username */}
      <div className={`${isMobileMenuOpen ? 'mb-2' : 'hidden md:flex items-center mb-2'}`}>
        <label htmlFor="profileImage" className="mr-2">
          <img
            src={profileImage || 'your_default_image_url.jpg'}
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          {/* File Input for Image */}
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
        {/* Username Display */}
        {username && (
          <p className="text-lg font-bold mx-auto">{username}</p>
        )}
        {/* Settings Icon */}
        <div className="ml-auto">
          <FontAwesomeIcon icon={faCog} className="w-6 h-6" />
        </div>
      </div>


      {/* Sidebar Sections */}
      <div className={`flex flex-col ${isMobileMenuOpen ? '' : 'hidden md:flex'}`}>
        {/* Clickable Links */}
        <Link to="/my-progress">My Progress</Link>
        <Link to="/saved" className="text-lg font-bold mb-2">Saved</Link>
        <Link to="/lessons" className="text-lg font-bold mb-2">Lessons</Link>
      </div>
    </div>
  );
};

export default Sidebar;
