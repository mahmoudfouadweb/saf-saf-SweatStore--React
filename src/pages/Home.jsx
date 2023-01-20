import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import PageTitle from "../components/PageTitle";
import { useState } from "react";

const Home = () => {
  const [isPage, setIsPage] = useState('about us')
  
  const pageTitleHandler = () => {
    setIsPage('pageTitle')
  }
  return (
    <div className="home">
      <Navbar />
      {/* <HomeContent /> */}
      <PageTitle title={isPage}/>
      <ContactUs />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
