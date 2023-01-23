import PageTitle from "../components/PageTitle";
import shop1 from "../assets/gallery/brown/img (3).jpg";
import DiscreteSliderLabel from "../components/Slider";

import cardImg from "../assets/gallery/img (19).jpg";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Shop = () => {
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
            src={cardImg}
            alt="card photo"
            className="shop__sidebar--card-img"
          />
          <h6 className="heading-6">pineapple pie</h6>
          <p className="shop__sidebar--card-price">7.99$</p>
        </div>

        <h5 className="heading-5 category">categories</h5>
        <ul className="shop__sidebar--category">
          <li className="shop__sidebar--category-item">
            <Link className="shop__sidebar--category-link" to={"shop/cake/:id"}>
              cup cake
            </Link>
          </li>
          <li className="shop__sidebar--category-item">
            <Link className="shop__sidebar--category-link" to={"shop/cake/:id"}>
              cup cake
            </Link>
          </li>
          <li className="shop__sidebar--category-item">
            <Link className="shop__sidebar--category-link" to={"shop/cake/:id"}>
              cup cake
            </Link>
          </li>
          <li className="shop__sidebar--category-item">
            <Link className="shop__sidebar--category-link" to={"shop/cake/:id"}>
              cup cake
            </Link>
          </li>
          <li className="shop__sidebar--category-item">
            <Link className="shop__sidebar--category-link" to={"shop/cake/:id"}>
              cup cake
            </Link>
          </li>
          <li className="shop__sidebar--category-item">
            <Link className="shop__sidebar--category-link" to={"shop/cake/:id"}>
              cup cake
            </Link>
          </li>
          <li className="shop__sidebar--category-item">
            <Link className="shop__sidebar--category-link" to={"shop/cake/:id"}>
              cup cake
            </Link>
          </li>
          <li className="shop__sidebar--category-item">
            <Link className="shop__sidebar--category-link" to={"shop/cake/:id"}>
              cup cake
            </Link>
          </li>
        </ul>

        <h5 className="heading-5 tags">tags</h5>
        <div className="shop__sidebar--tag-box">
          <div className="shop__sidebar--tag">
            <p className="shop__sidebar--tag-text">cold</p>
          </div>
          <div className="shop__sidebar--tag">
            <p className="shop__sidebar--tag-text">hot</p>
          </div>
          <div className="shop__sidebar--tag">
            <p className="shop__sidebar--tag-text">sweet</p>
          </div>
          <div className="shop__sidebar--tag">
            <p className="shop__sidebar--tag-text">disert</p>
          </div>
          <div className="shop__sidebar--tag">
            <p className="shop__sidebar--tag-text">single</p>
          </div>
          <div className="shop__sidebar--tag">
            <p className="shop__sidebar--tag-text">double</p>
          </div>
          <div className="shop__sidebar--tag">
            <p className="shop__sidebar--tag-text">any</p>
          </div>
        </div>

        <h5 className="heading-5 follow">follow us</h5>
        <div className="shop__sidebar--icon-box">
          <AiFillFacebook className="shop__sidebar--icon" />
          <FaInstagramSquare className="shop__sidebar--icon" />
          <BsTwitter className="shop__sidebar--icon" />
        </div>
      </aside>
      <div className="shop__card--box">
        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={shop1} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>

        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={shop1} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>

        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={shop1} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>

        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={shop1} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>

        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={shop1} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>

        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={shop1} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>

        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={shop1} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>

        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={shop1} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>

        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={shop1} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>
      </div>
      
      <section className="shop__category">
        <h4 className="heading-4">delicios</h4>
      </section>
    </section>
  );
};

export default Shop;
