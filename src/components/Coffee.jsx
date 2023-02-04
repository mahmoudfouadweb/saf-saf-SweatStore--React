import coffee from "../assets/feature2.jpg";
import { drinkPhotos } from "../utilities/photos";
import MenuSection from "./MenuSection";

const Coffee = () => {
  return (
    <section className="coffee">
        <div className="coffee__box">
          <h4 className="heading-4">we are open</h4>
          <h2 className="heading-2">working hours</h2>
        <MenuSection menuPhotos={drinkPhotos} side={true} />
          <button className="cta btn-primary">view more</button>
        </div>
        <img src={coffee} alt="" className="coffee__img" />
      </section>

  )
}

export default Coffee