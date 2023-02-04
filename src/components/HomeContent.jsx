import Coffee from "./Coffee";
import Glaty from "./Glaty";
import IceCream from "./IceCream";
import JoinUs from "./JoinUs";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import ControlledAccordions from "./ControlledAccordions";
import Feature from "./Feature";

import { bakePhotos, drinkPhotos, sweetsPhotos } from "../utilities/photos";

const HomeContent = () => {
  return (
    <main className="home-content">
      <Feature />
      <Glaty />
      <Coffee />
      <IceCream photos={[...bakePhotos, ...sweetsPhotos, ...drinkPhotos]} />
      <ContactUs />
      <ControlledAccordions />
      <Testimonials />
      <JoinUs />
      <Blog />
    </main>
  );
};

export default HomeContent;
