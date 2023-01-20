import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <HomeContent /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
