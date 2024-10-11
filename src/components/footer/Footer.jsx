import ListSubheader from "@mui/material/ListSubheader";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import "./footer.scss";
import NestedListSmSc from "./SmScrFooter";

export default function NestedList() {
  const items = [
    {
      item: "Resources",
      subList: ["Find a Store", "Our Journal", "Became a Member", "Feedback"],
    },
    {
      item: "Help",
      subList: ["Get Help", "Order Status", "Returns", "Reviews"],
    },
    {
      item: "Company",
      subList: ["About Us", "News", "Careers", "Sustainability"],
    },
  ];

  return (
    <Box sx={{ bgcolor: "secondary.contrastText" }}>
      <List
        sx={{
          padding: 3,

          display: { md: "flex", justifyContent: "space-between", xs: "none" },
        }}
        component="nav"
        aria-labelledby="footer-list"
      >
        {items.map((child, index) => (
          <Box key={index}>
            <ListItem sx={{ padding: 0, px:1 }}>
              <ListItemText primary={child.item} />
            </ListItem>

            {child.subList.map((subListItem) => (
              <ListItemButton
                sx={{
                  padding: 0,
                  color: "secondary.main",
                  backgroundColor: "transparent",
                }}
                className="list-button"
                timeout="auto"
                key={subListItem}
              >
                <List component="div" sx={{ paddingY: 0, margin: 0 }}>
                  <ListItemButton sx={{ p: 0, px: 1 }}>
                    <ListItemText primary={subListItem} />
                  </ListItemButton>
                </List>
              </ListItemButton>
            ))}
          </Box>
        ))}
      </List>

      <NestedListSmSc />

      <Typography
        variant="h5"
        sx={{
          color: "secondary.main",
          borderTop: 1,
          borderBottom: 1,
          borderColor: "secondary.main",
          padding: 1,
          margin: 2,
        }}
      >
        © Coded by Mohamed Ali
      </Typography>
    </Box>
  );
}
