import PageTitle from "../components/PageTitle";
import shop1 from '../assets/gallery/drink/drink28.png'
import DiscreteSliderLabel from "../components/Slider";


import cardImg from '../assets/gallery/bake/bake1.jpg'
import cardImg1 from '../assets/gallery/bake/bake2.jpg'
import cardImg2 from '../assets/gallery/bake/bake3.jpg'
import cardImg3 from '../assets/gallery/bake/bake4.jpg'
import cardImg4 from '../assets/gallery/bake/bake5.jpg'
import cardImg5 from '../assets/gallery/bake/bake6.jpg'
import cardImg6 from '../assets/gallery/bake/bake7.jpg'
import cardImg7 from '../assets/gallery/bake/bake8.jpg'
import cardImg8 from '../assets/gallery/bake/bake9.jpg'
import cardImg9  from '../assets/gallery/bake/bake10.jpg'
import cardImg10  from '../assets/gallery/bake/bake11.jpg'
import cardImg11  from '../assets/gallery/bake/bake12.jpg'
import cardImg12  from '../assets/gallery/bake/bake13.jpg'
import cardImg13  from '../assets/gallery/bake/bake14.jpg'
import cardImg14  from '../assets/gallery/bake/bake15.jpg'
import cardImg15  from '../assets/gallery/bake/bake16.jpg'
import cardImg16  from '../assets/gallery/bake/bake17.jpg'
import cardImg17  from '../assets/gallery/bake/bake18.jpg'
import cardImg18  from '../assets/gallery/bake/bake19.jpg'


import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Blog from "../components/Blog";

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
            <img src={cardImg9} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>

        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={cardImg10} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>

        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={cardImg11} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>

        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={cardImg12} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>

        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={cardImg13} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>

        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={cardImg14} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>

        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={cardImg15} alt="" className="shop__card--img" />
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
            <img src={cardImg16} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>
        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={cardImg17} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>
        <div className="shop__card">
          <div className="shop__card--img-box">
            <img src={cardImg18} alt="" className="shop__card--img" />
          </div>
          <h6 className="heading-6">choco glaze</h6>
          <p className="shop__card--text">now with chocolate chips!</p>
        </div>
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
            <div className="shop__card">
              <div className="shop__card--img-box">
                <img src={cardImg8} alt="" className="shop__card--img" />
              </div>
              <h6 className="heading-6">choco glaze</h6>
              <p className="shop__card--text">now with chocolate chips!</p>
            </div>
            <div className="shop__card">
              <div className="shop__card--img-box">
                <img src={cardImg2} alt="" className="shop__card--img" />
              </div>
              <h6 className="heading-6">choco glaze</h6>
              <p className="shop__card--text">now with chocolate chips!</p>
            </div>
            <div className="shop__card">
              <div className="shop__card--img-box">
                <img src={cardImg3} alt="" className="shop__card--img" />
              </div>
              <h6 className="heading-6">choco glaze</h6>
              <p className="shop__card--text">now with chocolate chips!</p>
            </div>
            <div className="shop__card">
              <div className="shop__card--img-box">
                <img src={cardImg4} alt="" className="shop__card--img" />
              </div>
              <h6 className="heading-6">choco glaze</h6>
              <p className="shop__card--text">now with chocolate chips!</p>
            </div>
            <div className="shop__card">
              <div className="shop__card--img-box">
                <img src={cardImg5} alt="" className="shop__card--img" />
              </div>
              <h6 className="heading-6">choco glaze</h6>
              <p className="shop__card--text">now with chocolate chips!</p>
            </div>
            <div className="shop__card">
              <div className="shop__card--img-box">
                <img src={cardImg6} alt="" className="shop__card--img" />
              </div>
              <h6 className="heading-6">choco glaze</h6>
              <p className="shop__card--text">now with chocolate chips!</p>
            </div>
            <div className="shop__card">
              <div className="shop__card--img-box">
                <img src={cardImg7} alt="" className="shop__card--img" />
              </div>
              <h6 className="heading-6">choco glaze</h6>
              <p className="shop__card--text">now with chocolate chips!</p>
            </div>
            <div className="shop__card">
              <div className="shop__card--img-box">
                <img src={cardImg1} alt="" className="shop__card--img" />
              </div>
              <h6 className="heading-6">choco glaze</h6>
              <p className="shop__card--text">now with chocolate chips!</p>
            </div>

        </div>
      </section>
      <Blog />
    </section>
  );
};

export default Shop;
