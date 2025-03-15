// src/routes/AppRoutes.js
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import AddProjects from "../pages/AddProjects";
import ViewProjects from "../pages/ViewProjects";
import ProposalGenerator from "../pages/ProposalGenerator";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ProfileSettings from "../pages/ProfileSettings";
import ClientAnalysis from "../pages/ClientAnalysis";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MagicLinkForm from "../pages/MagicLinkForm";
import VerifyCode from "../pages/VerifyCode";
import ScrollToTop from "../common/ScrollToTop";

const AppRoutes = () => (
    <>
    <ScrollToTop />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-project" element={<AddProjects />} />
        <Route path="/view-projects" element={<ViewProjects />} />
        <Route path="/proposal-generator" element={<ProposalGenerator />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/client-anaylsis" element={<ClientAnalysis />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/magic-link" element={<MagicLinkForm />} />
        <Route path="/verify-code" element={<VerifyCode />} />
    </Routes>
    </>
);

export default AppRoutes;
