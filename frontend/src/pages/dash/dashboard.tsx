import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const dashboardPage = () => {
  const navigate = useNavigate();


  return (
    <div>
              <Button className="flex justify-center items-center margin-0" type="submit">
                Login
              </Button>
<h1>suiiiiiiiiii</h1>
    </div>

    

  );
};


export default dashboardPage;
