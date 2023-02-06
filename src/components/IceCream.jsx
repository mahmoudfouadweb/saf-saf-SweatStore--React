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

import { useState } from "react";

import { EffectCards } from "swiper";
import MenuSection from "./MenuSection";

const IceCream = ({ photos }) => {
  const [images, setImages] = useState([]);

  const clickHandler = (category) =>
    setImages(photos.filter((item) => item.category === category));
  return (
    <section className="ice-cream">
      <h3 className="heading-3 bake">bake</h3>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        rewind={true}
        className="bake--box"
      >
        {photos
          .filter((item) => item.category === "bakes")
          .map((item, id) => (
            <SwiperSlide key={"bakes" + id} className="bake--box">
              <img
                src={item.src}
                alt={item.alt}
                onClick={() => clickHandler(item.category)}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <h3 className="heading-3 drinks">drinks ice</h3>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        rewind={true}
        className="drinks--box"
      >
        {photos
          .filter((item) => item.category === "drink")
          .map((item, id) => (
            <SwiperSlide key={"drinks and ice cream" + id}>
              <img
                src={item.src}
                alt={item.alt}
                onClick={() => clickHandler(item.category)}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <h3 className="heading-3 Sweets">Sweets</h3>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        rewind={true}
        className="Sweets--box"
      >
        {photos
          .filter((item) => item.category === "sweet")
          .map((item, id) => (
            <SwiperSlide key={"Sweet" + id}>
              <img
                src={item.src}
                alt={item.alt}
                onClick={() => clickHandler(item.category)}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <MenuSection photos={images} />
    </section>
  );
};

export default IceCream;
