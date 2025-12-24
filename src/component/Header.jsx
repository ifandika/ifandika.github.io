import React, { useState } from "react";
import {
  Stack,
  Toolbar,
  Typography,
  Container,
  AppBar,
  Button,
  Drawer,
  colors,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Graphic from "../pages/Graphic";
import Gallery from "../pages/Gallery";
import Project from "../pages/Project";
import Library from "../pages/Library";

const pages = [
  { name: "Home", id: "home" },
  { name: "Blog", id: "blog" },
  { name: "Graphic", id: "graphic" },
  { name: "Gallery", id: "Gallery" },
  { name: "Project", id: "project" },
  { name: "Library", id: "library" },
];
const NavList = ({ ...props }) => {
  return (
    <Stack
      overflow="auto"
      direction={{ xs: "column", sm: "row" }}
      gap={3}
      ml={{ xs: 3, sm: 0 }}
      mt={{ xs: 3, sm: 0 }}
      width={{ xs: "200px", sm: "initial" }}
      {...props}
    >
      {pages.map((page) => (
        <Link
          to={ page.id != "home" ? `/${page.id}` : 'https://ifandika.github.io' }
          key={page.id}
          sx={{
            color: { xs: "black", sm: "white", sx: "black", cursor: "pointer" },
          }}
          style={{
            textDecoration: "none",
          }}
        >
          {page.name}
        </Link>
      ))}
    </Stack>
  );
};
const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <Button
        variant="text"
        onClick={toggleDrawer(true)}
        sx={{ color: "white", display: { xs: "flex", sm: "none" } }}
      >
        <MenuIcon/>
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        sx={{
          display: { xs: "inherit", sm: "none" },
        }}
      >
        <NavList />
      </Drawer>
      <NavList
        sx={{
          display: { xs: "none", sm: "inherit" },
        }}
      />
    </>
  );
};
const Header = () => {
  return (
    <AppBar
      sx={{
        height: "65px",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h6">Ifandika.github.io</Typography>
            <Nav/>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
