import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactLink({ children, href, target, title, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      title={title}
      className="hover:scale-120 transition-all"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default ContactLink;
