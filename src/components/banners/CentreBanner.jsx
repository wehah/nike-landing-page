import { Stack, Typography, Button, Box } from "@mui/material";

export default function CentreBanner() {
  return (
    <>
      <Stack
      
        sx={{
          margin: 2,
          display: "flex",
          flexWrap: "wrap",
          alignContent: { md: "center", xs: "start" },
          gap: 1 / 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{ textAlign: { xs: "left", md: "center" } }}
        >
          DON’T WASTE YOUR <br /> ENERGY
        </Typography>

        <Typography
          variant="body1"
          sx={{ textAlign: { xs: "left", md: "center" } }}
        >
          Run in Pegasus. <br /> Feel the responsive energy return of Air <br />{" "}
          Zoom and ReactX foam.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: { md: "center", xs: "start" },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: "capitalize",
              borderRadius: 28,
              "&:hover": { backgroundColor: "secondary.dark" },
            }}
          >
            shop
          </Button>
        </Box>
      </Stack>
    </>
  );
}
