import icon1 from "../assets/small-img/icon1.png";
import icon2 from "../assets/small-img/icon2.png";
import icon3 from "../assets/small-img/icon3.png";
import icon4 from "../assets/small-img/icon4.png";

import ImageBar from "./ImageBar";
import JoinForm from "./JoinForm";

const JoinUs = () => {

  return (
    <section className="join-us">
      <h4 className="heading-4">our shop</h4>
      <h2 className="heading-2">always near you</h2>
      <p className="join-us__content">
        Lorem ipsum dolor sit amet consectetur adipising adipisicing elit elit.
        quisquam velit beatae consequatur consectetur adipisicing elit nemo
        libero sequi ab iure.
      </p>

      <div className="join-us__item order">
        <img src={icon1} alt="our services" className="join-us__icon" />
        <h5 className="heading-5">order online</h5>
        <p className="join-us__text">
          Lorem, ipsum dolor sit amet consecter adipisicing elit. Nemo ipsa sit
          eaque.
        </p>
      </div>
      <div className="join-us__item payment">
        <img src={icon2} alt="our services" className="join-us__icon" />
        <h5 className="heading-5">fast payment</h5>
        <p className="join-us__text">
          Lorem, ipsum dolor sit amet consecter adipisicing elit. Nemo ipsa sit
          eaque.
        </p>
      </div>
      <div className="join-us__item delivery">
        <img src={icon3} alt="our services" className="join-us__icon" />
        <h5 className="heading-5">delivery</h5>
        <p className="join-us__text">
          Lorem, ipsum dolor sit amet consecter adipisicing elit. Nemo ipsa sit
          eaque.
        </p>
      </div>
      <div className="join-us__item shiping">
        <img src={icon4} alt="our services" className="join-us__icon" />
        <h5 className="heading-5">shipping</h5>
        <p className="join-us__text">
          Lorem, ipsum dolor sit amet consecter adipisicing elit. Nemo ipsa sit
          eaque.
        </p>
      </div>

      <ImageBar />

      <JoinForm />
    </section>
  );
};

export default JoinUs;
