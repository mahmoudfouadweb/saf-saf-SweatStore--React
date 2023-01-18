import bola from "../assets/sp-home1-new1.png";
import bola2 from "../assets/sp-home1-new2.png";
import bola3 from "../assets/sp-home1-new3.png";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const  IceCream = () => {
  return (
    <section className="ice-cream">
      <MdOutlineArrowBackIos className="ice-cream__arr-left" />
      <div className="ice-cream__box">
        <div className="ice-cream__item">
          <img src={bola} alt="ice-cream image" className="ice-cream__img" />
          <p className="ice-cream__title">pistachio</p>
          <span className="ice-cream__discription">With bits of pistachio</span>
          <p className="ice-cream__price">$9.50</p>
        </div>
        <div className="ice-cream__item">
          <img src={bola2} alt="ice-cream image" className="ice-cream__img" />
          <p className="ice-cream__title">pistachio</p>
          <span className="ice-cream__discription">With bits of pistachio</span>
          <p className="ice-cream__price">$16.00</p>
        </div>
        <div className="ice-cream__item">
          <img src={bola3} alt="ice-cream image" className="ice-cream__img" />
          <p className="ice-cream__title">pistachio</p>
          <span className="ice-cream__discription">With bits of pistachio</span>
          <p className="ice-cream__price">$12.50</p>
        </div>
      </div>
      <MdOutlineArrowForwardIos className="ice-cream__arr-right" />
    </section>
  );
};

export default IceCream;
