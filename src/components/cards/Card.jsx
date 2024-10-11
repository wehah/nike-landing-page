import { Box, Stack, Typography, Button } from "@mui/material";
// import img from "../../assets/imgs/florian-kurrasch-zkctapwhzxc-unsplash.jpg"
import "./cards.scss";

export default function Card({ buttonText, img, height, heightxs, name }) {
  return (
    <Stack sx={{marginX:{md:1, xs:1/2}, height:{md:`${height}rem`, xs:`${heightxs}rem` } }}  className="card-stack">
      <Box className="carBox" >
        <img title={name}  src={img} ></img>
      </Box>

      <Box className="button-box" sx={{ padding: 2 }}>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            borderRadius: 28,
            color: "primary.main",
            backgroundColor: "primary.light",
            transition:"0.5s ease",
            "&:hover":{backgroundColor: "secondary.light",  transition:"0.5s ease",}
          }}
          className="card-button"
        >
          {buttonText}
        </Button>
      </Box>
    </Stack>
  );
}
