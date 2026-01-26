import React, { useState, useEffect } from "react";
import { getAllProjets } from "../services/projectApi.js";
import ContactLink from "../components/ContactLink.jsx";
import AllProjects from "../components/AllProjectCard.jsx";

import { Allproject } from "../services/dataProjectTest.js";

import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import CircularProgress from "@mui/material/CircularProgress";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getAllProjets();
        setProjects(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, []);

  if (loading)
    return (
      <div className="mt-20 flex flex-col items-center justify-center">
        <CircularProgress />
        <span className="text-(--color-foreground)">
          Chargement en cours… Veuillez patienter
        </span>
      </div>
    );

  return (
    <>
      <section
        id="projets"
        className="flex flex-col p-10 text-center mt-10 bg-(--color-gray-muted) scroll-mt-19"
      >
        <div>
          <h1>Mes Projets</h1>
          <hr className="w-35 max-lg:w-25 h-1 hr border-0 mx-auto mb-3 mt-1" />
          <p className="max-w-250 p-3 mx-auto">
            Vous trouverai ici tous mes projets illustrant mes compétences et
            mon expérience en développement web.
          </p>
        </div>
        <div className="container grid grid-cols-1  md:grid-cols-2 gap-8 mx-auto mt-10">
          {Allproject && Allproject.length > 0 ? (
            Allproject.map((project) => (
              <AllProjects
                key={project.id}
                id={project.id}
                nom_projet={project.nom_projet}
                desc_projet={project.desc_projet}
                techno={project.techno}
                lien_img={project.lien_img}
                lien_url={project.lien_url}
                lien_gh={project.lien_gh}
                isAdmin={false}
              />
            ))
          ) : (
            <p className="text-white text-center bg-">
              Aucune section disponible pour le moment .
            </p>
          )}
        </div>
      </section>

      <div className="flex flex-col text-(--color-foreground) bg-(--color-background) p-5 mt-10 mb-10 mx-auto border-2">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Voir mes petits projet
        </h1>
        <hr className="w-35 max-lg:w-25 h-1 hr border-0 mx-auto mb-3 mt-1" />

        <div className=" flex flex-wrap mt-4 gap-6 p-4 rounded-lg justify-center items-center">
          <ContactLink
            href="https://github.com/Salamou-D-Islam"
            target="_blank"
            title="Mon GitHub"
          >
            <GitHubIcon sx={{ fontSize: 70 }} />
          </ContactLink>

          <ContactLink
            href="https://www.youtube.com/@Islam-d19"
            target="_blank"
            title="Ma chaîne Youtube"
          >
            <YouTubeIcon sx={{ fontSize: 70 }} />
          </ContactLink>

          <ContactLink
            href="https://www.instagram.com/salamou_js/"
            target="_blank"
            title="Mon Instagram"
          >
            <InstagramIcon sx={{ fontSize: 70 }} />
          </ContactLink>
        </div>
      </div>
    </>
  );
}

export default Projects;
