import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import rev1 from "../assets/main-home-rev-img1.png";
import rev2 from "../assets/main-home-rev-img2.png";
import rev3 from "../assets/main-home-rev-img3.png";

const Feature = () => {
  return (
    <section className="feature">
        <MdOutlineArrowBackIos className="feature__arr-left" />
        <img src={rev1} alt="feature image" className="feature__img" />
        <h2 className="feature__title">
          sweet pistachio <br /> ice cream
        </h2>
        <MdOutlineArrowForwardIos className="feature__arr-right" />
      </section>
  )
}

export default Feature