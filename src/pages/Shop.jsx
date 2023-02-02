import PageTitle from "../components/PageTitle";

import DiscreteSliderLabel from "../components/Slider";

import cardImg from "../assets/gallery/bake/bake1.jpg";
import cardImg1 from "../assets/gallery/bake/bake2.jpg";

import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Blog from "../components/Blog";
// import { bakePhotos, drinkPhotos, sweetsPhotos } from "../utilities/photos";
import { sweetsDeserts } from "../utilities/dummyData";
import { useState } from "react";

const Shop = ({ photos }) => {
  const [isCategory, setIsCategory] = useState([...photos])
  
  console.warn(isCategory);
  const categoryHandler = () => {
    setIsCategory()
  };
  return (
    <section className="shop">
      <PageTitle title={"Shop"} subTitle={"sub"} />

      <aside className="shop__sidebar">
        <h5 className="heading-5 filter">Filter</h5>
        <DiscreteSliderLabel />

        <h5 className="heading-5 popular">popular</h5>
        <div className="shop__sidebar--card">
          <img
            src={cardImg}
            alt="card photo"
            className="shop__sidebar--card-img"
          />
          <h6 className="heading-6">pineapple pie</h6>
          <p className="shop__sidebar--card-price">7.99$</p>
        </div>
        <div className="shop__sidebar--card">
          <img
            src={cardImg1}
            alt="card photo"
            className="shop__sidebar--card-img"
          />
          <h6 className="heading-6">pineapple pie</h6>
          <p className="shop__sidebar--card-price">7.99$</p>
        </div>

        <h5 className="heading-5 category">categories</h5>
        <ul className="shop__sidebar--category">
          <li
            className="shop__sidebar--category-item"
            onClick={() => categoryHandler()}
          >
            <a className="shop__sidebar--category-link">sweets</a>
          </li>
          <li
            className="shop__sidebar--category-item"
            onClick={() => categoryHandler()}
          >
            <a className="shop__sidebar--category-link">drinks</a>
          </li>
          <li
            className="shop__sidebar--category-item"
            onClick={() => categoryHandler()}
          >
            <a className="shop__sidebar--category-link">bake</a>
          </li>
        </ul>

        <h5 className="heading-5 tags">tags</h5>
        <div className="shop__sidebar--tag-box">
          {sweetsDeserts.map((item) => (
            <div className="shop__sidebar--tag" key={generateId("tag")}>
              <p className="shop__sidebar--tag-text">{item}</p>
            </div>
          ))}
        </div>

        <h5 className="heading-5 follow">follow us</h5>
        <div className="shop__sidebar--icon-box">
          <AiFillFacebook className="shop__sidebar--icon" />
          <FaInstagramSquare className="shop__sidebar--icon" />
          <BsTwitter className="shop__sidebar--icon" />
        </div>
      </aside>
      <div className="shop__card--box">
        {bakePhotos.map((item) => (
          <Link to={`/item/${item.key}`} className="shop__card">
            <div className="shop__card--img-box">
              <img src={item.src} alt="" className="shop__card--img" />
            </div>
            <h6 className="heading-6">{item.title}</h6>
            <p className="shop__card--text">{item.text}</p>
          </Link>
        ))}
      </div>

      <section className="shop__category">
        <h4 className="heading-4">delicios</h4>
        <h2 className="heading-2">sweets and dessert</h2>
        <p className="shop__categoty--text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
          perspiciatis hic, sit dicta ipsam esse quo tenetur minus, obcaecati
          repellat fuga tempora nulla excepturi nobis cupiditate laudantium
          deleniti earum voluptate.
        </p>

        <div className="shop__category--box">
          {drinkPhotos.splice(1, 8).map((item) => (
            <div className="shop__card" key={"drink" + item.key}>
              <div className="shop__card--img-box">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="shop__card--img"
                />
              </div>
              <h6 className="heading-6">{item.title}</h6>
              <p className="shop__card--text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Blog />
    </section>
  );
};

export default Shop;
