import item3 from "../assets/gallery/drink/drink4.jpg";

const Item = ({data}) => {
  // console.log(data);
  return (
    <article className="item__heading">
        <div className="item__left">
          <img src={data[1].src} alt="" className="item-img--1" />
        </div>

        <div className="item__right">
        <h4 className="heading-3">{data[1].title}</h4>
          <p className="item__price">{data[1].price}$</p>

          <p className="item__text">
          {data[1].detailText}
          </p>

          <p className="item__status">{data[1].available ? 'Available': 'out of stock'}</p>
          <div className="item__like">
            <p>icon</p> <p>add to wishlist</p>
          </div>

          <p className="item__category">{data[1].category}</p>
          <p className="item__tags">{...data[1].type}</p>
          <p className="item__social">Follow us: icons here</p>
        </div>
      </article>
  )
}

export default Item