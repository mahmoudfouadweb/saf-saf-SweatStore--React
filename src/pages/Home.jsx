import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <HomeContent /> */}
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
