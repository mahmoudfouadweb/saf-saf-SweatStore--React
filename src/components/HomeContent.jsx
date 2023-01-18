import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import coffee from "../assets/feature2.jpg";
import glaty from "../assets/glaty2.jpg";
import bola from "../assets/sp-home1-new1.png";
import bola2 from "../assets/sp-home1-new2.png";
import bola3 from "../assets/sp-home1-new3.png";
import rev1 from "../assets/main-home-rev-img1.png";
import rev2 from "../assets/main-home-rev-img2.png";
import rev3 from "../assets/main-home-rev-img3.png";

const HomeContent = () => {
  return (
    <main className="home-content">
      <section className="feature">
        <MdOutlineArrowBackIos className="feature__arr-left" />
        <img src={rev1} alt="feature image" className="feature__img" />
        <h2 className="feature__title">
          sweet pistachio <br /> ice cream
        </h2>
        <MdOutlineArrowForwardIos className="feature__arr-right" />
      </section>

      <section className="glaty">
        <img src={glaty} alt="" className="glaty__img" />
        <div className="glaty__box">
          <h4 className="heading-4">glaty</h4>
          <h2 className="heading-2">Fresh glaty</h2>
          <ul className="glaty__items">
            <li className="glaty__item">
              <p className="glaty__item--name">espresso</p>
              <span>$9</span>
              <p className="glaty__item--details">nuts + cream + cramil</p>
            </li>
            <li className="glaty__item">
              <p className="glaty__item--name">espresso double</p>
              <span>$12</span>
              <p className="glaty__item--details">nuts + cream + cramil</p>
            </li>
            <li className="glaty__item">
              <p className="glaty__item--name">Micato</p>
              <span>$9</span>
              <p className="glaty__item--details">nuts + cream + cramil</p>
            </li>
            <li className="glaty__item">
              <p className="glaty__item--name">Micato</p>
              <span>$9</span>
              <p className="glaty__item--details">nuts + cream + cramil</p>
            </li>
            <li className="glaty__item">
              <p className="glaty__item--name">Micato</p>
              <span>$9</span>
              <p className="glaty__item--details">nuts + cream + cramil</p>
            </li>
            <li className="glaty__item">
              <p className="glaty__item--name">Micato</p>
              <span>$9</span>
              <p className="glaty__item--details">nuts + cream + cramil</p>
            </li>
            <li className="glaty__item">
              <p className="glaty__item--name">Micato</p>
              <span>$9</span>
              <p className="glaty__item--details">nuts + cream + cramil</p>
            </li>
            <li className="glaty__item">
              <p className="glaty__item--name">Micato</p>
              <span>$9</span>
              <p className="glaty__item--details">nuts + cream + cramil</p>
            </li>
          </ul>

          <button className="cta ">view more</button>
        </div>
      </section>

      <section className="ice-cream">
        <MdOutlineArrowBackIos className="ice-cream__arr-left" />
        <div className="ice-cream__box">
          <div className="ice-cream__item">
            <img src={bola} alt="ice-cream image" className="ice-cream__img" />
            <p className="ice-cream__title">pistachio</p>
            <span className="ice-cream__discription">
              With bits of pistachio
            </span>
            <p className="ice-cream__price">$9.50</p>
          </div>
          <div className="ice-cream__item">
            <img src={bola2} alt="ice-cream image" className="ice-cream__img" />
            <p className="ice-cream__title">pistachio</p>
            <span className="ice-cream__discription">
              With bits of pistachio
            </span>
            <p className="ice-cream__price">$16.00</p>
          </div>
          <div className="ice-cream__item">
            <img src={bola3} alt="ice-cream image" className="ice-cream__img" />
            <p className="ice-cream__title">pistachio</p>
            <span className="ice-cream__discription">
              With bits of pistachio
            </span>
            <p className="ice-cream__price">$12.50</p>
          </div>
        </div>
        <MdOutlineArrowForwardIos className="ice-cream__arr-right" />
      </section>

      <section className="coffee">
        
        <div className="coffee__box">
          <h4 className="heading-4">we are open</h4>
          <h2 className="heading-2">working hours</h2>
          <ul className="coffee__items">
            <li className="coffee__item">
              <p className="coffee__item--name">espresso</p>
              <span>$9</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--name">espresso double</p>
              <span>$12</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--name">Micato</p>
              <span>$9</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--name">Micato</p>
              <span>$9</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--name">Micato</p>
              <span>$9</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--name">Micato</p>
              <span>$9</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--name">Micato</p>
              <span>$9</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--name">Micato</p>
              <span>$9</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
          </ul>

          <button className="cta btn-primary">view more</button>
        </div>
        <img src={coffee} alt="" className="coffee__img" />
      </section>
    </main>
  );
};

export default HomeContent;
