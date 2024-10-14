import Link from "next/link";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const listContainerStyles = {
  display: "flex",
  flexDirection: "row",
  textAlign: "center",
  mb: "15px",
  backgroundColor: "#1976d2",
};

const listStyles = {
  display: "flex",
  flexDirection: "row",
};

const listButtonStyles = {
  textAlign: "center",
};

const linkStyles = {
  textDecoration: "none",
  color: "white",
};

export default function NavBar() {
  return (
    <Box sx={listContainerStyles}>
      <List sx={listStyles}>
        <ListItem disablePadding>
          <ListItemButton sx={listButtonStyles}>
            <Link style={linkStyles} href="/">
              <ListItemText primary="Home" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={listButtonStyles}>
            <Link style={linkStyles} href="/search">
              <ListItemText primary="Search" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={listButtonStyles}>
            <Link style={linkStyles} href="/login">
              <ListItemText primary="Login" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={listButtonStyles}>
            <Link style={linkStyles} href="/settings">
              <ListItemText primary="Settings" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
