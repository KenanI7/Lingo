import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/auth/sign-up.tsx";
import LoginPage from "./pages/auth/login.tsx";
import DashboardPage from "./pages/dash/dashboard.tsx";
import Profile from "./pages/subpages/profile.tsx";
import LessonsPage from "./pages/subpages/lessons.tsx";
import VocabularyPage from "./pages/subpages/vocabulary.tsx";
import SettingsPage from "./pages/subpages/settingsPage.tsx";
import FAQPage from "./pages/subpages/faq.tsx";
import Learn from "./pages/subpages/learn.tsx";
import ProtectedRoute from "./pages/auth/protectedRoute.tsx";

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
    element: <ProtectedRoute element={<DashboardPage />} />,
  },
  {
    path: "/profile",
    element: <ProtectedRoute element={<Profile />} />,
  },
  {
    path: "/lessons",
    element: <ProtectedRoute element={<LessonsPage />} />,
  },
  {
    path: "/learn",
    element: <ProtectedRoute element={<Learn />} />,
  },
  {
    path: "/vocabulary",
    element: <ProtectedRoute element={<VocabularyPage />} />,
  },
  {
    path: "/settings",
    element: <ProtectedRoute element={<SettingsPage />} />,
  },
  {
    path: "/faq",
    element: <ProtectedRoute element={<FAQPage />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
