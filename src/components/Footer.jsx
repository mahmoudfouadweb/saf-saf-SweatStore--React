import logo from "../assets/logo-1.png";

import { ImFacebook2 } from "react-icons/im";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <p className="footer__text">
        اللي بنى الحلو في شبين كان في الأصل صف صف لأننا من سنة 1977
      </p>

      <ul className="footer__nav">
        <li className="footer__nav-item">
          <a href="#" className="footer__nav-link">
            Home
          </a>
        </li>
        <li className="footer__nav-item">
          <a href="#" className="footer__nav-link">
            Community
          </a>
        </li>
        <li className="footer__nav-item">
          <a href="#" className="footer__nav-link">
            Explore
          </a>
        </li>
        <li className="footer__nav-item">
          <a href="#" className="footer__nav-link">
            Contact
          </a>
        </li>
        <li className="footer__nav-item">
          <a href="#" className="footer__nav-link">
            Terms
          </a>
        </li>
        <li className="footer__nav-item">
          <a href="#" className="footer__nav-link">
            Privacy{" "}
          </a>
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
