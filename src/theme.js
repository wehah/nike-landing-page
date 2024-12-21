import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#111111",
      light: "#ffffff",
      dark: "#111111",
      contrastText: "#f5f5f5",
    },
    secondary: {
      main: "#707072",
      light:"#98989A",
      lighter:"#b7b7b8",
      lighter2:"#CBCBCD",
      lighter3:"#F5F5F5",
      contrastText: "#F5F5F5",
    },
    info: {
      main: "#111111",
      light: "#111111",
    },
    background: {
      paper: "#F5F5F5",
      default: "#ffffff",
    },
    text: {
      primary: "#111111",
    },
  },
  typography: {
    h1: {
      fontFamily: "Poppins",
      fontSize: "3.3rem",
      fontWeight: 900,
    },
    h5: {
      fontFamily: "Inter",
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontFamily: "Inter",
      fontSize: "1.1rem",
      fontWeight: 500,
    },

    body2: {
      fontFamily: "Inter",
      fontSize: "1.2rem",
      fontWeight: 600,
    },
    button: {
      fontFamily: "Inter",
      fontSize: "1rem",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
});

theme = responsiveFontSizes(theme); //this is method, so brackets

export default theme;
