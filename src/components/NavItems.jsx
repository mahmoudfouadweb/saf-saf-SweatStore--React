import { NavLink } from "react-router-dom";

const NavItems = ({nav}) => {
  return (
    <>
      <ul className={`${nav === 'navbar'? 'nav__items': 'footer__nav'}`}>
        <li className="nav__item">
          <NavLink exact={"true"} to={"/"} className="nav__link">
            Home
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink to={"shop"} className="nav__link">
            shop.
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"gallery"} className="nav__link">
            gallery
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
    </>
  );
};
export default NavItems;
