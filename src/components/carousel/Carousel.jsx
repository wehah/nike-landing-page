import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import { useRef } from "react";
import Skipper from "./Skipper";
import MediaCard from "../cards/CardMedia";
import image1 from "../../assets/imgs/ben-weber-r-krWscXjvQ-unsplash.jpg";
import image2 from "../../assets/imgs/florian-kurrasch-HyivyCRdz14-unsplash.jpg";
import image3 from "../../assets/imgs/renith-r-A9VpotrPr1k-unsplash.jpg";
import image4 from "../../assets/imgs/frederik-rosar-q8D8IygmAzc-unsplash.jpg";
import "./carousel.scss";

export default function Carousel() {
  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  const items = [
    { name: "Nike Golf", category: "golfing", img: image4 },
    { name: "Air Force 1", category: "running", img: image2 },
    { name: "Nike CR7", category: "foot ball", img: image1 },
    { name: " Air Jordan", category: "Tennis", img: image3 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isLargeScreen ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "cubic-bezier(0.12, 0.57, 0.63, 0.21)", //reference: https://joshcollinsworth.com/blog/easing-curves
  };

  const sliderRef = useRef(null);

  const prevCard = () => {
    sliderRef.current.slickPrev();
  };

  const nextCard = () => {
    sliderRef.current.slickNext();
  };

  const carouselTitle = "Shop by sport";

  return (
    <Box sx={{ margin: 2 }} className="carousel-box ">
      <Skipper
        onPrevCard={prevCard}
        onNextCard={nextCard}
        cardsTitle={carouselTitle}
        isActive={true}
      />
      <Slider ref={sliderRef} {...settings} className="sliderr">
        {items.map((item, index) => (
          <MediaCard
            buttonText={item.category}
            img={item.img}
            key={item.name}
            height={35}
            heightxs={50}
          />
        ))}
      </Slider>
    </Box>
  );
}
