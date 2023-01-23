import img1 from "../assets/small-img/1.png";
import img2 from "../assets/small-img/2.png";
import img3 from "../assets/small-img/3.png";
import img4 from "../assets/small-img/4.png";
import img5 from "../assets/small-img/5.png";
import img6 from "../assets/small-img/6.png";
import img7 from "../assets/small-img/7.png";
import img8 from "../assets/small-img/8.png";
import img9 from "../assets/small-img/9.png";

const ImageBar = () => {
  return (
    <div className="join-us__box">
        <img src={img1} alt="join us" className="join-us__img" />
        <img src={img2} alt="join us" className="join-us__img" />
        <img src={img3} alt="join us" className="join-us__img" />
        <img src={img4} alt="join us" className="join-us__img" />
        <img src={img5} alt="join us" className="join-us__img" />
        <img src={img6} alt="join us" className="join-us__img" />
        <img src={img7} alt="join us" className="join-us__img" />
        <img src={img8} alt="join us" className="join-us__img" />
        <img src={img9} alt="join us" className="join-us__img" />
      </div>
  )
}

export default ImageBar