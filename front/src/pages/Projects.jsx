import React, { useState, useEffect } from "react";
import TableProject from "../components/TableProject.jsx";
import { ButtonForm } from "../components/Form";
import { getAllProjets } from "../services/projectApi.js";
import ContactLink from "../components/ContactLink.jsx";
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
  const project = [
    {
      title: "Jeux-Olympiques",
      description:
        "Application d'achat (simulation) en ligne des tickets pour les Jeux-Olympiques (non officiel)",
      image:
        "https://www.visiterlyon.com/var/site/storage/images/1/7/5/7/887571-1-fre-FR/2d31a632ff4b-Clbration-athltes-Club-2024-1-.webp",
      tags: ["Python", "Flask", "PostgresSQL", "REST API"],
      github: "https://github.com/Salamou-D-Islam/J-O",
      demo: "https://jeux-olympique.fly.dev/",
    },
    {
      title: "Islam DERROUICHE",
      description:
        "Cette application est mon projet personnel. Elle a pour objectif de permettre aux visiteurs de mieux me connaître à travers une page de profil, de découvrir mes réalisations via la page des projets, et de me contacter facilement.",
      image:
        "https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio-1170x658.jpg",
      tags: [
        "React",
        "Python",
        "FastAPI",
        "JavaScript",
        "PostgreSQL",
        "Tailwind CSS",
        "REST API",
      ],
      github: "https://github.com/Salamou-D-Islam/Portfolio",
      demo: "https://islam-derrouiche-salamou.netlify.app/",
    },
    {
      title: "Arcadia",
      description:
        "Une application pour un Zoo, elle a pour objectif de permettre aux visiteurs de mieux connaitre le zoo à travers les services, habitats et animaux",
      image: "arcadia.png",
      tags: ["NodeJS", "PostgreSQL", "MongoDB", "REST API"],
      github: "https://github.com/Salamou-D-Islam/Arcadia",
      demo: "https://github.com/Salamou-D-Islam/Arcadia",
    },
    {
      title: "Nova Capital",
      description:
        "Nova Capital est un site vitrine moderne développé avec HTML, CSS et JavaScript. Il présente les services financiers de manière professionnelle et responsive, avec un design moderne et épuré.",
      image: "NovaCapitl.jpg",
      tags: ["HTML", "CSS", "Tailwind CSS"],
      github: "https://github.com/Salamou-D-Islam/Nova-Capital",
      demo: "https://nova-capital-salamou.netlify.app/",
    },
  ];
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-6xl text-salamou  font-bold text-center text-white mb-6">
          Mes Projets
        </h1>
      </div>

      {/* <div className="mt-10 mb-10">
        <div className="container mx-auto p-6 border-2 bg-black/50 overflow-x-auto">
          <table className="text-white border-4 w-370 max-sm:w-full h-30 border-collapse">
            <thead>
              <tr>
                <th scope="col" className="tableProject">
                  Nom du Projet
                </th>
                <th scope="col" className="tableProject max-sm:hidden">
                  Technologies principales
                </th>
                <th scope="col" className="tableProject max-sm:hidden">
                  Lien affilé au projet
                </th>
                <th scope="col" className="tableProject max-sm:hidden">
                  date du projet (Début-Fin)
                </th>
                <th scope="col" className="tableProject">
                  Détail du projet
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {projects && projects.length > 0 ? (
                projects.map((project) => (
                  <TableProject
                    key={project.id}
                    id={project.id}
                    nom_projet={project.nom_projet}
                    techno={project.techno}
                    lien_url={project.lien_url}
                    lien_nom={project.lien_nom}
                    lien_gh={project.lien_gh}
                    lien_vdo={project.lien_vdo}
                    date_debut={project.date_debut}
                    date_fin={project.date_fin}
                    presentation_projet={project.presentation_projet}
                    technique_projet={project.technique_projet}
                    isAdmin={false}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-white text-center">
                    Aucune section ajoutée pour le moment.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div> */}

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mt-10">
        {project.map((project) => (
          <div
            key={project.id}
            className="group bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden h-64">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-(--color-primary) text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3">{project.nom_projet}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-linear-to-r from-blue-50 to-purple-50 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

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
