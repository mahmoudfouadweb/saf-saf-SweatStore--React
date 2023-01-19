import blog1 from "../assets/small-img/blog1.jpg";
import blog2 from "../assets/small-img/blog2.jpg";
import blog3 from "../assets/small-img/blog3.jpg";
import blog4 from "../assets/small-img/blog4.jpg";
import blog5 from "../assets/small-img/blog5.jpg";

const Blog = () => {
  return (
    <section className="blog">
      <h4 className="heading-4">read our blog</h4>
      <h2 className="heading-4">all about our new flvors</h2>
      <div className="blog__card">
        <img src={blog1} alt="" className="blog__card--img" />
        <h5 className="heading-5">berry bread</h5>
        <p className="blog__card--text">
          Lorem, ut quas illum tempore, repellat dolore reprehenderit reiciendis
          quod.
        </p>
      </div>
      <div className="blog__card">
        <img src={blog2} alt="" className="blog__card--img" />
        <h5 className="heading-5">berry bread</h5>
        <p className="blog__card--text">
          Lorem, ut quas illum tempore, repellat dolore reprehenderit reiciendis
          quod.
        </p>
      </div>
      <div className="blog__card">
        <img src={blog3} alt="" className="blog__card--img" />
        <h5 className="heading-5">berry bread</h5>
        <p className="blog__card--text">
          Lorem, ut quas illum tempore, repellat dolore reprehenderit reiciendis
          quod.
        </p>
      </div>
      <div className="blog__card">
        <img src={blog4} alt="" className="blog__card--img" />
        <h5 className="heading-5">berry bread</h5>
        <p className="blog__card--text">
          Lorem, ut quas illum tempore, repellat dolore reprehenderit reiciendis
          quod.
        </p>
      </div>
    </section>
  );
};

export default Blog;
