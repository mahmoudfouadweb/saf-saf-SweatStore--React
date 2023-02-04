import Logo from "./Logo";
import NavItems from "./NavItems";
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

      <NavItems />
      <div className="footer__line"></div>

      <div className="footer__copyright">
        © 2023 Saf Saf. All Rights Reserved. <br />
        Made with ❤ MAHMOUD FOUAD web developer.
      </div>
      <SocialIcons footer={true} />
    </footer>
  );
};

export default Footer;
