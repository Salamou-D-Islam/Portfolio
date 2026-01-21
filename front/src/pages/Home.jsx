import React, { useState, useEffect } from "react";
import Photo from "../assets/PP.png";
import ButtonHome from "../components/ButtonLink.jsx";
import Reveal from "../components/Reveal.jsx";
import ContactLink from "../components/ContactLink.jsx";
import CardAbout, { TechAbout } from "../components/CardAbout.jsx";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactsIcon from "@mui/icons-material/Contacts";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Code, Database, Layout } from "lucide-react";

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
      {/*--------------------------------HERO------------------------------------*/}
      <section className="flex justify-center p-5" id="hero">
        <Reveal>
          <div className="container text-center flex flex-col gap-5 p-3 lg:mt-20">
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

          <div className="container flex flex-col p-3 gap-10 items-center">
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

            <div className="flex max-md:flex-col max-md:gap-2 gap-3">
              <ButtonHome
                to="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visualisez mon CV
              </ButtonHome>

              <ButtonHome to="/projets">Voir mes Projets</ButtonHome>
            </div>
          </div>

          <button className="flex mx-auto mt-20 md:mt-30">
            <a href="#about">
              <ArrowDownwardIcon
                className=" color-foreground animate-bounce"
                sx={{ fontSize: 30 }}
              />
            </a>
          </button>
        </Reveal>
      </section>

      {/*--------------------------------A PROPOS------------------------------------*/}
      <Reveal>
        <section id="about" className="flex flex-col p-5 text-center mt-20">
          <div className="flex flex-col gap-3">
            <h1 className="">A propos de moi</h1>
            <hr className="w-25 h-1 hr border-0 mx-auto mb-3" />
            <p className="max-w-250 p-3 mx-auto">
              Je suis Islam Derrouiche, développeur web full stack passionné par
              la création d’applications modernes. Avec 1 an d’expérience, j’ai
              réalisé des projets complets sur React pour le frontend et Node.js
              ou Python (FastAPI, Flask) pour le backend, en utilisant
              PostgreSQL et MongoDB pour la gestion des données.
            </p>
          </div>
          <div className="mt-20 flex max-md:flex-col justify-center gap-5">
            <CardAbout
              img={
                <Code
                  size={70}
                  className="group-hover:scale-110 transition-transform p-3 rounded-lg img-front color-background"
                />
              }
              title_card="Développement Frontend"
              desc_card="JavaScript - React - HTML - CSS / TailwindCSS"
            />
            <CardAbout
              img={
                <Database
                  size={70}
                  className="group-hover:scale-110 transition-transform p-3 rounded-lg img-back color-background"
                />
              }
              title_card="Développement Backend"
              desc_card="NodeJS - Express - Python (FastAPI / Flask) - PostgresSQL - MongoDB"
            />
            <CardAbout
              img={
                <Layout
                  size={70}
                  className="group-hover:scale-110 transition-transform p-3 rounded-lg img-outils color-background"
                />
              }
              title_card="Outils & Environnement"
              desc_card="GitHub - Docker - VisualCode Studio - Postman - Figma"
            />
          </div>
          <div className=" mt-20 mx-auto p-5 flex flex-col justify-center gap-5 card max-w-200">
            <h2>Technologies & Outils</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <TechAbout />
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}

export default Home;
