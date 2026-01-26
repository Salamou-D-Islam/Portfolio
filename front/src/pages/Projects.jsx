import React, { useState, useEffect } from "react";
import TableProject from "../components/TableProject.jsx";
import { ButtonForm } from "../components/Form";
import { getAllProjets } from "../services/projectApi.js";
import ContactLink from "../components/ContactLink.jsx";
import AllProjects from "../components/AllProjectCard.jsx";

import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import CircularProgress from "@mui/material/CircularProgress";

import { ExternalLink, Github } from "lucide-react";

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
      <div className="mt-20 flex flex-col items-center text-white">
        <CircularProgress />
        <span>Chargement en cours… Veuillez patienter</span>
      </div>
    );

  const allProject = [
    {
      id: 1,
      nom_projet: "Portfolio",
      desc_projet: "Mon site perso",
      techno: ["React", "Tailwind", "FastAPI"],
      lien_img:
        "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/47cb162520a5cb6c736e65362526ab9b55082f74/e73c5cc3ec9ce4c8d6e28652542b6875753a226b",
      lien_url: "https://islam-derrouiche-salamou.netlify.app/",
      lien_gh: "https://github.com/Salamou-D-Islam/Portfolio",
    },
    {
      id: 2,
      nom_projet: "Portfolio",
      desc_projet: "Mon site perso",
      techno: ["React", "Tailwind", "FastAPI"],
      lien_img:
        "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/47cb162520a5cb6c736e65362526ab9b55082f74/e73c5cc3ec9ce4c8d6e28652542b6875753a226b",
      lien_url: "https://islam-derrouiche-salamou.netlify.app/",
      lien_gh: "https://github.com/Salamou-D-Islam/Portfolio",
    },
    {
      id: 3,
      nom_projet: "Portfolio",
      desc_projet: "Mon site perso",
      techno: ["React", "Tailwind", "FastAPI"],
      lien_img:
        "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/47cb162520a5cb6c736e65362526ab9b55082f74/e73c5cc3ec9ce4c8d6e28652542b6875753a226b",
      lien_url: "https://islam-derrouiche-salamou.netlify.app/",
      lien_gh: "https://github.com/Salamou-D-Islam/Portfolio",
    },
    {
      id: 4,
      nom_projet: "Portfolio",
      desc_projet: "Mon site perso",
      techno: ["React", "Tailwind", "FastAPI"],
      lien_img:
        "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/47cb162520a5cb6c736e65362526ab9b55082f74/e73c5cc3ec9ce4c8d6e28652542b6875753a226b",
      lien_url: "https://islam-derrouiche-salamou.netlify.app/",
      lien_gh: "https://github.com/Salamou-D-Islam/Portfolio",
    },
  ];

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-6xl text-salamou  font-bold text-center text-white mb-6">
          Mes Projets
        </h1>
      </div>

      <section
        id="projets"
        className="flex flex-col p-10 text-center mt-20 bg-(--color-gray-muted) scroll-mt-19"
      >
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mt-10">
          {allProject && allProject.length > 0 ? (
            allProject.map((project) => (
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

      {/* <section>
        <AllProjects project={project} />
      </section> */}

      <div className="sectionApply contactHoverDiv outlineApply text-white">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Voir mes petits projet
        </h1>

        <div className="container flex flex-wrap mt-4 gap-6 p-4 rounded-lg justify-center ">
          <ContactLink
            href="https://github.com/Salamou-D-Islam"
            target="_blank"
            title="Mon GitHub"
          >
            <GitHubIcon sx={{ fontSize: 90 }} />
          </ContactLink>

          <ContactLink
            href="https://www.youtube.com/@Islam-d19"
            target="_blank"
            title="Ma chaîne Youtube"
          >
            <YouTubeIcon sx={{ fontSize: 90 }} />
          </ContactLink>

          <ContactLink
            href="https://www.instagram.com/salamou_js/"
            target="_blank"
            title="Mon Instagram"
          >
            <InstagramIcon sx={{ fontSize: 90 }} />
          </ContactLink>
        </div>
      </div>
    </>
  );
}

export default Projects;
