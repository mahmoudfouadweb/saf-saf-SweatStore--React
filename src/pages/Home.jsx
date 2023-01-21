import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import PageTitle from "../components/PageTitle";
import { useState } from "react";
import GalleryPage from "./GalleryPage";

const Home = () => {
  return (
    <div className="home">
      <HomeContent />
    </div>
  );
};

export default Home;
