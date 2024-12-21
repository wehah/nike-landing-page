import { Box } from "@mui/system";
import Slider from "react-slick";
import { Link, Stack, Typography } from "@mui/material";
import "./header.scss";

export default function HeaderSlider() {
  const texts = ["Air max", "Air Force 1", "gore-tex", "Air Jordan", "Air Jordan"];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
     cssEase: "cubic-bezier(0.12, 0.57, 0.63, 0.21)" //reference: https://joshcollinsworth.com/blog/easing-curves
  };

  return (
    <Box position="static" elevation={0} sx={{ overflow: "hidden" }} >
      <Slider {...settings}>
        {texts.map((text, index) => (
          <Stack
            key={index}
            width={100}
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Typography
              variant="body1"
              width={100}
              sx={{
                padding: 0,
                color: "primary.dark",
                textAlign: "center",
                backgroundColor: "secondary.contrastText",
                width: "100%",
                textTransform:"capitalize",
                
              }}
            >
              {text} <Link variant="body2" sx={{cursor:"pointer"}} ><br/>Shop</Link>
            </Typography>
          </Stack>
        ))}
      </Slider>
    </Box>
  );
}
