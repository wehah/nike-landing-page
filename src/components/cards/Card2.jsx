import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./cards.scss";

export default function MediaCard({
  img,
  price,
  name,
  details,
  height,
  heightxs,
}) {
  return (
    <Card
      sx={{
        backgroundColor: "primary.light",
        borderRadius: 0,
        cursor: "pointer",
        marginX: { md: 1, xs: 1 / 2 },
        
        
      }}
    >
      <CardMedia
        sx={{ height: { md: `${height}rem`, xs: `${heightxs}rem` } }}
        image={img}
        title={name}
        
      />
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
    </Card>
  );
}
