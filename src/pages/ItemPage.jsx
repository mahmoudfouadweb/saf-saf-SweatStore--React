import PageTitle from "../components/PageTitle";
import Item from "../components/Item";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemPage = ({ photos }) => {
  const itemTitle = "coffee";

  const [isItem, setIsItem] = useState({});
  const [isRelated, setIsRelated] = useState([]);

  let { id } = useParams();
  console.log(id);
  console.log(id.slice(0, -2));

  useEffect(() => {
    const currentId = photos.filter((item) => item.key === id);
    setIsItem(currentId[0]);
    // const showRelated = photos
    //   .filter((item) => {
    //     if (id.slice(0, -2) === 'sweets') item.category === id.slice(0, -2);
    //     if (id.slice(0, -1) === 'sweets') item.category === id.slice(0, -1);
        
    //     else item.category === id.slice(0, -1);
    //   })
    //   .splice(0, 4);
    // console.warn(showRelated);
    // setIsRelated(showRelated);
  }, []);

  // console.log("showRelated ===>", isRelated);

  const relatedHandler = () => {};
  return (
    <article className="item">
      <PageTitle title={itemTitle} subTitle={"hot drink"} />

      <Item data={isItem} key={"fdsfd"} />

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

        {isRelated.map((item) => (
          <div className="item__related--card">
            <img
              src={item.src}
              alt="House 1"
              className="item__related--card-img"
            />
            <h5 className="item__related--card-name">{item.title}</h5>
            <div className="item__related--card-text">
              <p>{item.category}discription</p>
            </div>
            <div className="item__related--card-text">
              <p>{item.text}discription 2</p>
            </div>

            <div className="item__related--card-price">
              <p>${item.price}</p>
            </div>
            <button className="btn-m item__related--card-btn">show more</button>
          </div>
        ))}
      </section>
    </article>
  );
};

export default ItemPage;
