import { Box, Stack, Typography, Button } from "@mui/material";
import image from "../../assets/imgs/jed-villejo-bEcC0nyIp2g-unsplash.jpg";
import image2 from "../../assets/imgs/jeffrey-f-lin-zs4Pahjo5ww-unsplash.jpg";
import image3 from "../../assets/imgs/akram-huseyn-MTCpxU8b31I-unsplash.jpg";
import "./banners.scss";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ImageBanner() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const imageRef = useRef(null);
  const infoRef = useRef(null);

  const mouseEnter = () => {
    setPaused(true);
  };

  const mouseLeave = () => {
    setPaused(false);
  };

  const bannerInfo = [
    { info: "running shoes finder", img: image },
    { info: "sportswear finder", img: image2 },
    { info: "gymwear finder", img: image3 },
  ];

  useEffect(() => {
    const bannerLooper = setInterval(() => {
      !paused &&
        setBannerIndex((index) => {
          if (index === 0) {
            return index + 1;
          } else if (index === bannerInfo.length - 1) {
            return 0;
          } else {
            return index + 1;
          }
        });
    }, 5000);

    return () => clearInterval(bannerLooper);
  }, [bannerIndex, mouseEnter]);

  useGSAP(() => {
    const tl1 = gsap.timeline();
    tl1.from(imageRef.current, {
      x: -50,
      duration: 1.5,
      ease: "power4.out",
    });

    const tl2 = gsap.timeline();
    tl2.from(infoRef.current, {
      x: 50,
      duration: 1.5,
      ease: "power4.out",
    });
  }, [bannerIndex]);

  return (
    <Box sx={{ margin:3, marginY:4 }}>
      <Typography variant="h5" sx={{ textAlign: "left", marginY: 2 }}>
        Find your Perfect Fit
      </Typography>

      <Stack
        sx={{
          padding: { xs: 4, md: 5 },
          paddingLeft: { xs: 6, md: 20 },
          position: "relative",
        }}
        className="banner-container"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <img ref={imageRef} src={bannerInfo[bannerIndex].img} alt="" />
        <Stack
          className="info-image-banner"
          ref={infoRef}
          sx={{ left: { xs: 75, md: 110 } }}
        >
          <Typography
            className="image-banner-text"
            variant="h1"
            sx={{
              textTransform: "uppercase",
              color: "secondary.contrastText",
              width: 0,
              overflow: "visible",
            }}
          >
            {bannerInfo[bannerIndex].info}
          </Typography>

          <Button
            variant="contained"
            color="primary.dark"
            sx={{
              backgroundColor: "secondary.contrastText",
              textTransform: "capitalize",
              borderRadius: 28,
              backgroundColor: "secondary.contrastText",
              "&:hover": { backgroundColor: "secondary.lighter" },
            }}
          >
            Learn more
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
