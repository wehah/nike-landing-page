import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography } from "@mui/material";
import Jordan from "../../assets/icons/Jordan.svg";
import { Height } from "@mui/icons-material";
import { useState, Fragment, createElement } from "react";
import Stack from "@mui/material/Stack";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import StorefrontIcon from "@mui/icons-material/Storefront";

export default function AnchorTemporaryDrawer() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const icons = [
    HelpOutlineOutlinedIcon,
    ShoppingBagOutlinedIcon,
    CardGiftcardIcon,
    StorefrontIcon,
  ];

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 350,
        paddingX: 1,
      }}
      role="presentation"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          padding: 1,
        }}
      >
        <IconButton
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          aria-label="close menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          sx={{ color: "primary.dark" }}
        >
          <CloseIcon fontSize="medium" />
        </IconButton>
      </Box>

      <List sx={{ paddingY: 3 }}>
        {["New & Featured", "Men", "Women", "Kids", "Sale"].map(
          (text, index) => (
            <ListItem key={text} sx={{ padding: 0 }}>
              <ListItemButton>
                <ListItemText
                  primary={text}
                  sx={{ color: "primary.dark" }}
                  primaryTypographyProps={{ variant: "h5" }}
                />
                <ListItemIcon
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <ArrowForwardIosIcon sx={{ color: "primary.dark" }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>

      <Box
        sx={{
          paddingX: 2,
          paddingY: 3,
          display: "flex",
          alignItems: "center",
          gap: 2,
          fill: "#111111",
        }}
      >
        <Jordan height="50px" width="50" />
        <Typography sx={{ fontWeight: "bold" }}>Jordan</Typography>
      </Box>

      <Box
        sx={{
          paddingX: 2,
          paddingY: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "secondary.main",
            "&:span": { color: "red", curser: "pointer" },
          }}
        >
          Become a member for the best products, inspiration and stores in sport{" "}
          <span style={{ color: "#111111", cursor: "pointer" }}>
            Learn More.
          </span>
        </Typography>
        <Stack sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "capitalize", borderRadius: 28, "&:hover": { backgroundColor:"secondary.dark"} }}
          >
            Join Us
          </Button>
          <Button
            variant="contained"
            color="secondary.light"
            disableElevation
            sx={{
              textTransform: "capitalize",
              borderRadius: 28,
              border: 1,
              color: "secondary.main",
              "&:hover": {
                backgroundColor: "secondary.dark",
                color: "secondary.lighter2",
                transition: "0.5s ease",
              },
            }}
          >
            Sign In
          </Button>
        </Stack>
      </Box>

      <List sx={{ paddingX: 2, paddingY: 3 }}>
        {["help", "bag", "orders", "find a store"].map((text, index) => (
          <ListItem key={text} sx={{ padding: 0 }}>
            <ListItemButton sx={{ padding: 0 }}>
              <ListItemIcon sx={{ color: "primary.dark" }}>
                {createElement(icons[index])}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ variant: "body2" }}
                sx={{ textTransform: "capitalize" }}
              ></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <Fragment key={anchor}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(anchor, true)}
            sx={{ color: "primary.dark" }}
          >
            <MenuIcon />
          </IconButton>

          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
