import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactLink({ children, href, target, title }) {
  return (
    <a
      href={href}
      target={target}
      title={title}
      className="hover:scale-120 transition-all"
    >
      {children}
    </a>
  );
}

export default ContactLink;
