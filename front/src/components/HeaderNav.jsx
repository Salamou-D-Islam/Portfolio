import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import DarkMode from "./DarkMode.jsx";
import { ButtonNav } from "./ButtonLink.jsx";
import CloseIcon from "@mui/icons-material/Close";

import { Popper, Paper, MenuList, MenuItem } from "@mui/material";
import Grow from "@mui/material/Grow";

function HeaderNav({ children, to, onClick, className }) {
  return (
    <li onClick={onClick} className={`list-none ${className}`}>
      <Link
        className="font-sans p-3 mb:hover:bg-neutral-300/50 hover:text-(--color-primary) underline-left relative pb-1 border-b-2 border-transparent  hover:after:scale-x-100"
        to={to}
      >
        {children}
      </Link>
    </li>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    {
      title: "Présentation",
      id: "hero",
    },
    {
      title: "A Propos",
      id: "about",
    },
    {
      title: "Mes Projets",
      id: "projets",
    },
    {
      title: "Me Contacter",
      id: "contact",
    },
  ];
  const [active, setActive] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(false)}
    >
      <List className="bg-primary">
        <ListItem className="flex flex-col gap-5">
          <ListItemButton onClick={toggleDrawer(false)}>
            <CloseIcon className="color-foreground " />
          </ListItemButton>

          <Divider />

          <span className="text-gray-600">Naviguer dans la page:</span>

          {navItems.map((nav) => (
            <button
              key={nav.id}
              className="p-3 w-full text-center hover:bg-neutral-300/50 transition-all duration-200 ease-in-out"
              onClick={() =>
                document
                  .getElementById(nav.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {nav.title}
            </button>
          ))}
        </ListItem>
      </List>

      <Divider />

      <List className="bg-primary h-102">
        <ListItem className="flex flex-col gap-8">
          <span className="text-gray-600">Voir en détail:</span>

          <Link
            to="/profil"
            className="p-2 w-full text-center hover:bg-neutral-300/50 transition-all duration-200 ease-in-out"
          >
            Tout mon Profil
          </Link>

          <Link
            to="/projets"
            className="p-2 w-full text-center hover:bg-neutral-300/50 transition-all duration-200 ease-in-out"
          >
            Tout mes Projets
          </Link>

          <Link
            to="/"
            className="p-2 w-full text-center hover:bg-neutral-300/50 transition-all duration-200 ease-in-out"
          >
            Revenir à la page d'accueil
          </Link>

          <DarkMode />
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      <ButtonNav onClick={toggleDrawer(true)} />
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

function NavSection() {
  const [active, setActive] = useState("home");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <div
        onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
        onMouseLeave={() => setAnchorEl(null)}
      >
        {/* Bulle / trigger */}
        <button className="p-3 mb:hover:bg-neutral-300/50 hover:text-(--color-primary)! underline-left relative pb-1 border-b-2 border-transparent">
          Voir en detail
        </button>

        {/* Menu */}
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement="bottom"
          disablePortal
        >
          <Grow in={open} timeout={200}>
            <Paper elevation={6}>
              <MenuList className="navSectionHeader">
                <Link to="/profil">
                  <MenuItem>Tout mon Profil</MenuItem>
                </Link>

                <Link to="/projets">
                  <MenuItem>Tout mes Projets </MenuItem>
                </Link>

                <Link to="/">
                  <MenuItem>Revenir à la page d'accueil </MenuItem>
                </Link>
              </MenuList>
            </Paper>
          </Grow>
        </Popper>
      </div>
    </>
  );
}

export default HeaderNav;
export { MobileNav, NavSection };
