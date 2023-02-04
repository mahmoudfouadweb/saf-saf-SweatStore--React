import logo from "../assets/logo-1.png";

const Logo = ({ nav }) => {
  return (
    <>
      <img src={logo} alt="logo" className={`${nav ? "nav__" : ""}logo`} />
    </>
  );
};

export default Logo;
