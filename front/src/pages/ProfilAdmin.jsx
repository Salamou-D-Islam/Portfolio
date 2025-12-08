import React, { useState } from "react";
import InputProfil from "../components/InputProfil.jsx";
import SectionProfil from "../components/SectionProfil.jsx";

function ProfilAdmin({ sections, setSections }) {
  //const [sections, setSections] = useState([]);

  function addSection(newSection) {
    setSections((prev) => [...prev, newSection]);
  }
  function deleteSection(id) {
    setSections((prev) => prev.filter((_, index) => index !== id));
  }

  function updateSection(id, updateData) {
    setSections((prev) =>
      prev.map((section, index) => (index === id ? updateData : section))
    );
  }
  return (
    <div className="container mx-auto p-6 border rounded whitespace-pre-wrap">
      <div className="container mx-auto p-6 text-white text-center">
        <h1 className="title text-salamou ">Page de profil (Administrateur)</h1>
      </div>
      <InputProfil onAdd={addSection} />

      <div className="mt-10">
        {sections.length > 0 ? (
          sections.map((sectionItem, index) => (
            <SectionProfil
              key={index}
              id={index}
              title={sectionItem.profilNom}
              desc={sectionItem.profilDesc}
              isAdmin={true}
              onDelete={deleteSection}
              onUpdate={updateSection}
            />
          ))
        ) : (
          <p className="text-white text-center">
            Aucune section ajoutée pour le moment.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProfilAdmin;
