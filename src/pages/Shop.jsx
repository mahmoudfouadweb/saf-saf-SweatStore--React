import PageTitle from '../components/PageTitle'
import shop1 from '../assets/gallery/brown/img (3).jpg'
import DiscreteSliderLabel from '../components/Slider'

const Shop = () => {
  return (
    <section className='shop'>
      <PageTitle title={"Shop"} subTitle={'sub'} />
      
      <aside className='shop__sidebar'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugiat suscipit tempore. Quasi error dolorem quibusdam! Neque assumenda velit mollitia magnam ea distinctio quibusdam, odio, recusandae vitae optio perferendis qui?
        <DiscreteSliderLabel />
      </aside>
      
      
      <div className="shop__card">
        <div className="shop__card--img-box">
          <img src={shop1} alt="" className="shop__card--img" />
        </div>
        <h6 className="heading-6">choco glaze</h6>
        <p className="shop__card--text">now with chocolate chips!</p>
        <input type={''}/>
      </div>
      
      
      <div className="shop__card">
        <div className="shop__card--img-box">
          <img src={shop1} alt="" className="shop__card--img" />
        </div>
        <h6 className="heading-6">choco glaze</h6>
        <p className="shop__card--text">now with chocolate chips!</p>
      </div>
      
      
      <div className="shop__card">
        <div className="shop__card--img-box">
          <img src={shop1} alt="" className="shop__card--img" />
        </div>
        <h6 className="heading-6">choco glaze</h6>
        <p className="shop__card--text">now with chocolate chips!</p>
      </div>
      
      
      
      <div className="shop__card">
        <div className="shop__card--img-box">
          <img src={shop1} alt="" className="shop__card--img" />
        </div>
        <h6 className="heading-6">choco glaze</h6>
        <p className="shop__card--text">now with chocolate chips!</p>
      </div>
      
      
      <div className="shop__card">
        <div className="shop__card--img-box">
          <img src={shop1} alt="" className="shop__card--img" />
        </div>
        <h6 className="heading-6">choco glaze</h6>
        <p className="shop__card--text">now with chocolate chips!</p>
      </div>
      
      
      <div className="shop__card">
        <div className="shop__card--img-box">
          <img src={shop1} alt="" className="shop__card--img" />
        </div>
        <h6 className="heading-6">choco glaze</h6>
        <p className="shop__card--text">now with chocolate chips!</p>
      </div>
      
      
      
      <div className="shop__card">
        <div className="shop__card--img-box">
          <img src={shop1} alt="" className="shop__card--img" />
        </div>
        <h6 className="heading-6">choco glaze</h6>
        <p className="shop__card--text">now with chocolate chips!</p>
      </div>
      
      
      <div className="shop__card">
        <div className="shop__card--img-box">
          <img src={shop1} alt="" className="shop__card--img" />
        </div>
        <h6 className="heading-6">choco glaze</h6>
        <p className="shop__card--text">now with chocolate chips!</p>
      </div>
      
      
      <div className="shop__card">
        <div className="shop__card--img-box">
          <img src={shop1} alt="" className="shop__card--img" />
        </div>
        <h6 className="heading-6">choco glaze</h6>
        <p className="shop__card--text">now with chocolate chips!</p>
      </div>
      
      
    </section>
  )
}

export default Shop