import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import "./cards.scss";
import { useState } from "react";

export default function MediaCard({
  img,
  price,
  name,
  details,
  buttonText,
  height,
  heightxs,
  imageThumbnails,
}) {
  const [currentImg, setCurrentImg] = useState(0);

  const handleCurrentImg = (index) => {
    setCurrentImg(index);
  };

  return (
    <Card
      sx={{
        backgroundColor: "primary.light",
        borderRadius: 0,
        cursor: "pointer",
        marginX: { md: 1, xs: 1 / 2 },
      }}
      className="card-stack"
    >
      <CardMedia
        sx={{ height: { md: `${height}rem`, xs: `${heightxs}rem` } }}
        image= {imageThumbnails ? imageThumbnails[currentImg] : img}
        title={name}
      />
      {imageThumbnails &&
       <Stack
       sx={{
        display: "flex",
        flexDirection: "row",
        height: 55,
        padding: 1,
        paddingX:2,
        gap: 1,
      }}
       
     >
       {imageThumbnails.map((img, index) =>(
           <img
           key={index}
           src={img}
           alt={name+[index]}
           onClick={() => handleCurrentImg(index)}
           onMouseEnter={() => handleCurrentImg(index)}
           className={`${currentImg === index ? "card3-image-active card3-image":"card3-image"}`}
           sx={{
            overflowClipMargin: "content-box",
            overflow: "clip",
           }}
         />
       ))}
       
     </Stack>
      }

      {buttonText && (
        <Box className="button-box" sx={{ padding: 2 }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: 28,
              color: "primary.main",
              backgroundColor: "primary.light",
              transition: "0.5s ease",
              "&:hover": {
                backgroundColor: "secondary.light",
                transition: "0.5s ease",
              },
            }}
            className="card-button"
          >
            {buttonText}
          </Button>
        </Box>
      )}

      {details && (
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "left", textTransform: "capitalize" }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              textAlign: "left",
              textTransform: "capitalize",
            }}
          >
            {details}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "left" }}
          >
            {price}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}
