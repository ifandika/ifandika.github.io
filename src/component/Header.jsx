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

/**
 * Variabel pages digunakan untuk menyimpan alamat halaman berupa key-value, dengan name untuk nama
 * halaman dan id untuk id ke tujuan halaman /{id}
 */
const pages = [
  { name: "Home", id: "home" },
  { name: "Blog", id: "blog" },
  { name: "Graphic", id: "graphic" },
  { name: "Gallery", id: "Gallery" },
  { name: "Project", id: "project" },
  { name: "Library", id: "library" },
];

/**
 * Variabel fungsi NavList berisi
 * @param {*} param0 
 * @returns 
 */
const NavList = ({ ...props }) => {
  return (
    <Stack
      overflow="auto"
      direction={{ xs: "column", sm: "row" }}
      spacing={3}
      ml={{ xs: 3, sm: 0 }}
      mt={{ xs: 3, sm: 0 }}
      width={{ xs: "200px", sm: "initial" }}
      {...props}
    >
      {pages.map((page) => (
        <Link
          to={ page.id != "home" ? `/${page.id}` : '/' }
          key={page.id}
          sx={{
            color: { xs: "black", sm: "black", sx: "black", cursor: "pointer" },
          }}
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold"
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
          '& .MuiDrawer-paper': {
            width: '200px',
            backgroundColor: '#2c3e50',
            color: 'white',
            padding: '20px',
          },
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
// const Nav = () => {
//   const [open, setOpen] = useState(false);
//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };
  
//   return (
//     <>
//       <Button
//         variant="text"
//         onClick={toggleDrawer(true)}
//         sx={{ color: "white", display: { xs: "flex", sm: "none" } }}
//       >
//         <MenuIcon/>
//       </Button>
//       <Drawer
//         open={open}
//         onClose={toggleDrawer(false)}
//         anchor="right"
//         sx={{
//           display: { xs: "inherit", sm: "none" },
//         }}
//       >
//         <NavList />
//       </Drawer>
//       <NavList
//         sx={{
//           display: { xs: "none", sm: "inherit" },
//         }}
//       />
//     </>
//   );
// };

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
            sx={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Typography variant="h6">Ifandika.github.io</Typography>
            <Nav></Nav>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
