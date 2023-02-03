const Item = ({ data }) => {
  console.log(data);
  return (
    <article className="item__heading">
      <div className="item__left">
        <img src={data.src} alt="" className="item-img--1" />
      </div>

      <div className="item__right">
        <h4 className="heading-3">{data.title}</h4>
        <p className="item__price">{data.price}$</p>

        <p className="item__text">{data.detailText}</p>

        <p className="item__status">
          {data.available ? "Available" : "out of stock"}
        </p>
        <div className="item__like">
          <p>icon</p> <p>add to wishlist</p>
        </div>

        <p className="item__category">{data.category}</p>
        {/* <p className="item__tags">{...data.type}</p> */}
        <p className="item__social">Follow us: icons here</p>
      </div>
    </article>
  );
};

export default Item;
