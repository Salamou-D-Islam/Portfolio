import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className=" bg-transparent outline-2 outline-offset-2 outline-blue-50 sm:w-160 mx-auto rounded-b-lg shadow-lg m-6">
        <div className="container mx-auto px-4 flex items-center justify-between p-4">
          <a href="/" className="text-white text-2xl hover:text-indigo-400">
            Salamou
          </a>

          <div className="flex items-center">
            <ul className="hidden md:flex gap-6 mr-4">
              <li>
                <a href="/" className="text-white hover:text-indigo-400">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-indigo-400">
                  A propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-indigo-400">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white hover:text-indigo-400"
                >
                  Projets
                </a>
              </li>
            </ul>

            <button
              className="md:hidden bg-white p-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              type="button"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/" className="text-white hover:text-indigo-400">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-indigo-400">
                  A propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-indigo-400">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white hover:text-indigo-400"
                >
                  Projets
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
