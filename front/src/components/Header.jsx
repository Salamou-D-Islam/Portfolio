import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MobileNav, NavSection } from "./HeaderNav.jsx";
import DarkMode from "../components/DarkMode.jsx";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      title: "Présentation",
      id: "hero",
    },
    {
      title: "A Propos",
      id: "about",
    },
    {
      title: "Mes Projets",
      id: "projets",
    },
    {
      title: "Me Contacter",
      id: "contact",
    },
  ];
  const [active, setActive] = useState("home");
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
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-(--color-background) shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between p-4">
          <Link
            to="/"
            className=" text-3xl max-md:text-2xl md:font-mono flex gap-2 text-mode"
          >
            Islam <div className="text-primary">DERROUICHE</div>
          </Link>

          <nav className="hidden lg:flex gap-6 ">
            {navItems.map((nav) => (
              <button
                key={nav.id}
                className="p-3 mb:hover:bg-neutral-300/50 hover:text-(--color-primary)! underline-left relative pb-1 border-b-2 border-transparent hover:after:scale-x-100"
                onClick={() => {
                  if (location.pathname !== "/") {
                    navigate(`/#${nav.id}`);
                  } else {
                    document
                      .getElementById(nav.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {nav.title}
              </button>
            ))}
            <DarkMode />
            <NavSection />
          </nav>

          {/* Mobile nav */}
          <nav className="lg:hidden">
            <MobileNav />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
