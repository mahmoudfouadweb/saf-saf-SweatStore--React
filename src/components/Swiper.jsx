import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCreative,
  EffectFade,
} from "swiper";
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

export default ({ photo, slidesPerView }) => {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        EffectFade,
        EffectCreative,
      ]}
      navigation
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      onSwiper={() => {}}
      onSlideChange={() => console.log("slide change")}
      autoplay={1000}
      allowSlideNext={true}
      allowSlidePrev={true}
      allowTouchMove={true}
      spaceBetween={100}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      className="swip "
    >
      {photo.map((item, idx) => (
        <SwiperSlide key={idx}>
          <img {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
