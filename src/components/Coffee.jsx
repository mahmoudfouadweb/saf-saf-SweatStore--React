import coffee from "../assets/feature2.jpg";

const Coffee = () => {
  return (
    <section className="coffee">
        <div className="coffee__box">
          <h4 className="heading-4">we are open</h4>
          <h2 className="heading-2">working hours</h2>
          <ul className="coffee__items">
            <li className="coffee__item">
              <p className="coffee__item--name">espresso</p>
              <span>$9</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--name">espresso double</p>
              <span>$12</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--name">Micato</p>
              <span>$9</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--name">Micato</p>
              <span>$9</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--name">Micato</p>
              <span>$9</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--name">Micato</p>
              <span>$9</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--name">Micato</p>
              <span>$9</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--name">Micato</p>
              <span>$9</span>
              <p className="coffee__item--details">nuts + cream + cramil</p>
            </li>
          </ul>

          <button className="cta btn-primary">view more</button>
        </div>
        <img src={coffee} alt="" className="coffee__img" />
      </section>

  )
}

export default Coffee