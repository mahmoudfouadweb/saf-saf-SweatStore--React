const MenuSection = ({ photos }) => {
  

  return (
    <div className="menu__section">

      <div className="menu__card--box column-start">
        {photos.map((item) => (
          <div className="menu__card" key={item.key} >
          <img src={item.src} alt="menu item" className="menu__card--img" />
          <h6 className="heading-6">
              {item.title}<span> ................................ </span>
              <span className="bold">{item.price}$</span>
          </h6>
            <p className="menu__card--text">{ item.text}</p>
        </div>
        ))}
    </div>
  </div>
  )
}

export default MenuSection