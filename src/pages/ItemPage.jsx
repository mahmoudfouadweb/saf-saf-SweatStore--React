import item from "../assets/gallery/img (19).jpg";
import item1 from "../assets/gallery/img (3).jpg";
import item2 from "../assets/gallery/img (4).jpg";
import item3 from "../assets/gallery/coffee22.jpg";

import cardImg9 from "../assets/gallery/img (12).jpg";
import cardImg10 from "../assets/gallery/img (14).jpg";
import shop1 from "../assets/gallery/brown/img (3).jpg";

import PageTitle from "../components/PageTitle";

const ItemPage = () => {
  return (
    <section className="item">
      <PageTitle />

      <section className="item__heading">
        <img src={item3} alt="" className="item-img--1" />
        {/* <img src={item} alt=""  className='item-img item-img--2'/> */}
        <img src={item3} alt="" className="item-img item-img--2" />
        <img src={item1} alt="" className="item-img item-img--3" />
        <img src={item2} alt="" className="item-img item-img--4" />
        <img src={item} alt="" className="item-img item-img--5" />

        <h4 className="heading-3">Coffee</h4>
        <p className="item__price">14.99$</p>

        <p className="item__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi,
          tempore nobis quod ipsum atque debitis quia reprehenderit vitae
          similique a, tenetur labore modi dolor corporis hic deserunt fugit!
          Porro?
        </p>

        <p className="item__status">available</p>
        <div className="item__like">
          icon here <span>add to wishlist</span>
        </div>

        <p className="item__category">hot drink</p>
        <p className="item__tags">brown, hot</p>
        <p className="item__social">Follow us: icons here</p>
      </section>

        <section className="item__description">
          <h5 className="heading-5">description</h5>
          <p className="item__description--text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            natus incidunt reprehenderit. Laborum nemo, molestias ab molestiae
            ad pariatur autem neque numquam rem, unde placeat omnis provident
            magni quam atque.
          </p>
          </section>

          <section className="item__related">
            <h3 className="heading-5 frist">related products</h3>

            <div className="item__related--card">
              <div className="item__related--card-img-box">
                <img src={shop1} alt="" className="item__related--card-img" />
              </div>
              <h6 className="heading-6">choco glaze</h6>
              <p className="item__related--card--text">now with chocolate chips!</p>
            </div>

            <div className="item__related--card">
              <div className="item__related--card-img-box">
                <img src={cardImg9} alt="" className="item__related--card-img" />
              </div>
              <h6 className="heading-6">choco glaze</h6>
              <p className="item__related--card--text">now with chocolate chips!</p>
            </div>

            <div className="item__related--card">
              <div className="item__related--card-img-box">
                <img src={cardImg10} alt="" className="item__related--card-img" />
              </div>
              <h6 className="heading-6">choco glaze</h6>
              <p className="item__related--card--text">now with chocolate chips!</p>
        </div>
        
            <div className="item__related--card">
              <div className="item__related--card-img-box">
                <img src={cardImg10} alt="" className="item__related--card-img" />
              </div>
              <h6 className="heading-6">choco glaze</h6>
              <p className="item__related--card--text">now with chocolate chips!</p>
            </div>
        </section>
    </section>
  );
};

export default ItemPage;
