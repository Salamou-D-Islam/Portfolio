import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import DarkMode from ".//DarkMode.jsx";
import { ButtonNav } from "./ButtonLink.jsx";
import CloseIcon from "@mui/icons-material/Close";

function HeaderNav({ children, to }) {
  return (
    <li className="list-none">
      <Link
        className="font-sans p-3 mb:hover:bg-neutral-300/50 hover:text-[var(--color-primary)] underline-left relative pb-1 border-b-2 border-transparent  hover:after:scale-x-100"
        to={to}
      >
        {children}
      </Link>
    </li>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      className=""
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(false)}
    >
      <List className="bg-primary">
        <ListItem className="flex flex-col gap-5">
          <ListItemButton onClick={toggleDrawer(false)}>
            <CloseIcon className="color-foreground" />
          </ListItemButton>

          <HeaderNav to="/">Accueil</HeaderNav>

          <HeaderNav to="/profil">Profil</HeaderNav>

          <HeaderNav to="/projets">Projets</HeaderNav>

          <HeaderNav to="/contact">Contact</HeaderNav>

          <DarkMode />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <ButtonNav />
      </Button>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default HeaderNav;
export { MobileNav };
