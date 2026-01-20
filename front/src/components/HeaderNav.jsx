import React, { useState } from "react";
import { Link } from "react-router-dom";

function HeaderNav({ children, to }) {
  return (
    <li>
      <Link
        className="font-sans hover:text-[var(--color-primary)] underline-left relative pb-1 border-b-2 border-transparent hover:after:scale-x-100"
        to={to}
      >
        {children}
      </Link>
    </li>
  );
}

export default HeaderNav;
