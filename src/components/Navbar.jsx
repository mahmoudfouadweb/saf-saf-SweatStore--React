
import logo from '../assets/logo.jpg'
import logo1 from '../assets/logo-1.png'
import { BsCart3 } from 'react-icons/bs'
const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo1} alt="" className="nav__logo" />
      {/* <img src={logo} alt="" className="nav__logo" /> */}
      <ul className="nav__items">
        <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Feature</a></li>
        <li className="nav__item"><a href="#" className="nav__link">shop</a></li>
        <li className="nav__item"><a href="#" className="nav__link">gallery</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Menu</a></li>
        <li className="nav__item"><a href="#" className="nav__link">About us</a></li>
      </ul>
      


      
      <div className="nav__order-box">
      <BsCart3 className='nav__cart'/>
      <button className="cta btn btn--primary">Order</button>
     </div>
    </nav>
  );
};

export default Navbar;
