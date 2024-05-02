import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/ui/sidebar";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Sidebar /> 
      <div>
        <Button className="flex justify-center items-center margin-0" type="submit">
          Login
        </Button>
        <h1>suiiiiiiiiii</h1>
      </div>
    </div>
  );
};

export default DashboardPage;
