import { Link, useNavigate } from "react-router-dom";
import { Home, Person, Logout, Plagiarism } from "@mui/icons-material";
import {
  Box,
  List,
  Drawer,
  AppBar,
  Toolbar,
  ListItem,
  Container,
  Typography,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";

export const Sidebar = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ width: "calc(100% - 250px)" }}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>OTT Dashboard</Typography>
          <Box display="flex">
            <Link
              to="/"
              onClick={() => sessionStorage.setItem("isLoggedIn", false)}
            >
              <b>LOGOUT</b>
            </Link>
            &nbsp; &nbsp;
            <Logout />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 250,
          "& .MuiDrawer-paper": {
            width: 250,
          },
        }}
      >
        <img
          style={{ margin: "3rem", cursor: "pointer" }}
          onClick={() => navigate("/home")}
          src="/images/logo.png"
          alt="Logo"
        />
        <List>
          <FullListItem
            icon={<Home color="primary" />}
            text="Home"
            link="/home"
          />
          <FullListItem
            icon={<Person color="primary" />}
            text="Users"
            link="/users"
          />
          <FullListItem
            icon={<Plagiarism color="primary" />}
            text="Content"
            link="/content"
          />
        </List>
      </Drawer>
      <Container maxWidth="xl" sx={{ mt: 10, mb: 10 }}>
        {children}
      </Container>
    </Box>
  );
};

export const FullListItem = ({ text, icon, link }) => {
  const navigate = useNavigate();

  return (
    <ListItem>
      <ListItemButton onClick={() => navigate(`${link}`)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>
          <b>{text}</b>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
