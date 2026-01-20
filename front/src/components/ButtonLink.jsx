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
      className="btn-primary text-center w-60"
    >
      {children}
    </Link>
  );
}

// function IconsLink({ children, href }) {
//   return (
//     <a href={href} className="hover:scale-120 transition-all">
//       {children}
//     </a>
//   );
// }

function ButtonNav({ children, onClick }) {
  return (
    <button className="btnnav md:hidden" type="button" onClick={onClick}>
      <MenuIcon />
    </button>
  );
}

export default ButtonHome;
export { ButtonNav };
