import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function ButtonHome({ children, href, download, target, rel }) {
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={rel}
      className="btnHome"
    >
      {children}
    </a>
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
