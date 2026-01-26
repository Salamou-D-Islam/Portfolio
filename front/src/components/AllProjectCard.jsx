import { ExternalLink, Github } from "lucide-react";
import ButtonHome from "../components/ButtonLink.jsx";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function AllProjects({
  id,
  nom_projet,
  desc_projet,
  techno,
  lien_img,
  lien_url,
  lien_gh,
}) {
  return (
    <div
      key={id}
      className="group bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={lien_img}
          alt={`Illustration du projet ${nom_projet}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            <a
              href={lien_gh}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={lien_url}
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
        <h3 className="mb-3">{nom_projet}</h3>
        <p className="text-gray-600 mb-4">{desc_projet}</p>
        <div className="flex flex-wrap gap-2">
          {techno?.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-linear-to-r from-blue-50 to-purple-50 rounded-full shadow-md text-sm hover:shadow-lg transform hover:scale-105 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex mx-auto mt-8 justify-end">
          <ButtonHome to={`/projets/${id}`}>Détails du projet</ButtonHome>
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
