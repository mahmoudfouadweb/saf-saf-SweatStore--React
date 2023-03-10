import { Link } from "react-router-dom";
import { blogHome } from "../utilities/photos";

const Blog = () => {
  console.log("blogHome", blogHome);
  return (
    <section className="blog">
      <h4 className="heading-4">read our blog</h4>
      <h2 className="heading-2">all about our new flvors</h2>

      {blogHome.map((item) => (
        <Link
          to={`/item/${item.key}`}
          className={item.className}
          key={item.key}
        >
          <img src={item.src} alt={item.title} className="blog__card--img" />
          <h5 className="heading-5">{item.title}</h5>
          <p className="blog__card--text">{item.text}</p>
        </Link>
      ))}
    </section>
  );
};

export default Blog;
