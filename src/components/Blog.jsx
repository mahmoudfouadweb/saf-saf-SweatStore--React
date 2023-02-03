import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogHome } from "../utilities/photos";

const Blog = () => {
  const [isItem, setIsItem] = useState({});
  let { id } = useParams();
  
  useEffect(() => {
    // const currentId = blogHome.filter((item) => item.key === id.slice(0, -2));
    // setIsItem(currentId[0]);
    // const showRelated = photos
    //   .filter((item) => {
    //     if (item.category === id.slice(0, -1)) return item.category;
    //     if (item.category === id.slice(0, -2)) return item.category;
    //   }).splice(Math.floor(Math.random() *7), 4);
      
    // console.log('showRelated +++',showRelated);
    // setIsRelated(showRelated);
    // console.log('random :>> ', Math.floor(Math.random() *2));
  }, [id]);
  return (
    <section className="blog">
      <h4 className="heading-4">read our blog</h4>
      <h2 className="heading-2">all about our new flvors</h2>
      
      {blogHome.map((item) => (
        <Link to={`/item/${item.key}`} className={item.className} key={item.key}>
          <img src={item.src} alt={item.title} className="blog__card--img" />
          <h5 className="heading-5">{item.title}</h5>
          <p className="blog__card--text">{item.text}</p>
        </Link>
      ))}
    </section>
  );
};

export default Blog;
