import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className=" outline-2 outline-offset-2 outline-blue-50 mx-auto w-full bg-sky-800">
      <div>
        <div className="flex justify-center gap-6 mt-3 p-10 ">
          <a
            href="https://github.com/Salamou-D-slam"
            target="_blank"
            className="text-white text-2xl hover:text-indigo-400"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/islam-derrouiche-7a69a8368/"
            target="_blank"
            className="text-white text-2xl hover:text-indigo-400"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.malt.fr/profile/islamderrouiche1"
            target="_blank"
            className="text-white text-2xl hover:text-indigo-400"
          >
            Malte
          </a>
          <a
            href="/contact"
            target="_blank"
            className="text-white text-2xl hover:text-indigo-400"
          >
            <ContactMailIcon />
          </a>
        </div>
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-white">
            &copy; {year} Salamou. Tous droits réservés.
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center pb-4">
          Développeur Web FullStack — React • Python
        </p>
      </div>
    </footer>
  );
}
export default Footer;
