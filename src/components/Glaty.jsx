import glaty from "../assets/glaty2.jpg";


const Glaty = () => {
  return (
    <section className="glaty">
    <img src={glaty} alt="" className="glaty__img" />
    <div className="glaty__box">
      <h4 className="heading-4">glaty</h4>
        <h2 className="heading-2">Fresh glaty</h2>
        
        
      <ul className="glaty__items">
        <li className="glaty__item">
          <p className="glaty__item--name">espresso</p>
          <span>$9</span>
          <p className="glaty__item--details">nuts + cream + cramil</p>
        </li>
        <li className="glaty__item">
          <p className="glaty__item--name">espresso double</p>
          <span>$12</span>
          <p className="glaty__item--details">nuts + cream + cramil</p>
        </li>
        <li className="glaty__item">
          <p className="glaty__item--name">Micato</p>
          <span>$9</span>
          <p className="glaty__item--details">nuts + cream + cramil</p>
        </li>
        <li className="glaty__item">
          <p className="glaty__item--name">Micato</p>
          <span>$9</span>
          <p className="glaty__item--details">nuts + cream + cramil</p>
        </li>
        <li className="glaty__item">
          <p className="glaty__item--name">Micato</p>
          <span>$9</span>
          <p className="glaty__item--details">nuts + cream + cramil</p>
        </li>
        <li className="glaty__item">
          <p className="glaty__item--name">Micato</p>
          <span>$9</span>
          <p className="glaty__item--details">nuts + cream + cramil</p>
        </li>
        <li className="glaty__item">
          <p className="glaty__item--name">Micato</p>
          <span>$9</span>
          <p className="glaty__item--details">nuts + cream + cramil</p>
        </li>
        <li className="glaty__item">
          <p className="glaty__item--name">Micato</p>
          <span>$9</span>
          <p className="glaty__item--details">nuts + cream + cramil</p>
        </li>
      </ul>

      <button className="cta ">view more</button>
    </div>
  </section>
  )
}

export default Glaty