import { Link } from "react-router-dom";
import Logo from "./Logo";

import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <Logo />
      </div>
      <p className="footer__text">
        اللي بنى الحلو في شبين كان في الأصل صف صف لأننا من سنة 1977
      </p>

      <ul className="footer__nav">
        <li className="footer__nav-item">
          <Link to={`/Home`} className="footer__nav-link">
            Home
          </Link>
        </li>
        <li className="footer__nav-item">
          <Link to={`/shop`} className="footer__nav-link">
          shop
          </Link>
        </li>
        <li className="footer__nav-item">
          <Link to={`/menu`} className="footer__nav-link">
            menu
          </Link>
        </li>
        <li className="footer__nav-item">
          <Link to={`/gallery`} className="footer__nav-link">
          gallery
          </Link>
        </li>
        <li className="footer__nav-item">
          <Link to={`/contact`} className="footer__nav-link">
          contact us
          </Link>
        </li>
        <li className="footer__nav-item">
          <Link to={`/about`} className="footer__nav-link">
            about us
          </Link>
        </li>
      </ul>
      <div className="footer__line"></div>

      <div className="footer__copyright">
        © 2023 Saf Saf. All Rights Reserved. <br />
        Made with ❤ MAHMOUD FOUAD web developer.
      </div>
      <SocialIcons footer={true}/>
    </footer>
  );
};

export default Footer;
