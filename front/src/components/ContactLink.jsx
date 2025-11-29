import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactLink({ children, href, target, title }) {
  return (
    <a
      href={href}
      target={target}
      title={title}
      className="text-white text-2xl hover:text-indigo-400"
    >
      {children}
    </a>
  );
}

export default ContactLink;
