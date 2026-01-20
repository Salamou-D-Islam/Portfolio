import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderNav from "./HeaderNav.jsx";
import DarkMode from "../components/DarkMode.jsx";
import { ButtonNav } from "./ButtonLink.jsx";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[var(--color-background)] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between p-4">
          <Link
            to="/"
            className=" text-3xl max-md:text-2xl md:font-mono flex gap-2 text-mode"
          >
            Islam <div className="text-primary">DERROUICHE</div>
          </Link>

          <div className="flex">
            <ul className="hidden md:flex gap-6 mr-4">
              <HeaderNav to="/">Accueil</HeaderNav>
              <HeaderNav to="/profil">Profil</HeaderNav>
              <HeaderNav to="/projets">Projets</HeaderNav>
              <HeaderNav to="/contact">Contact</HeaderNav>
              <DarkMode></DarkMode>
            </ul>
            <ButtonNav onClick={toggleMenu}></ButtonNav>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col gap-3">
              <HeaderNav to="/">Accueil</HeaderNav>
              <HeaderNav to="/profil">Profil</HeaderNav>
              <HeaderNav to="/Projets">Projets</HeaderNav>
              <HeaderNav to="/contact">Contact</HeaderNav>
              <DarkMode></DarkMode>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
