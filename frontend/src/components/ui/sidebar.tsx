import React, { useState } from "react";
import { FaUser, FaBook, FaComments, FaCog, } from "react-icons/fa"; 
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("profile");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="sidebar p-4 flex flex-col justify-between fixed left-0 top-0 bottom-0 bg-blue-200" style={{ width: "20%", minHeight: "100vh" }}>
      <div>
        <div className="profile-section mb-4">
          <div className="profile-image">
            <img src="./images" alt="Profile" /> 
          </div>
          <div className="username">
            John Doe
          </div>
        </div>
  
        <div className="menu">
          <Link to="/profile" className={`menu-item ${selectedItem === "profile" ? "active" : ""}`} onClick={() => handleItemClick("profile")}>
            <div className="flex items-center py-2 px-3 rounded-lg hover:bg-blue-600">
              <FaUser className="mr-2" /> My Profile
            </div>
          </Link>
          <Link to="/lessons" className={`menu-item ${selectedItem === "lessons" ? "active" : ""}`} onClick={() => handleItemClick("lessons")}>
            <div className="flex items-center py-2 px-3 rounded-lg hover:bg-blue-600">
              <FaBook className="mr-2" /> Lessons
            </div>
          </Link>
          <Link to="/free-conversation" className={`menu-item ${selectedItem === "free-conversation" ? "active" : ""}`} onClick={() => handleItemClick("free-conversation")}>
            <div className="flex items-center py-2 px-3 rounded-lg hover:bg-blue-600">
              <FaComments className="mr-2" /> Free Conversation Lesson
            </div>
          </Link>
          <Link to="/vocabulary" className={`menu-item ${selectedItem === "vocabulary" ? "active" : ""}`} onClick={() => handleItemClick("vocabulary")}>
            <div className="flex items-center py-2 px-3 rounded-lg hover:bg-blue-600">
              <FaComments className="mr-2" /> Vocabulary
            </div>
          </Link>
        </div>
      </div>
  
      <div className="flex justify-between">
        <Link to="/faq" className="flex items-center py-2 px-3 rounded-lg hover:bg-blue-600">
          FAQ
        </Link>
        <Link to="/settings" className="flex items-center py-2 px-3 rounded-lg hover:bg-blue-600">
          <FaCog className="mr-2" /> Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
