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
const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="heading-2">What Our Client Says</h2>
      <h5 className="heading-5">
        Our clients send us bunch of smilies with our services and we love them
      </h5>

      <img
        src={testimonials1}
        alt="testimonials"
        className="testimonials__img"
      />
      {/* <img
        src={testimonials2}
        alt="testimonials"
        className="testimonials__img"
      />
      <imga
        src={testimonials3}
        alt="testimonials"
        className="testimonials__img"
      />
      <img
        src={testimonials4}
        alt="testimonials"
        className="testimonials__img"
      />
      <img
        src={testimonials5}
        alt="testimonials"
        className="testimonials__img"
      /> */}

      <h5 className="testimonials__name">ahmed fathy</h5>
      <MdOutlineArrowBackIos className="arrow-left" />
      <p className="testimonials__location">Egypt, shbin elkowm</p>
      <MdOutlineArrowForwardIos className="arrow-right" />

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
        vero fuga voluptate voluptatem laboriosam aspernatur, officiis repellat
        laborum aut vitae vel quas. Quasi facere, perspiciatis adipisci officia
        vero voluptatibus enim!
      <span className="after"> &rdquo;</span>
      </p>
    </section>
  );
};

export default Testimonials;
