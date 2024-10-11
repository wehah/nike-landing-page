import { Box, IconButton, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function Skipper(props) {
  const {
    cardsTitle,
    isDisabled,
    isActive,
    onPrevCard,
    onNextCard,
    isActiveR,
    isActiveL,
  } = props;

  //   const cardsTitle = "testing the skipper";
  //   const isDisabled = false;
  //   const isActive = true;


  const arrowButtonCss = {
    color: "secondary",
    backgroundColor: isDisabled
      ? "secondary.lighter3"
      : isActive
      ? "secondary.lighter2"
      : "secondary.lighter",
    "&:hover": { color: "primary.main", backgroundColor: "secondary.lighter" },
    "&:disabled": {
      color: "secondary.lighter",
      backgroundColor: "secondary.lighter3",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding:1,
        paddingX: 0.3,
    
      }}
    >
      <Typography variant="h5" sx={{ textTransform: "capitalize", }}>
        {cardsTitle}
      </Typography>
      <Stack sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <IconButton sx={arrowButtonCss} onClick={onPrevCard}>
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton sx={arrowButtonCss} onClick={onNextCard}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
