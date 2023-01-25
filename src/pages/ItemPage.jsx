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

            {/* <div className="item__related--card">
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
            </div> */}
        
        <div class="item__related--card">
                <img src={item3} alt="House 1" class="item__related--card-img" />
                <h5 class="item__related--card-name">Beautiful Familiy House</h5>
                <div class="item__related--card-text">
                    <p>USA</p>
                </div>
                <div class="item__related--card-text">
                    <p>5 rooms</p>
                </div>
                <div class="item__related--card-category">
                    <p>325 m<sup>2</sup></p>
                </div>
                <div class="item__related--card-price">
                    <p>$1,200,000</p>
                </div>
                <button class="btn item__related--card-btn">Contact realtor</button>
            </div>
        <div class="item__related--card">
                <img src={item2} alt="House 1" class="item__related--card-img" />
                <h5 class="item__related--card-name">Beautiful Familiy House</h5>
                <div class="item__related--card-text">
                    <p>USA</p>
                </div>
                <div class="item__related--card-text">
                    <p>5 rooms</p>
                </div>
                <div class="item__related--card-category">
                    <p>325 m<sup>2</sup></p>
                </div>
                <div class="item__related--card-price">
                    <p>$1,200,000</p>
                </div>
                <button class="btn item__related--card-btn">Contact realtor</button>
            </div>
        <div class="item__related--card">
                <img src={item3} alt="House 1" class="item__related--card-img" />
                <h5 class="item__related--card-name">Beautiful Familiy House</h5>
                <div class="item__related--card-text">
                    <p>USA</p>
                </div>
                <div class="item__related--card-text">
                    <p>5 rooms</p>
                </div>
                <div class="item__related--card-category">
                    <p>325 m<sup>2</sup></p>
                </div>
                <div class="item__related--card-price">
                    <p>$1,200,000</p>
                </div>
                <button class="btn item__related--card-btn">Contact realtor</button>
            </div>

            
            {/* <div class="home">
                <img src={item3} alt="House 2" class="home__img" />
                <h5 class="home__name">Modern Glass Villa</h5>
                <div class="home__location">
                    <p>Canada</p>
                </div>
                <div class="home__rooms">
                    <p>6 rooms</p>
                </div>
                <div class="home__area">
                    <p>450 m<sup>2</sup></p>
                </div>
                <div class="home__price">
                    <p>$2,750,000</p>
                </div>
                <button class="btn home__btn">Contact realtor</button>
            </div>

            <div class="home">
                <img src={item3} alt="House 3" class="home__img" />
                <h5 class="home__name">Cozy Country House</h5>
                <div class="home__location">
                    <p>UK</p>
                </div>
                <div class="home__rooms">
                    <p>4 rooms</p>
                </div>
                <div class="home__area">
                    <p>250 m<sup>2</sup></p>
                </div>
                <div class="home__price">
                    <p>$850,000</p>
                </div>
                <button class="btn home__btn">Contact realtor</button>
            </div>

            <div class="home">
                <img src={item3} alt="House 4" class="home__img" />
                <h5 class="home__name">Large Rustical Villa</h5>
                <div class="home__location">
                    <p>Portugal</p>
                </div>
                <div class="home__rooms">
                    <p>6 rooms</p>
                </div>
                <div class="home__area">
                    <p>480 m<sup>2</sup></p>
                </div>
                <div class="home__price">
                    <p>$1,950,000</p>
                </div>
                <button class="btn home__btn">Contact realtor</button>
            </div>

            <div class="home">
                <img src={item3} alt="House 5" class="home__img" />
                <h5 class="home__name">Majestic Palace House</h5>
                <div class="home__location">
                    <p>Germany</p>
                </div>
                <div class="home__rooms">
                    <p>18 rooms</p>
                </div>
                <div class="home__area">
                    <p>4230 m<sup>2</sup></p>
                </div>
                <div class="home__price">
                    <p>$9,500,000</p>
                </div>
                <button class="btn home__btn">Contact realtor</button>
            </div>

            <div class="home">
                <img src={item3} alt="House 6" class="home__img" />
                <h5 class="home__name">Modern Familiy Apartment</h5>
                <div class="home__location">
                    <p>Italy</p>
                </div>
                <div class="home__rooms">
                    <p>3 rooms</p>
                </div>
                <div class="home__area">
                    <p>180 m<sup>2</sup></p>
                </div>
                <div class="home__price">
                    <p>$600,000</p>
                </div>
                <button class="btn home__btn">Contact realtor</button>
            </div> */}
      </section>
      
      {/* <section class="homes">
           
      </section> */}
      
    </section>
  );
};

export default ItemPage;
