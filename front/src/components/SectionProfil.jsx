import React, { useState } from "react";
import FormText, { FormTextrea, ButtonForm } from "../components/Form";

function SectionProfil({ title, desc, isAdmin, onDelete, id, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempDataProfil, setTempDataProfil] = useState({
    profilNom: title,
    profilDesc: desc,
  });

  function handleDelete() {
    onDelete(id);
  }

  function handleSave() {
    onUpdate(id, tempDataProfil);
    setIsEditing(false);
  }

  function handleCancel() {
    setTempDataProfil({
      profilNom: title,
      profilDesc: desc,
    });
    setIsEditing(false);
  }
  return (
    <section className="sectionApply text-white p-10 contactHoverDiv hover:bg-gray-800 rounded-lg gap-4">
      {!isEditing ? (
        <>
          <div className="flex-1">
            <div className="mb-4 text-2xl font-semibold">{title}</div>
            <div className="text-lg">{desc}</div>
          </div>

          {isAdmin && (
            <div className="container flex gap-2 mt-4">
              <ButtonForm
                type="button"
                onClick={() => {
                  setTempDataProfil({
                    profilNom: title,
                    profilDesc: desc,
                  });
                  setIsEditing(true);
                }}
                className="bg-green-700 hover:bg-green-600"
              >
                Modifier
              </ButtonForm>

              <ButtonForm
                type="button"
                onClick={handleDelete}
                className="bg-red-700 hover:bg-red-600"
              >
                Supprimer
              </ButtonForm>
            </div>
          )}
        </>
      ) : (
        <div className="sectionApply text-white p-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            <h2 className="text-2xl font-bold mb-6">
              Mettre à jour la section
            </h2>

            <div className="mb-4">
              <FormText
                type="text"
                value={tempDataProfil.profilNom}
                onChange={(e) =>
                  setTempDataProfil({
                    ...tempDataProfil,
                    profilNom: e.target.value,
                  })
                }
              >
                Nom de la section
              </FormText>

              <FormTextrea
                value={tempDataProfil.profilDesc}
                onChange={(e) =>
                  setTempDataProfil({
                    ...tempDataProfil,
                    profilDesc: e.target.value,
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
    </section>
  );
}

export default SectionProfil;
