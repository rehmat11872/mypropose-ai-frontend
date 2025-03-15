// src/App.js
import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routest/AppRoutes";
import DashboardHeader from "./components/DashboardHeader";
import Footer from "./components/Footer";


const App = () => (
  <Router>
    <AppContent />
  </Router>
);

const AppContent = () => {
  const location = useLocation();

  // List of routes where header/footer should show (valid routes)
  const validRoutes = [
    "/",
    "/dashboard",
    "/add-project",
    "/view-projects",
    "/proposal-generator",
    "/about-us",
    "/contact-us",
    "/profile-settings",
    "/client-anaylsis",
    "/login",
    "/signup",
    "/magic-link",
    "/verify-code",
    "/forgot-password"
  ];

  // Existing list of routes where header/footer should NOT appear
  const noHeaderFooterRoutes = [
    "/",
    "/login",
    "/signup",
    "/magic-link",
    "/verify-code",
    "/contact-us",
    "/about-us",
    "/forgot-password"
  ];

  // If the current path is not a valid route, it is a 404 page.
  const isValidRoute = validRoutes.includes(location.pathname);

  // Hide header/footer if it's either a no-header/footer route OR a 404 (invalid route)
  const hideHeaderFooter = !isValidRoute || noHeaderFooterRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeaderFooter && <DashboardHeader />}
      <main className="flex-grow">
        <AppRoutes />
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
