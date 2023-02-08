import glaty from "../assets/glaty2.jpg";
import { drinkPhotos } from "../utilities/photos";
import MenuSection from "./MenuSection";


const Glaty = () => {
  return (
    <section className="section">
    <img src={glaty} alt="ice cream" className=" section__img" />
    <div className="section__box">
      <h4 className="heading-4">glaty</h4>
        <h2 className="heading-2">Fresh glaty</h2>
        <MenuSection menuPhotos={drinkPhotos} side={true}/>
      <button  className="cta ">view more</button>
    </div>
  </section>
  )
}

export default Glaty