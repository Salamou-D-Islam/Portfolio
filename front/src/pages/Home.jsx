import React, { useState, useEffect } from "react";
import Photo from "../assets/PP.png";
import ButtonHome from "../components/ButtonLink.jsx";
import Reveal from "../components/Reveal.jsx";
import ContactLink from "../components/ContactLink.jsx";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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
      <section className="p-5 reveal">
        <Reveal>
          <div className="container text-center flex flex-col gap-5 p-3">
            <h1 className="mx-auto">
              Salut, je suis
              <div className="text-primary">ISLAM DERROUICHE</div>
            </h1>

            <h3 className="text-muted">DEVELOPPEUR WEB FULLSTACK</h3>

            <p className="">
              Je conçois des applications web modernes, performantes et
              maintenables, du front au back. <br />
              Disponible pour missions freelance ou opportunités.
            </p>
          </div>

          <div className="container flex flex-col p-3 gap-5 items-center">
            <div className="flex gap-5">
              <ContactLink href="instagram.com">
                <GitHubIcon
                  className="color-foreground"
                  sx={{ fontSize: 40 }}
                />
              </ContactLink>

              <ContactLink href="instagram.com">
                <LinkedInIcon className="text-primary" sx={{ fontSize: 40 }} />
              </ContactLink>

              <ContactLink href="instagram.com">
                <LinkedInIcon color="primary" sx={{ fontSize: 40 }} />
              </ContactLink>
            </div>

            <ButtonHome to="/cv.pdf" target="_blank" rel="noopener noreferrer">
              Visualisez mon CV
            </ButtonHome>

            <ButtonHome to="/projets">Voir mes Projets</ButtonHome>
          </div>
        </Reveal>

        {/* <div className="buttonLink">
            {!isSmall && (
              <>
                <ButtonHome
                  to="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visualisez mon CV
                </ButtonHome>
                <ButtonHome to="/profil">Voir mon Profil</ButtonHome>
                <ButtonHome to="/projets">Voir mes Projets</ButtonHome>
                <ButtonHome to="/contact">Contactez moi</ButtonHome>
              </>
            )}

            {isSmall && (
              <ButtonHome
                to="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visualisez le CV
              </ButtonHome>
            )}
          </div>
        </div>

        <div className="imageAvatar">
          <img src={Photo} alt="Photo" className="avatarImg" />
        </div> */}
      </section>
    </>
  );
}

export default Home;
