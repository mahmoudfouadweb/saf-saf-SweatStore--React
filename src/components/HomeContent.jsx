import Coffee from "./Coffee";
import Feature from "./Feature";
import Glaty from "./Glaty";
import IceCream from "./IceCream";
import JoinUs from "./JoinUs";
import Blog from "./Blog";
import Testimonials from "./Testimonials";

const HomeContent = () => {
  return (
    <main className="home-content">
      <Feature />
      <Glaty />
      <IceCream />
      <Coffee />
      <Testimonials />
      <JoinUs />
      <Blog />
    </main>
  );
};

export default HomeContent;
