import ImageBar from "../components/ImageBar";
import PageTitle from "../components/PageTitle";

import menuimg from "../assets/gallery/brown/img (13).jpg";
import Blog from "../components/Blog";

const MenuPage = () => {
  return (
    <section className="menu">
      <PageTitle title={"EL Menu"} subTitle={"your taste"} />

      <h2 className="heading-4 center column-start">at your hand</h2>
      <h4 className="heading-2 center column-start">variety sweet</h4>
      <p className="menu__text center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
        animi magni amet esse ex rem possimus quisquam soluta numquam quaerat
        vero sint sit, nam, ipsum architecto qui. At, autem recusandae.
      </p>

      <ImageBar />

      <h2 className="heading-4 center column-start">chocolate</h2>
      <h4 className="heading-2 center column-start">cup cake</h4>
      <p className="menu__text center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
        animi magni amet vero sint sit, nam, ipsum qui. At, autem recusandae.
      </p>

      <div className="menu__section">
        <div className="menu__card">
          <img src={menuimg} alt="menu item" className="menu__card--img" />
          <h6 className="heading-6">
            vanilla<span> ................................ </span>
            <span className="bold">9.99$</span>
          </h6>
          <p className="menu__card--text">vanilla glaze, cold!</p>
        </div>

        <div className="menu__card">
          <img src={menuimg} alt="menu item" className="menu__card--img" />
          <h6 className="heading-6">
            vanilla<span> ................................ </span>
            <span className="bold">9.99$</span>
          </h6>
          <p className="menu__card--text">vanilla glaze, cold!</p>
        </div>
        <div className="menu__card">
          <img src={menuimg} alt="menu item" className="menu__card--img" />
          <h6 className="heading-6">
            vanilla<span> ................................ </span>
            <span className="bold">9.99$</span>
          </h6>
          <p className="menu__card--text">vanilla glaze, cold!</p>
        </div>
        <div className="menu__card">
          <img src={menuimg} alt="menu item" className="menu__card--img" />
          <h6 className="heading-6">
            vanilla<span> ................................ </span>
            <span className="bold">9.99$</span>
          </h6>
          <p className="menu__card--text">vanilla glaze, cold!</p>
        </div>
        <div className="menu__card">
          <img src={menuimg} alt="menu item" className="menu__card--img" />
          <h6 className="heading-6">
            vanilla<span> ................................ </span>
            <span className="bold">9.99$</span>
          </h6>
          <p className="menu__card--text">vanilla glaze, cold!</p>
        </div>
        <div className="menu__card">
          <img src={menuimg} alt="menu item" className="menu__card--img" />
          <h6 className="heading-6">
            vanilla<span> ................................ </span>
            <span className="bold">9.99$</span>
          </h6>
          <p className="menu__card--text">vanilla glaze, cold!</p>
        </div>
        <div className="menu__card">
          <img src={menuimg} alt="menu item" className="menu__card--img" />
          <h6 className="heading-6">
            vanilla<span> ................................ </span>
            <span className="bold">9.99$</span>
          </h6>
          <p className="menu__card--text">vanilla glaze, cold!</p>
        </div>
        <div className="menu__card">
          <img src={menuimg} alt="menu item" className="menu__card--img" />
          <h6 className="heading-6">
            vanilla<span> ................................ </span>
            <span className="bold">9.99$</span>
          </h6>
          <p className="menu__card--text">vanilla glaze, cold!</p>
        </div>
        <div className="menu__card">
          <img src={menuimg} alt="menu item" className="menu__card--img" />
          <h6 className="heading-6">
            vanilla<span> ................................ </span>
            <span className="bold">9.99$</span>
          </h6>
          <p className="menu__card--text">vanilla glaze, cold!</p>
        </div>
        <div className="menu__card">
          <img src={menuimg} alt="menu item" className="menu__card--img" />
          <h6 className="heading-6">
            vanilla<span> ................................ </span>
            <span className="bold">9.99$</span>
          </h6>
          <p className="menu__card--text">vanilla glaze, cold!</p>
        </div>
        <div className="menu__card">
          <img src={menuimg} alt="menu item" className="menu__card--img" />
          <h6 className="heading-6">
            vanilla<span> ................................ </span>
            <span className="bold">9.99$</span>
          </h6>
          <p className="menu__card--text">vanilla glaze, cold!</p>
        </div>
        <div className="menu__card">
          <img src={menuimg} alt="menu item" className="menu__card--img" />
          <h6 className="heading-6">
            vanilla<span> ................................ </span>
            <span className="bold">9.99$</span>
          </h6>
          <p className="menu__card--text">vanilla glaze, cold!</p>
        </div>
        <div className="menu__card">
          <img src={menuimg} alt="menu item" className="menu__card--img" />
          <h6 className="heading-6">
            vanilla<span> ................................ </span>
            <span className="bold">9.99$</span>
          </h6>
          <p className="menu__card--text">vanilla glaze, cold!</p>
        </div>
        <div className="menu__card">
          <img src={menuimg} alt="menu item" className="menu__card--img" />
          <h6 className="heading-6">
            vanilla<span> ................................ </span>
            <span className="bold">9.99$</span>
          </h6>
          <p className="menu__card--text">vanilla glaze, cold!</p>
        </div>
      </div>
      
      <Blog />
    </section>
  );
};

export default MenuPage;
