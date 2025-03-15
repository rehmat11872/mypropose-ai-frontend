// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AppRoutes from "./routest/AppRoutes";
import DashboardHeader from "./components/DashboardHeader";
import Footer from "./components/Footer";



const App = () => (
  <Router>
    <AppContent />
  </Router>
);

const AppContent = () => {
  const location = useLocation();  // This will work here, since it's inside Router

  // Check if the current route is the home page ("/")
  const isHomePage = location.pathname === "/";
  const isLogin = location.pathname === "/login";
  const isSignup = location.pathname === "/signup";

  // Define routes where Header and Footer should NOT appear
  const noHeaderFooterRoutes = ["/", "/login", "/signup", '/magic-link', '/verify-code', '/contact-us', '/about-us'];
  
  // Check if the current route matches any in the noHeaderFooterRoutes array
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);



  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeaderFooter  && <DashboardHeader />} {/* Only render Header if not on home page */}
      <main className="flex-grow">
        <AppRoutes />
      </main>
      {/* {!isHomePage && <Footer />}  */}
      {/* Only render Footer if not on home page */}
    </div>
  );
};

export default App;
