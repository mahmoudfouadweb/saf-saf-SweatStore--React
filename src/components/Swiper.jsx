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
        autoHeight={false}
        className="swip "
        
      >
        <SwiperSlide>
          <img src={slider1} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider7} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider8} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider9} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider7} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider8} alt="" className="slider__img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider9} alt="" className="slider__img" />
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
};
