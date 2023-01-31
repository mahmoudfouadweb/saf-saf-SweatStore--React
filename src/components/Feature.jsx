import { A11y, EffectFade, Navigation, Pagination, Scrollbar,EffectCreative } from "swiper";
import { heroImg } from "../utilities/photos";
import Swiper from "./Swiper";

const Feature = () => {
  return (
    <section className="hero">
      <h2 className="hero__title">
        sweet pistachio <br /> ice cream
      </h2>

      <Swiper
        photo={heroImg}      />
    </section>
  );
};

export default Feature;
