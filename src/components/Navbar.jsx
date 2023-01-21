import logo from "../assets/logo.jpg";
import logo1 from "../assets/logo-1.png";
import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";

const Navbar = ({ setParam }) => {
  return (
    <nav className="nav">
      <img src={logo1} alt="" className="nav__logo" />
      <ul className="nav__items">
        <li className="nav__item">
          <NavLink exact={"true"} to={"/"} className="nav__link">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"feature"} className="nav__link">
            Feature
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"shop"} className="nav__link">
            shop
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"gallery"} className="nav__link">
            gallery
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"menu"} className="nav__link">
            Menu
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"contact"} className="nav__link">
            Contact us
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"about"} className="nav__link">
            About us
          </NavLink>
        </li>
      </ul>

      <div className="nav__order-box">
        <BsCart3 className="nav__cart" />
        <button className="cta btn btn--primary">Order</button>
      </div>
    </nav>
  );
};

export default Navbar;
