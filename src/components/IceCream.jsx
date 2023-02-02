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

// import { bakePhotos, sweetsPhotos , drinkPhotos } from "../utilities/photos";
import { EffectCards } from "swiper";
import MenuSection from "./MenuSection";

const IceCream = ({ photos }) => {
  console.log(photos);
  const [images, setImages] = useState([]);

  const clickHandler = (category) => {
    console.log("hi click handler");
    // const filtredBake = photos.filter((item) => item.category === category);
    console.log(category);
    if (category === "bake") setImages([...filtredBake]);
    if (category === "sweets") setImages([...filtredBake]);
    if (category === "drink") setImages([...filtredBake]);
    else console.log("error here no category found");
  };
  // console.log(images);
  return (
    <section className="ice-cream">
      <h3 className="heading-3 bake">bake</h3>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        rewind={true}
      >
        {photos.filter((item) => item.category === 'bake').map((item, id) => (
          <SwiperSlide key={"bake" + id} className="bake--box">
            <img
              src={item.src}
              alt={item.alt}
              onClick={() => clickHandler(item.category)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <h3 className="heading-3 drinks">drinks and ice cream</h3>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        rewind={true}
        className="drinks--box"
      >
        {photos.filter((item) => item.category === 'drink').map((item, id) => (
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
        {photos.filter((item) => item.category === 'sweets').map((item, id) => (
          <SwiperSlide key={"Sweets" + id}>
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
