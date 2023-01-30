import Coffee from "./Coffee";
import Glaty from "./Glaty";
import IceCream from "./IceCream";
import JoinUs from "./JoinUs";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import ControlledAccordions from "./ControlledAccordions";
import Swiper from "./Swiper";
import Feature from "./Feature";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper";


import { heroImg } from "../itelities/photos";

const HomeContent = () => {
  return (
    <main className="home-content">
      <Feature />
      <Glaty />
      <IceCream />
      <Coffee />
      <ContactUs />
      <ControlledAccordions />
      <Testimonials />
      <JoinUs />
      <Blog />
    </main>
  );
};

export default HomeContent;
