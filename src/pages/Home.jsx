import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default Home;
