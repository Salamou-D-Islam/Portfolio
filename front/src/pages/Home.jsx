import React, { useState, useEffect } from "react";
import Photo from "../assets/PP.png";
import ButtonHome from "../components/ButtonLink.jsx";
import Reveal from "../components/Reveal.jsx";
import ContactLink from "../components/ContactLink.jsx";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactsIcon from "@mui/icons-material/Contacts";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Home() {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 1023);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 1023);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="flex justify-center p-5" id="hero">
        <Reveal>
          <div className="container text-center flex flex-col gap-5 p-3">
            <h1 className="mx-auto">
              Salut, je suis
              <div className="text-primary">ISLAM DERROUICHE</div>
            </h1>

            <h3 className="text-muted">DEVELOPPEUR WEB FULLSTACK</h3>

            <p className="p-7">
              Je conçois des applications web modernes, performantes et
              maintenables, du front au back. <br />
              Disponible pour missions freelance ou opportunités.
            </p>
          </div>

          <div className="container flex flex-col p-3 gap-5 items-center">
            <div className="flex gap-5">
              <ContactLink href="instagram.com">
                <LinkedInIcon
                  className="color-background bg-[var(--color-foreground)] p-1 rounded-3xl"
                  sx={{ fontSize: 40 }}
                />
              </ContactLink>

              <ContactLink href="instagram.com">
                <GitHubIcon
                  className="color-background bg-[var(--color-foreground)] p-1 rounded-3xl"
                  sx={{ fontSize: 40 }}
                />
              </ContactLink>
              <ContactLink href="instagram.com">
                <ContactsIcon
                  className="color-background bg-[var(--color-foreground)] p-1 rounded-3xl"
                  sx={{ fontSize: 40 }}
                />
              </ContactLink>
            </div>

            <ButtonHome to="/cv.pdf" target="_blank" rel="noopener noreferrer">
              Visualisez mon CV
            </ButtonHome>

            <ButtonHome to="/projets">Voir mes Projets</ButtonHome>
          </div>

          <button className="flex mx-auto mt-10">
            <a href="#test">
              <ArrowDownwardIcon
                className=" color-foreground animate-bounce"
                sx={{ fontSize: 30 }}
              />
            </a>
          </button>
        </Reveal>
      </section>
      <section id="test" className=""></section>
    </>
  );
}

export default Home;
