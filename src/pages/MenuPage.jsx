import ImageBar from "../components/ImageBar";
import PageTitle from "../components/PageTitle";

import background from "../assets/gallery/bake/bake23.jpg";

import Blog from "../components/Blog";
import MenuSection from "../components/MenuSection";

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
      <p className="menu__text center ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
        animi magni amet vero sint sit, nam, ipsum qui. At, autem recusandae.
      </p>
      <MenuSection />

      <img src={background} alt="menu photo" className="menu__background" />

      <Blog />
    </section>
  );
};

export default MenuPage;
