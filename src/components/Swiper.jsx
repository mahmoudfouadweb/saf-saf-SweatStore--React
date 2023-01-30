import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";

import "swiper/scss";
import "swiper/scss/a11y";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/scrollbar";

import slider1 from "../assets/slider/1.jpg";
import slider2 from "../assets/slider/2.jpg";
import slider3 from "../assets/slider/3.jpg";
import slider4 from "../assets/slider/4.jpg";
import slider5 from "../assets/slider/5.jpg";
import slider6 from "../assets/slider/6.jpg";
import slider7 from "../assets/slider/7.jpg";
import slider8 from "../assets/slider/8.jpg";
import slider9 from "../assets/slider/9.jpg";

const heroImg = [
  { src: slider1, className: "slider__img", alt: "saf saf gallery" },
  { src: slider2, className: "slider__img", alt: "saf saf gallery" },
  { src: slider3, className: "slider__img", alt: "saf saf gallery" },
  { src: slider4, className: "slider__img", alt: "saf saf gallery" },
  { src: slider5, className: "slider__img", alt: "saf saf gallery" },
  { src: slider6, className: "slider__img", alt: "saf saf gallery" },
  { src: slider7, className: "slider__img", alt: "saf saf gallery" },
  { src: slider8, className: "slider__img", alt: "saf saf gallery" },
  { src: slider9, className: "slider__img", alt: "saf saf gallery" },
  { src: slider1, className: "slider__img", alt: "saf saf gallery" },
  { src: slider2, className: "slider__img", alt: "saf saf gallery" },
  { src: slider3, className: "slider__img", alt: "saf saf gallery" },
  { src: slider4, className: "slider__img", alt: "saf saf gallery" },
  { src: slider5, className: "slider__img", alt: "saf saf gallery" },
  { src: slider6, className: "slider__img", alt: "saf saf gallery" },
  { src: slider7, className: "slider__img", alt: "saf saf gallery" },
  { src: slider8, className: "slider__img", alt: "saf saf gallery" },
  { src: slider9, className: "slider__img", alt: "saf saf gallery" },
];

export default () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="hero">
      <h2 className="hero__title">
        sweet pistachio <br /> ice cream
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={1}
        navigation
        zoom={{ autoplay: 1000 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        slidesToShow={1}
        autoplay={true}
        allowSlideNext={true}
        allowSlidePrev={true}
        allowTouchMove={true}
        fadeEffect={{
          effect: "fade",
          fadeEffect: {
            crossFade: true,
          },
        }}
        // autoHeight={false}
        className="swip "
      >
        {heroImg.map((item) => (
          <SwiperSlide>
            <img {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
