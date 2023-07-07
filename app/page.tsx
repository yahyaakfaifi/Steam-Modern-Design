
import Navbar from '../app/components/navbar'
import Sidebar from '../app/components/sidebar'
import Swiperf from '../app/components/Swiper-mine'
import Filter from './components/filter'
import SwiperPopular from '../app/components/Popular'
import SwiperTrending from './components/trending'
import SwiperGenres from './components/category-genres'
import VRRGames from './components/VRGames'
import Footer from './components/footer'






export default function Home() {
  return (
    <main className="body-main">


      <div className="sidebar-container">
        <Sidebar></Sidebar>
      </div>

      <div className="container-main-content">

        <Navbar></Navbar>

        <div className="swiper-hero">
          <Swiperf></Swiperf>

          

        </div>

        <div className="filter-container">
          <Filter />
        </div>

        <div className="populer-container">
          <SwiperPopular />
        </div>

        <div className="trending-container">
          <SwiperTrending />
        </div>

        <div className="genres-container">
          <SwiperGenres />
        </div>

        <div className="vrgames-container">
          <VRRGames />
        </div>


        <div className="footer-container">
          <Footer/>
        </div>

        

        

 



      </div>
    </main>
  )
}
