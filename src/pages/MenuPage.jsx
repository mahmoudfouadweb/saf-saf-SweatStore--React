import ImageBar from '../components/ImageBar'
import PageTitle from '../components/PageTitle'

import menuimg from '../assets/gallery/brown/img (9).jpg'

const MenuPage = () => {
  return (
    <section className='menu'>
      <PageTitle title={'EL Menu'} subTitle={ 'your taste'} />
      
      <h4 className="heading-4">variety sweet</h4>
      <h2 className="heading-2">at your hand</h2>
      
      <div className="menu__section">
        <img src={menuimg} alt="menu image" className="menu__section--img" />
        
      </div>
      
      <ImageBar />
    </section>
    
  )
}

export default MenuPage