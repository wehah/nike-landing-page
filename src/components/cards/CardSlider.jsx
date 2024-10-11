import { useRef, useState } from "react";
import { Box, Stack, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import Skipper from "../carousel/Skipper";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3"
import "./cards.scss";

import image1 from "../../assets/imgs/george-catalina-1vHAP0oeUQE-unsplash.jpg";
import image2 from "../../assets/imgs/domino-studio-164_6wVEHfI-unsplash.jpg";
import image3 from "../../assets/imgs/mohammed-attia-wYVKRBIchV0-unsplash.jpg";
import image4 from "../../assets/imgs/peter-albanese-TRoZdTq8oIg-unsplash.jpg";
import image5 from "../../assets/imgs/raphael-nogueira-qHlsndlzXds-unsplash.jpg";
import image6 from "../../assets/imgs/derrick-payton-jHXyDTQgt0A-unsplash.jpg";
import image7 from "../../assets/imgs/stanley-g-mathu-U1uvzY8xNII-unsplash.jpg";
import image8 from "../../assets/imgs/hermes-rivera-wz_eb7K2Ip8-unsplash.jpg";
import image9 from "../../assets/imgs/sanju-pandita-36MiHf2KKr8-unsplash.jpg";
import image10 from "../../assets/imgs/mnz-v13tnV6D9lw-unsplash.jpg";
import Cimage1 from "../../assets/imgs/roman-holoschchuk-KOEnUT-_KiE-unsplash.jpg";
import Cimage2 from "../../assets/imgs/roman-holoschchuk-Zx99q6Rggwo-unsplash.jpg";
import Cimage3 from "../../assets/imgs/roman-holoschchuk-ZPvtacFKcR8-unsplash.jpg";
import Cimage4 from "../../assets/imgs/mark-broadhead-3CH1nBz3UZM-unsplash.jpg";
import Cimage5 from "../../assets/imgs/mark-broadhead-0mhWMvUlr3k-unsplash.jpg";
import Cimage6 from "../../assets/imgs/mark-broadhead-k96UxBbc8HM-unsplash.jpg";
import Cimage7 from "../../assets/imgs/grailify-9Ch-39ZNDk0-unsplash.jpg";
import Cimage8 from "../../assets/imgs/grailify-LwtYL4Yg-vM-unsplash.jpg";
import Cimage9 from "../../assets/imgs/grailify-FVU4juuS9GM-unsplash.jpg";
import Cimage10 from "../../assets/imgs/patricia-palma-l_adRqoRjnY-unsplash.jpg";
import Cimage11 from "../../assets/imgs/patricia-palma-OaAB-eYwmUU-unsplash.jpg";
import Cimage12 from "../../assets/imgs/donny-jiang-VrfLmiwzXNM-unsplash.jpg";



export default function CardsSlider({cardType, cardTitle}) {
 

  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  const items = [
    { name: "Air max", category: "golfing", img: image4 },
    { name: "Air Force 1", category: "running", img: image2 },
    { name: "gore-tex", category: "foot ball", img: image1 },
    { name: " Air Jordan", category: "Tennis", img: image3 },
    { name: " Air Jordan", category: "Tennis", img: image5 },
  ];

  const items2 = [
    { name: "Air max", category: "golfing", img: image6, price:"$175", detail:"men's shoes" },
    { name: "Air Force 1", category: "running", img: image7, price:"$170", detail:"women's shoes" },
    { name: "gore-tex", category: "foot ball", img: image8, price:"$215", detail:"sports shoes" },
    { name: " Air Jordan", category: "Tennis", img: image9, price:"$150", detail:"running shoes" },
    { name: " Air Jordan", category: "Tennis", img: image10, price:"$165", detail:"dress shoes" },
  ];

  const clothing = [
    {name:"Stylish Black", details:"casual clothing", slug:"casual-clothing", price:"$189", images:[Cimage1, Cimage2, Cimage3]},
    {name:"Nike purple hoodie", details:"Gender Neutral Hoodie", slug:"Gender-Neutral-Hoodie",  price:"$199", images:[Cimage4, Cimage5, Cimage6]},
    {name:"Nike Tape Hoodie & Pants", details:"casual clothing", slug:"casual-clothing",  price:"$215", images:[Cimage7, Cimage8, Cimage9]},
    {name:"Nike black hooded jacket", details:"casual clothing", slug:"casual-clothing",  price:"$165", images:[Cimage10, Cimage11, Cimage12]}
  ]

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = items.length;

  let sliderRef = useRef(null);


  const settings = {
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isLargeScreen ? 2.5 : 1.2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    Padding:0,
    cssEase: "cubic-bezier(0.12, 0.57, 0.63, 0.21)", //reference: https://joshcollinsworth.com/blog/easing-curves
  };



  const prevCard = () => {
    if (currentSlide > 0) {
      sliderRef.current.slickPrev();
    }
  };

  const allSlides = isLargeScreen ? totalSlides - 2.5 : totalSlides;
  const nextCard = () => {
    if (currentSlide < allSlides) {
      sliderRef.current.slickNext();
    }
  };

  // const carouselTitle = cardType === "card1" ? "Shop Our Icons" : "Shop Our latest shoes";

  return (
    <Box sx={{  marginX: 2, overflow: "hidden", position: "relative" }}>
      <Skipper
        onPrevCard={prevCard}
        onNextCard={nextCard}
        cardsTitle={cardTitle}
        isActive={true} //useState
      ></Skipper>

    {cardType=== "card1" && 
    <Slider
        ref={sliderRef}
        {...settings}
        sx={{}}
        className="sliderTracker"
      >
        {items.map((item, index) => (
          <Card
            buttonText={item.name}
            img={item.img}
            key={item.name}
            name={item.name}
            height={25}
            heightxs={15}
          />
        ))}
      </Slider>}

      {cardType=== "card2" &&
      <Slider
      ref={sliderRef}
        {...settings}
        sx={{}}
        className="sliderTracker"
        
      >
        {items2.map((item, index) => (
          <Card2
            buttonText={item.name}
            img={item.img}
            key={item.name}
            name = {item.name}
            price = {item.price}
            details = {item.detail}
            height={25}
            heightxs={15}
          />

          
        ))}
      </Slider>
       }

{cardType=== "card3" &&
      <Slider
      ref={sliderRef}
        {...settings}
        sx={{}}
        className="sliderTracker"
        
      >
        {clothing.map((item, index) => (
          <Card3
            index={index}
            buttonText={item.name}
            imgs={item.images}
            key={item.name}
            name = {item.name}
            price = {item.price}
            details = {item.details}
            height={45}
            heightxs={25}
          />
          
          
        ))}
      </Slider>
       }

    </Box>
  );
}
