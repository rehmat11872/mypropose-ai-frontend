import React from "react";
import { Link } from "react-router-dom";
import Hero from '../home_component/Hero';
import Features from '../home_component/Features';
import Pricing from '../home_component/Pricing';
import Testimonials from '../home_component/Testimonials';
import FAQ from '../home_component/FAQ';
import Header from '../home_component/Header';
import Footer from '../home_component/Footer'


const Home = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};
export default Home;
