import { useLocation } from "react-router-dom";

function ProjectDetail() {
  const location = useLocation();
  const { projet } = location.state;

  return (
    <div className="sectionApply text-white">
      <h1>{projet.nomProjet}</h1>
      <p>Lien: {projet.LienProjet}</p>
      <p>Nom du lien: {projet.projetLienNom}</p>
      <p>
        Dates: {projet.dateProjetDebut} - {projet.dateProjetFin}
      </p>
    </div>
  );
}

export default ProjectDetail;
