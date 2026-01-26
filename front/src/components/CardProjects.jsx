import { ExternalLink, Github } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function CardProjects() {
  const projects = [
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
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mt-10">
        {projects.map((project) => (
          <div
            key={project.title}
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
              <h3 className="mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-linear-to-r from-blue-50 to-purple-50 rounded-full text-sm hover:shadow-lg transform hover:scale-105 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// function AllProjects({ allProjects }) {
//   return (
//     <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mt-10">
//       {allProjects.map((oneProject) => (
//         <div
//           key={oneProject.id}
//           className="group bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
//         >
//           <div className="relative overflow-hidden h-64">
//             <img
//               src={oneProject.lien_img}
//               alt={`Illustration du projet ${oneProject.nom_projet}`}
//               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
//               <div className="absolute bottom-4 left-4 right-4 flex gap-3">
//                 <a
//                   href={oneProject.lien_gh}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
//                 >
//                   <Github size={18} />
//                   GitHub
//                 </a>
//                 <a
//                   href={oneProject.lien_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   <ExternalLink size={18} />
//                   Demo
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="p-6">
//             <h3 className="mb-3">{oneProject.nom_projet}</h3>
//             <p className="text-gray-600 mb-4">{oneProject.desc_projet}</p>
//             <div className="flex flex-wrap gap-2">
//               {oneProject.techno?.map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-3 py-1 bg-linear-to-r from-blue-50 to-purple-50 rounded-full text-sm"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

export default CardProjects;
// export { AllProjects };
