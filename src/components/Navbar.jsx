
import logo from '../assets/logo.jpg'

const Navbar = () => {
  const userName = "Mahmoud";
  return (
    <nav className="nav">
     <img src={logo} alt="" className="nav__logo" />
    
      <ul className="nav__items">
        <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Feature</a></li>
        <li className="nav__item"><a href="#" className="nav__link">shop</a></li>
        <li className="nav__item"><a href="#" className="nav__link">gallery</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Menu</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Menu</a></li>
        <li className="nav__item"><a href="#" className="nav__link">About us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
