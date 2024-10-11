
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Divider } from "@mui/material";
import Jordan from "../../assets/icons/Jordan.svg"
import { Fragment } from "react";


export default function TopNavBar() {


  return (
    <Box  sx={{ flexGrow: 1, display: { xs: "none", md: "flex"}, backgroundColor: "secondary.contrastText"}}>
      <AppBar position="static" color="secondary.light" elevation={0}>
        <Box sx={{display:"flex", alignItems:"center", paddingX:"24px", paddingY:0}}>
         <Box
            sx={{
              display: { xs: "flex", md: "flex" },
              flexGrow:1,
              width: {xs:40, md:60},
              fill: "#111111",
            }}
          >
            <Jordan />
          </Box>
          <List sx={{ display: "flex",alignContent:"center", gap: 2}}>
            {["find store", "help", "join us", "sign in"].map((text, index) => (
              <Fragment   key={index}>
                <ListItemButton sx={{padding:0, "&:hover":{backgroundColor: "transparent"}}} > 
                <ListItemText
                  primary={text}
                  sx={{ 
                    color: "primary.main", 
                    textTransform: "capitalize",
                    "&:hover":{color:"secondary.main", backgroundColor: "transparent"}

                  }}
                ></ListItemText></ListItemButton>
                {index < 3 && (
                  <Divider
                  orientation="vertical"
                  flexItem
                    sx={{ borderColor:"primary.dark", borderRightWidth:1, alignSelf:"center",   height:15 }}
                  />
                )}
              </Fragment>
            ))}
          </List>
        </Box>
      </AppBar>
    </Box>
  );
}
