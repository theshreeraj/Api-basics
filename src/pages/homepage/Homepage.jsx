import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Hero from "../../component/hero/Hero";
import LatestCollection from "../../component/latestCollection/LatestCollection";
import BestSeller from "../../component/bestSeller/BestSeller";
import Features from "../../component/features/Features";
import Testimonial from "../../component/testimonial/Testimonial";
import Subscribe from "../../component/subscribe/Subscribe";
import Footer from "../../component/footer/Footer";
import Banner from "../../component/banner/Banner";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Features />
      <Testimonial />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Homepage;
