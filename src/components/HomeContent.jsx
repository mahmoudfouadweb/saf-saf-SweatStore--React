
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import rev1 from '../assets/main-home-rev-img1.png'
import rev2 from '../assets/main-home-rev-img2.png'
import rev3 from '../assets/main-home-rev-img3.png'

const HomeContent = () => {
  return (
    <main className="home-content">
      <div className="feature">
      <MdOutlineArrowBackIos className='feature__arr-left'/>
      <img src={rev1} alt="feature image"  className='feature__img'/>
      <MdOutlineArrowForwardIos className='feature__arr-right'/>
        
      </div>
      {/* <img src={rev2} alt="" />
      <img src={rev3} alt="" /> */}
    </main>
  );
};

export default HomeContent;
