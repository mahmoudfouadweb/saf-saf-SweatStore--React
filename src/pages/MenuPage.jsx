import ImageBar from "../components/ImageBar";
import PageTitle from "../components/PageTitle";

import Blog from "../components/Blog";
import MenuSection from "../components/MenuSection";

const MenuPage = () => {
  return (
    <section className="menu">
      <PageTitle title={"EL Menu"} subTitle={"your taste"} />
      <h2 className="heading-4 center ">at your hand</h2>
      <h4 className="heading-2 center ">variety sweet</h4>
      <p className="menu__text center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
        animi magni amet esse ex rem possimus quisquam soluta numquam quaerat
        vero sint sit, nam, ipsum architecto qui. At, autem recusandae.
      </p>
      <ImageBar />
      <MenuSection />
  

      <Blog />
    </section>
  );
};

export default MenuPage;
