import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import image0 from "../../assets/imgs/sanju-pandita-36MiHf2KKr8-unsplash.jpg";
import image1 from "../../assets/imgs/mohammed-attia-wYVKRBIchV0-unsplash.jpg";
import image2 from "../../assets/imgs/george-catalina-1vHAP0oeUQE-unsplash.jpg";
import { Stack } from "@mui/material";
import { useState } from "react";

export default function MultiActionAreaCard({
  imgs,
  price,
  name,
  details,
  height,
  heightxs,
  index
}) {
  const [currentImg, setCurrentImg] = useState(imgs[0]);

  const handleCurrentImg = (index) => {
    setCurrentImg(index);
  };

  return (
    <Card
    key={name}
      sx={{
        backgroundColor: "primary.light",
        borderRadius: 0,
        cursor: "pointer",
        marginX: { md: 1, xs: 1 / 2 },
        

      }}
    >
      <CardActionArea>
        <CardMedia
        key={index}
          component="img"
          image={currentImg}
          alt={name}
          sx={{height: { md: `${height}rem`, xs: `${heightxs}rem` }}}
        />
      </CardActionArea>
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
        {imgs.map((img, index) =>(
            <img
            key={imgs[index]}
            src={imgs[index]}
            alt={name+[index]}
            onClick={() => handleCurrentImg(imgs[index])}
            onMouseEnter={() => handleCurrentImg(imgs[index])}
            className={`${currentImg === imgs[index] ? "card3-image-active card3-image":"card3-image"}`}
          />
        ))}
        
      </Stack>
      <CardContent sx={{ textAlign: "left", textTransform:"capitalize"}}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {details}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
}
