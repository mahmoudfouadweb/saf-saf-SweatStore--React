import ImageBar from '../components/ImageBar'
import PageTitle from '../components/PageTitle'

import menuimg from '../assets/gallery/brown/img (9).jpg'

const MenuPage = () => {
  return (
    <section className='menu'>
      <PageTitle title={'EL Menu'} subTitle={ 'your taste'} />
      
      <h2 className="heading-4">at your hand</h2>
      <h4 className="heading-2">variety sweet</h4>
      <p className="menu__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam animi magni amet esse ex rem possimus quisquam soluta numquam quaerat vero sint sit, nam, ipsum architecto qui. At, autem recusandae.</p>
      
      <div className="menu__section">
        {/* <img src={menuimg} alt="menu image" className="menu__section--img" /> */}
        
      </div>
      
      <ImageBar />
    </section>
    
  )
}

export default MenuPage