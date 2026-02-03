import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactLink from "./ContactLink.jsx";
import { Link } from "react-router-dom";
function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className=" w-full bg-sky-800 dark">
      <div className>
        <div className="flex flex-col items-center p-5 gap-5">
          <Link
            to="/"
            className=" text-3xl max-md:text-2xl md:font-mono flex gap-2 text-mode"
          >
            Islam <div className="text-primary">DERROUICHE</div>
          </Link>

          <div className="flex gap-5">
            <ContactLink href="https://www.linkedin.com/in/islam-derrouiche-7a69a8368/">
              <LinkedInIcon
                className="color-background bg-(--color-foreground) p-1 rounded-3xl"
                sx={{ fontSize: 40 }}
              />
            </ContactLink>

            <ContactLink href="https://github.com/Salamou-D-Islam">
              <GitHubIcon
                className="color-background bg-(--color-foreground) p-1 rounded-3xl"
                sx={{ fontSize: 40 }}
              />
            </ContactLink>
          </div>
        </div>

        <hr className="mr-5 ml-5 text-white " />

        <div className="container mx-auto px-4 py-6 text-center ">
          <p className="text-white!">
            &copy; {year} Islam Derrouiche. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
