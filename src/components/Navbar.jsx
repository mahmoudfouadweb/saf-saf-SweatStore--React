import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to={"/"}>
        <Logo nav={true} />
      </NavLink>
      <NavItems nav={'navbar'} />
    </nav>
  );
};

export default Navbar;
