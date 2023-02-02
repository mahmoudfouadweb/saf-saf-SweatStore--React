
import item3 from "../assets/gallery/drink/drink4.jpg";


import cardImg9 from "../assets/gallery/drink/drink23.jpg";
import cardImg10 from "../assets/gallery/drink/drink24.jpg";
import shop1 from "../assets/gallery/drink/drink25.png";

import PageTitle from "../components/PageTitle";
import Item from "../components/Item";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const ItemPage = ({photos}) => {
  const itemTitle = "coffee";
  
  const [isItem, setIsItem] = useState({})
  let { id } = useParams();
  
  useEffect(() => {
    const currentId = photos.filter(item => item.key === id)
    console.log(currentId[0]);
    setIsItem(currentId[0])
  }, [])
  
  
  return (
    <article className="item">
      <PageTitle title={itemTitle} subTitle={"hot drink"} />

      <Item data={isItem} key={'fdsfd'} />

      <section className="item__description">
        <h5 className="heading-5">description</h5>
        <p className="item__description--text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          natus incidunt reprehenderit. Laborum nemo, molestias ab molestiae ad
          pariatur autem neque numquam rem, unde placeat omnis provident magni
          quam atque.
        </p>
      </section>

      <section className="item__related">
        <h3 className="heading-5 frist">related products</h3>

        <div className="item__related--card">
          <img src={item3} alt="House 1" className="item__related--card-img" />
          <h5 className="item__related--card-name">coffee</h5>
          <div className="item__related--card-text">
            <p>Hot Drink</p>
          </div>
          <div className="item__related--card-text">
            <p>double</p>
          </div>

          <div className="item__related--card-price">
            <p>$11.99</p>
          </div>
          <button className="btn-m item__related--card-btn">show more</button>
        </div>

        <div className="item__related--card">
          <img src={cardImg9} alt="House 1" className="item__related--card-img" />
          <h5 className="item__related--card-name">corioson</h5>
          <div className="item__related--card-text">
            <p>fresh bake</p>
          </div>
          <div className="item__related--card-text">
            <p>piece</p>
          </div>

          <div className="item__related--card-price">
            <p>$8.00</p>
          </div>
          <button className="btn-m item__related--card-btn">show more</button>
        </div>
        <div className="item__related--card">
          <img src={cardImg10} alt="House 1" className="item__related--card-img" />
          <h5 className="item__related--card-name">hot orio</h5>
          <div className="item__related--card-text">
            <p>fresh Drink</p>
          </div>
          <div className="item__related--card-text">
            <p>single</p>
          </div>

          <div className="item__related--card-price">
            <p>$15.00</p>
          </div>
          <button className="btn-m item__related--card-btn">show more</button>
        </div>
        <div className="item__related--card">
          <img src={shop1} alt="House 1" className="item__related--card-img" />
          <h5 className="item__related--card-name">ice mocha</h5>
          <div className="item__related--card-text">
            <p>fresh Drink</p>
          </div>
          <div className="item__related--card-text">
            <p>single</p>
          </div>

          <div className="item__related--card-price">
            <p>$18.50</p>
          </div>
          <button className="btn-m item__related--card-btn">show more</button>
        </div>
      </section>
    </article>
  );
};

export default ItemPage;
