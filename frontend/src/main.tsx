import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/auth/sign-up.tsx";
import LoginPage from "./pages/auth/login.tsx";
import DashboardPage from "./pages/dash/dashboard.tsx";
import Profile from "./pages/subpages/profile.tsx";
import Lessons from "./pages/subpages/lessons.tsx"
import LessonsPage from "./pages/subpages/lessons.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path : "/profile",
    element: <Profile/>
  },
  {
    path : "/lessons",
    element: <LessonsPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
