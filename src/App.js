//Components
import Banner from './components/FeaturedCard/index';
import Header from './components/Header/index';
import BannerTop from './components/Banners/BannerTop';
import BannerBottom from './components/Banners/BannerBottom';
import Footer from './components/Footer';


const App=()=> {
  return (
    <>
      <Header />
      <Banner />
      <BannerTop />
      <BannerBottom/>
      <Footer/>
    </>
  );
}

export default App;
