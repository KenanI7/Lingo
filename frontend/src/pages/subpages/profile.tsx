import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "@/components/ui/sidebar";
import { FaUser, FaEnvelope, FaKey, FaChartBar, FaCamera } from "react-icons/fa"; 

const Profile: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchProgress = async () => {
      try {
        const response = await axios.get("/api/progress");
        setProgress(response.data.progress);
      } catch (error) {
        console.error("Error fetching progress:", error);
      }
    };

    fetchUserData();
    fetchProgress();
  }, []);

  const handleResetPassword = async () => {
    try {
      await axios.post("/api/reset-password");
      alert("Password reset successful!");
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("An error occurred while resetting the password.");
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen justify-end">
      <Sidebar />
      <div className="flex flex-col justify-center items-center bg-gray-100 p-8 rounded-lg shadow-lg" style={{ width: "80%", minHeight: "100vh" }}>
        <h1 className="text-7xl font-semibold mb-8 text-primary-accent">Welcome home learner!</h1>
        <div className="w-full bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-md flex-1">
              <h2 className="text-3xl font-semibold mb-4">Profile Information</h2>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <FaUser className="w-8 h-8 mr-2" />
                  <span className="font-bold text-lg">Name:</span>
                  <span className="text-lg">{userData.name}</span>
                </div>
                <div className="flex items-center">
                  <FaUser className="w-8 h-8 mr-2" />
                  <span className="font-bold text-lg">Surname:</span>
                  <span className="text-lg">{userData.surname}</span>
                </div>
                <div className="flex items-center">
                  <FaUser className="w-8 h-8 mr-2" />
                  <span className="font-bold text-lg">Username:</span>
                  <span className="text-lg">{userData.username}</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="w-8 h-8 mr-2" />
                  <span className="font-bold text-lg">Email:</span>
                  <span className="text-lg">{userData.email}</span>
                </div>
                <div className="flex items-center">
                  <FaCamera className="w-8 h-8 mr-2" />
                  <span className="font-bold text-lg">Profile Picture:</span>
                  <span className="text-lg">{/* Add profile picture here */}</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md flex-1">
              <h2 className="text-3xl font-semibold mb-4">Progress Report</h2>
              <div className="flex items-center">
                <span className="font-bold text-lg">Lessons Completed:</span>
                <span className="ml-2 text-lg">{progress}/10</span>
              </div>
              <div className="flex items-center mt-4">
                <FaChartBar className="w-8 h-8 mr-2" />
                <span className="font-bold text-lg">Performance Chart:</span>
                <span className="text-lg">{/* Add performance chart here */}</span>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4">
                View Completed Lessons
              </button>
            </div>
            <div className="rounded-lg p-6 col-span-2">
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center"
                  onClick={handleResetPassword}
                >
                  <FaKey className="w-5 h-5 mr-2" />
                  Reset Password
                </button>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4">
                Change Profile Picture
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a href="/help" className="text-primary-accent font-semibold hover:underline">
            Need help? Contact support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
