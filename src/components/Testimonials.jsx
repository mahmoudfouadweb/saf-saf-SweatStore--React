import testimonials1 from "../assets/faces/1 (1).jpg";
import testimonials2 from "../assets/faces/1 (2).jpg";
import testimonials3 from "../assets/faces/1 (3).jpg";
import testimonials4 from "../assets/faces/1 (4).jpg";
import testimonials5 from "../assets/faces/1 (5).jpg";

import { AiFillStar } from "react-icons/ai";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper";

const DUMMY__DATA = [
  {
    src: testimonials1,
    name: "ahmed fathy",
    location: "egypt, shibin elkowm",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis vero fuga voluptate voluptatem laboriosam aspernatur, officiis repellat laborum aut vitae vel quas. Quasi facere, perspiciatis adipisci officia vero voluptatibus enim!",
  },
  {
    src: testimonials1,
    name: "ameera el shennawy",
    location: "egypt, qwesna",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis vero fuga voluptate voluptatem laboriosam aspernatur, officiis repellat laborum aut vitae vel quas. Quasi facere, perspiciatis adipisci officia vero voluptatibus enim!",
  },
  {
    src: testimonials1,
    name: "raval mahmoud",
    location: "egypt, shanawan",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis vero fuga voluptate voluptatem laboriosam aspernatur, officiis repellat laborum aut vitae vel quas. Quasi facere, perspiciatis adipisci officia vero voluptatibus enim!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="heading-2">What Our Client Says</h2>
      <h5 className="heading-5">
        Our clients send us bunch of smilies with our services and we love them
      </h5>

      <Swiper
        grabCursor={true}
        effect={"creative"}
        navigation
        lazy={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper4"
      >
        <SwiperSlide className="test">
          <img
            src={testimonials1}
            alt="testimonials"
            className="testimonials__img"
          />
          <h5 className="testimonials__name">ahmed fathy</h5>
          <p className="testimonials__location">Egypt, shbin elkowm</p>
          <div className="testimonials__stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p className="testimonials__text">
            <span className="before"> &ldquo;</span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            vero fuga voluptate voluptatem laboriosam aspernatur, officiis
            repellat laborum aut vitae vel quas. Quasi facere, perspiciatis
            adipisci officia vero voluptatibus enim!
            <span className="after"> &rdquo;</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className="test">
          <img
            src={testimonials2}
            alt="testimonials"
            className="testimonials__img"
          />
          <h5 className="testimonials__name">ahmed fathy</h5>
          <p className="testimonials__location">Egypt, shbin elkowm</p>
          <div className="testimonials__stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p className="testimonials__text">
            <span className="before"> &ldquo;</span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            vero fuga voluptate voluptatem laboriosam aspernatur, officiis
            repellat laborum aut vitae vel quas. Quasi facere, perspiciatis
            adipisci officia vero voluptatibus enim!
            <span className="after"> &rdquo;</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className="test">
          <img
            src={testimonials3}
            alt="testimonials"
            className="testimonials__img"
          />
          <h5 className="testimonials__name">ahmed fathy</h5>
          <p className="testimonials__location">Egypt, shbin elkowm</p>
          <div className="testimonials__stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p className="testimonials__text">
            <span className="before"> &ldquo;</span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            vero fuga voluptate voluptatem laboriosam aspernatur, officiis
            repellat laborum aut vitae vel quas. Quasi facere, perspiciatis
            adipisci officia vero voluptatibus enim!
            <span className="after"> &rdquo;</span>
          </p>
        </SwiperSlide>
      </Swiper>

      
    </section>
  );
};

export default Testimonials;
