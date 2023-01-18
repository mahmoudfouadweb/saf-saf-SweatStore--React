import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Sidebar />
      <HomeContent />
      <Footer />
    </div>
  )
}

export default Home