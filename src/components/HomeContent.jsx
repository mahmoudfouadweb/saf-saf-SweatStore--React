import Coffee from "./Coffee";
import Feature from "./Feature";
import Glaty from "./Glaty";
import IceCream from "./IceCream";
import JoinUs from "./JoinUs";
import Blog from "./Blog";
import Testemonials from "./Testemonials";

const HomeContent = () => {
  return (
    <main className="home-content">
      <Feature />
      <Glaty />
      <IceCream />
      <Coffee />
      <Testemonials />
      <JoinUs />
      <Blog />
    </main>
  );
};

export default HomeContent;
