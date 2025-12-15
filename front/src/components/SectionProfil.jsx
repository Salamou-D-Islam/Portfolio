import React, { useState } from "react";
import FormText, { FormTextrea, ButtonForm } from "../components/Form";
import AccordionSection from "../components/AccordionSection";

function SectionProfil({ title, desc, isAdmin, onDelete, id, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempDataProfil, setTempDataProfil] = useState({
    nom_section: title,
    description_section: desc,
  });

  function handleDelete() {
    if (window.confirm("Voulez-vous vraiment supprimer cette section ?")) {
      onDelete(id);
    }
  }

  function handleSave() {
    onUpdate(id, tempDataProfil);
    setIsEditing(false);
  }

  function handleCancel() {
    setTempDataProfil({
      nom_section: title,
      description_section: desc,
    });
    setIsEditing(false);
  }
  return (
    <>
      <AccordionSection
        content={desc}
        className=" mb-0! contactHoverDiv hover:bg-gray-800! rounded-lg gap-4"
      >
        {title}
      </AccordionSection>

      {!isEditing ? (
        <>
          {isAdmin && (
            <div className="container flex gap-2 mt-4">
              <ButtonForm
                type="button"
                onClick={() => {
                  setIsEditing(true);
                }}
                className="bg-green-700 hover:bg-green-600"
              >
                Modifier
              </ButtonForm>

              <ButtonForm
                type="button"
                onClick={() => handleDelete(id)}
                className="bg-red-700 hover:bg-red-600"
              >
                Supprimer
              </ButtonForm>
            </div>
          )}
        </>
      ) : (
        <div className="sectionApply text-white p-10">
          <form onSubmit={() => handleSave(id, tempDataProfil)}>
            <h2 className="text-2xl font-bold mb-6">
              Mettre à jour la section
            </h2>

            <div className="mb-4">
              <FormText
                type="text"
                value={tempDataProfil.nom_section}
                onChange={(e) =>
                  setTempDataProfil({
                    ...tempDataProfil,
                    nom_section: e.target.value,
                  })
                }
              >
                Nom de la section
              </FormText>

              <FormTextrea
                value={tempDataProfil.description_section}
                onChange={(e) =>
                  setTempDataProfil({
                    ...tempDataProfil,
                    description_section: e.target.value,
                  })
                }
              >
                Titre de la section
              </FormTextrea>

              <div className="flex gap-2 mt-4">
                <ButtonForm
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-600"
                >
                  Enregistrer
                </ButtonForm>

                <ButtonForm
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-600 hover:bg-gray-500"
                >
                  Annuler
                </ButtonForm>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default SectionProfil;
