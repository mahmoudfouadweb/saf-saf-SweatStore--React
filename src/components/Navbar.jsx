import profileImg from "../assets/images/profile-img.png";
import logo from "../assets/icons/logo-1.svg";
import chat from "../assets/icons/chat-icon.png";
import menu from "../assets/icons/menu-icon.png";
import notification from "../assets/icons/notification-icon.png";
import search from "../assets/icons/search-icon.svg";

const Navbar = () => {
  const userName = "Mahmoud";
  return (
    <nav className="nav">
      <div className="nav__utility-box">
        <img src={menu} alt="menu" className="nav__utility-icon" />
        <img src={logo} alt="logo" className="nav__utility-logo" />
      </div>

      <div className="nav__search-box">
        <img src={search} alt="search" className="nav__search-icon" />
        <input type="text" />
      </div>

      <div className="nav__profile-box">
        <img src={chat} alt="notification" className="nav__profile-icon" />
        <img
          src={notification}
          alt="notification"
          className="nav__profile-icon"
        />
        <img
          src={profileImg}
          alt="notification"
          className="nav__profile-icon"
        />
        <p className="nav__profile-text">
          Hi , <span>{userName}</span>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
