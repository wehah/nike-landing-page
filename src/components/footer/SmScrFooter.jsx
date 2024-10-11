import ListSubheader from "@mui/material/ListSubheader";

import ListItemIcon from "@mui/material/ListItemIcon";

import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { useState } from "react";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";

export default function NestedListSmSc() {
  const [open, setOpen] = useState([false, false, false]);

  const handleClick = (index) => {
    setOpen((prev) => {
      const newOpen = [...prev];
      newOpen[index] = !newOpen[index];
      return newOpen;
    });
  };

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
    <List
      sx={{
        width: "100%",
        bgcolor: "primary.contrastText",
        display: { xs: "flex", flexDirection: "column", md: "none" },
      }}
      component="nav"
      aria-labelledby="mobile-footer-list"
    >
      {items.map((child, index) => (
        <Box key={index}>
          <ListItemButton
            onClick={() => handleClick(index)}
            sx={{ marginX: 1 }}
          >
            <ListItemText primary={child.item} />
            {open[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {child.subList.map((subListItem) => (
            <Collapse
              in={open[index]}
              timeout="auto"
              unmountOnExit
              key={subListItem}
            >
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemText
                    primary={subListItem}
                    sx={{ color: "secondary.main" }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          ))}
        </Box>
      ))}
    </List>
  );
}
