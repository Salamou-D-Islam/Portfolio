import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function ButtonHome({ children, to, download, target, rel }) {
  return (
    <Link
      to={to}
      download={download}
      target={target}
      rel={rel}
      className="btnHome"
    >
      {children}
    </Link>
  );
}

function ButtonNav({ children, onClick }) {
  return (
    <button className="btnnav" type="button" onClick={onClick}>
      <MenuIcon />
    </button>
  );
}

export default ButtonHome;
export { ButtonNav };
