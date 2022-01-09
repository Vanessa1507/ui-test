//Components
import Banner from './components/FeaturedCard/index';
import Header from './components/Header/index';
import BannerTop from './components/Banners/BannerTop';
import BannerBottom from './components/Banners/BannerBottom';
import Footer from './components/Footer';
import PreviousRulings from './components/PreviousRulings/index';


const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <BannerTop />
      <PreviousRulings />
      <BannerBottom />
      <Footer />
    </>
  );
}

export default App;
