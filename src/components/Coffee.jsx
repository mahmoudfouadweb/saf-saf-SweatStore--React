import coffee from "../assets/feature2.jpg";
import { drinkPhotos } from "../utilities/photos";
import MenuSection from "./MenuSection";

const Coffee = () => {
  return (
    <section className="section right">
      <div className="section__box right__box">
        <h4 className="heading-4">we are open</h4>
        <h2 className="heading-2">working hours</h2>
        <MenuSection menuPhotos={drinkPhotos} side={true} />
        <button className="cta">view more</button>
      </div>
      <img src={coffee} alt="coffee" className="section__img right__img" />
    </section>
  );
};

export default Coffee;
