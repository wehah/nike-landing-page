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
    <CardsSlider cardType="card1" cardTitle="Shop Our Icons" />
    <CardsSlider cardType="card3" cardTitle="Shop  Sustainable Clothing" />
    <ImageBanner />
    <CardsSlider cardType="card2" cardTitle="Shop Our latest shoes" />
    <Footer />
    </>
  );
}

export default App;
