import "./App.css";
import NavBar from "./components/navBar/TempNavBar.jsx";
import TopNavBar from "./components/navBar/TopNavBar";
import HeaderSlider from "./components/header/HeaderSlider";
import Carousel from "./components/carousel/Carousel"
import CentreBanner from "./components/banners/CentreBanner";
import CardsSlider from "./components/cards/CardSlider";
import ImageBanner from "./components/banners/ImageBanner";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
    <TopNavBar />
    <NavBar />
    <HeaderSlider />
    <Carousel />
    <CentreBanner />
    <CardsSlider cardType="mediaCard" />
    <CardsSlider cardType="largeMediaContentCard" />
    <ImageBanner />
    <CardsSlider cardType="mediaContentCard" />
    <Footer />
    </>
  );
}

export default App;
