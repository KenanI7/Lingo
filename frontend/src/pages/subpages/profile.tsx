import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "@/components/ui/sidebar";
import { FaUser, FaEnvelope, FaChartBar, FaCamera } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/api/user";

const Profile: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  const token = localStorage.getItem("token");

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(token),
  });

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await axios.get("/api/progress");
        setProgress(response.data.progress);
      } catch (error) {
        console.error("Error fetching progress:", error);
      }
    };

    fetchProgress();
  }, []);

  return (
    <div className="flex h-screen justify-end">
      <Sidebar />
      <div className="flex flex-col justify-center items-center bg-gray-100 p-8 rounded-lg shadow-lg w-[90%]">
        <h1 className="text-7xl font-semibold mb-8 text-primary-accent">
          Welcome home learner!
        </h1>
        <div className="w-full bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-md flex-1">
              <h2 className="text-3xl font-semibold mb-4">
                Profile Information
              </h2>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <FaUser className="w-8 h-8 mr-2" />
                  <span className="font-bold text-lg">Name:</span>
                  <span className="text-lg"> {user.username}</span>
                </div>

                <div className="flex items-center">
                  <FaUser className="w-8 h-8 mr-2" />
                  <span className="font-bold text-lg">Username:</span>
                  <span className="text-lg"> {user.username}</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="w-8 h-8 mr-2" />
                  <span className="font-bold text-lg">Email:</span>
                  <span className="text-lg"> {user.email}</span>
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
                <span className="text-lg">{/* Add the chart */}</span>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4">
                View Completed Lessons
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="/help"
            className="text-primary-accent font-semibold hover:underline"
          >
            Need help? Contact support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
