import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/scss";
import "swiper/scss/a11y";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "swiper/css/effect-cards";

// import "swiper/css/bundle";

import { iceCreamSection } from "../itelities/photos";
import { EffectCards } from "swiper";

const IceCream = () => {
  return (
    <section className="ice-cream">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {iceCreamSection.map((item) => (
          <SwiperSlide>
            <img {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default IceCream;
