import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';



import slider1 from '../assets/slider/1.jpg'
import slider2 from '../assets/slider/2.jpg'
import slider3 from '../assets/slider/3.jpg'
import slider4 from '../assets/slider/4.jpg'
import slider5 from '../assets/slider/5.jpg'
import slider6 from '../assets/slider/6.jpg'
import slider7 from '../assets/slider/7.jpg'
import slider8 from '../assets/slider/8.jpg'
import slider9 from '../assets/slider/9.jpg'


export default () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={9}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
className='swip'
    >
      <SwiperSlide><img src={slider1} alt="" className="slider__img" /></SwiperSlide>
      <SwiperSlide><img src={slider2} alt="" className="slider__img" /></SwiperSlide>
      <SwiperSlide><img src={slider3} alt="" className="slider__img" /></SwiperSlide>
      <SwiperSlide><img src={slider4} alt="" className="slider__img" /></SwiperSlide>
      <SwiperSlide><img src={slider5} alt="" className="slider__img" /></SwiperSlide>
      <SwiperSlide><img src={slider6} alt="" className="slider__img" /></SwiperSlide>
      <SwiperSlide><img src={slider7} alt="" className="slider__img" /></SwiperSlide>
      <SwiperSlide><img src={slider8} alt="" className="slider__img" /></SwiperSlide>
      <SwiperSlide><img src={slider9} alt="" className="slider__img" /></SwiperSlide>

      ...
    </Swiper>
  );
};
