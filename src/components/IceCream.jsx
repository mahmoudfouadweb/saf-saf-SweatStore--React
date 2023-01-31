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

import { bakePhotos, sweetsPhotos , drinkPhotos } from "../utilities/photos";
import { EffectCards } from "swiper";
import MenuSection from "./MenuSection";

const IceCream = () => {
  const [images, setImages] = useState([]);

  const clickHandler = (category) => {
    console.log("hi click handler");
    if(category === 'bake') setImages([...bakePhotos])
    if(category === 'sweets') setImages([...sweetsPhotos])
    if(category === 'drink') setImages([...drinkPhotos])
    else console.log('error here no category found');
    
    // if  (images.length === bakePhotos.length) setImages([])
    // if (images.length === sweetsPhotos.length) setImages([])
    // if (images.length === drinkPhotos.length) setImages([])

  };
  console.log(images);
  return (
    <section className="ice-cream">
      <h3 className="heading-3 bake">bake</h3>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        rewind={true}
       
      >
        {bakePhotos.map((item,id) => (
          <SwiperSlide key={id}  className="bake--box">
            <img src={item.src} alt={item.alt} onClick={() => clickHandler(item.category)} />
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
        {drinkPhotos.map((item,id) => (
          <SwiperSlide key={id}>
            <img src={item.src} alt={item.alt}  onClick={() => clickHandler(item.category)} />
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
        {sweetsPhotos.map((item,id) => (
          <SwiperSlide key={id}>
            <img src={item.src} alt={item.alt}  onClick={() => clickHandler(item.category)} />
          </SwiperSlide>
        ))}
      </Swiper>

      <MenuSection photos={images} />
    </section>
  );
};

export default IceCream;
