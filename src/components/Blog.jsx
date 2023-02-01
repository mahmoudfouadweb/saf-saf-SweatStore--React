import { blogHome } from "../utilities/photos";

const Blog = () => {
  return (
    <section className="blog">
      <h4 className="heading-4">read our blog</h4>
      <h2 className="heading-2">all about our new flvors</h2>
      
      {blogHome.map((item,idx) => (
        <div className={item.className} key={idx}>
          <img src={item.src} alt={item.title} className="blog__card--img" />
          <h5 className="heading-5">{item.title}</h5>
          <p className="blog__card--text">{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Blog;
