import React, { useState } from "react";
import InputProject from "../components/InputProject.jsx";
import TableProject from "../components/TableProject.jsx";

function ProjectsAdmin({ sections, setSections }) {
  //const [sections, setSections] = useState([]);

  function addSection(newSection) {
    setSections((prev) => [...prev, newSection]);
  }

  function deleteProject(id) {
    setSections((prev) => prev.filter((_, index) => index !== id));
  }

  function updateSection(id, updateData) {
    setSections((prev) =>
      prev.map((section, index) => (index === id ? updateData : section))
    );
  }
  return (
    <div className="container mx-auto p-6">
      <InputProject onAdd={addSection} />

      <div className="mt-10">
        <div className="container mx-auto p-6 border-2 bg-gray-600/50 overflow-x-auto">
          <table className="text-white w-359 border-4 h-30 ">
            <thead>
              <tr>
                <th scope="col">Nom du Projet</th>
                <th scope="col">Lien affilé au projet</th>
                <th scope="col">date du projet (Début-Fin)</th>
                <th scope="col">Détail du projet</th>
                <th scope="col">Administraion</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {sections.length > 0 ? (
                sections.map((sectionItem, index) => (
                  <TableProject
                    key={index}
                    id={index}
                    nomProjet={sectionItem.projetNom}
                    LienProjet={sectionItem.projetLien}
                    projetLienNom={sectionItem.projetLienNom}
                    dateProjetDebut={sectionItem.projetDateDebut}
                    dateProjetFin={sectionItem.projetDateFin}
                    GHProjet={sectionItem.GHProjet}
                    PresentationProject={sectionItem.PresentationProject}
                    techproject={sectionItem.techproject}
                    VDOProjet={sectionItem.VDOProjet}
                    isAdmin={true}
                    onDelete={deleteProject}
                    onUpdate={updateSection}
                  />
                ))
              ) : (
                <th className="text-white text-center">
                  Aucune section ajoutée pour le moment.
                </th>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProjectsAdmin;
