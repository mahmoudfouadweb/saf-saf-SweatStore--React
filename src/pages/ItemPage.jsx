import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// Local components
import PageTitle from "../components/PageTitle";
import Item from "../components/Item";
// Blog local Items
import { blogHome } from "../utilities/photos";

const ItemPage = ({ photos }) => {
  const [isItem, setIsItem] = useState({});
  const [isRelated, setIsRelated] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    const conArrays = [...photos, ...blogHome]
    console.log('conArrays',conArrays);
    const currentId = conArrays.filter(
      (item) => item ? item.key === id : console.log('error')
    );
    setIsItem(currentId[0]);
    const showRelated = photos
      .filter((item) => {
        if (item.category === id.slice(0, -1) && item) return item.category;
        if (item.category === id.slice(0, -2) && item) return item.category;
        else console.log('error');
      })
      .splice(Math.floor(Math.random() * 7), 4);
    setIsRelated(showRelated);
  }, [id]);
  return (
    <article className="item">
      <PageTitle title={isItem.title} subTitle={isItem.category} />

      <Item data={isItem}/>

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

        {/* Related Items */}

        {isRelated.map((item) => (
            <Link to={`/item/${item.key}`} className="item__related--card" key={item.key + "new"}>
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
              <button className="btn-m item__related--card-btn">
                show more
              </button>
            </Link>
        ))}
      </section>
    </article>
  );
};

export default ItemPage;
