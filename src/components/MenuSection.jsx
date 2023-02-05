import { Link } from "react-router-dom";

const MenuSection = ({ photos, menuPhotos, side }) => {
  return (
    <div className="menu__section">
      <ul className={`menu__card--box ${side ? "side" : ""}`}>
        {photos &&
          photos.map((item) => (
            <li style={{ listStyle: "none" }} key={item.key}>
              <Link
                className="menu__card"
                to={`/item/${item.key}`}
                key={item.key}
              >
                <img
                  src={item.src}
                  alt="menu item"
                  className="menu__card--img"
                />
                <h6 className="heading-6">
                  {item.title}
                  <span> ................................ </span>
                  <span className="bold">{item.price}$</span>
                </h6>
                <p className="menu__card--text">{item.text}</p>
              </Link>
            </li>
          ))}
        {menuPhotos &&
          menuPhotos.slice(0, 10).map((item) => (
            <li style={{ listStyle: "none" }} key={item.key}>
              <Link
                className="menu__card"
                to={`/item/${item.key}`}
                key={item.key}
              >
                <img
                  src={item.src}
                  alt="menu item"
                  className="menu__card--img"
                />
                <h6 className="heading-6" style={{ color: "#101d2c" }}>
                  {item.title}
                </h6>
                <p className="menu__card--text" style={{ color: "#101d2c" }}>
                  {item.text}
                </p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MenuSection;
