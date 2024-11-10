// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AppRoutes from "./routest/AppRoutes";
import Header from "./components/Header";
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

  return (
    <div className="flex flex-col min-h-screen">
      {!isHomePage && <Header />} {/* Only render Header if not on home page */}
      <main className="flex-grow">
        <AppRoutes />
      </main>
      {/* {!isHomePage && <Footer />}  */}
      {/* Only render Footer if not on home page */}
    </div>
  );
};

export default App;
