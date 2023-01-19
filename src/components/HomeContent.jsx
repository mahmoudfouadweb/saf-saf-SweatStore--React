import Coffee from "./Coffee";
import Feature from "./Feature";
import Footer from "./Footer";
import Glaty from "./Glaty";
import IceCream from "./IceCream";
import JoinUs from "./JoinUs";
import Blog from "./Blog";

const HomeContent = () => {
  return (
    <main className="home-content">
      <Feature />
      <Glaty />
      <IceCream />
      <Coffee />
      <JoinUs />
      <Blog />
      <Footer />
    </main>
  );
};

export default HomeContent;
