import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormText from "../components/Form.jsx";
import { FormTextrea, ButtonForm } from "../components/Form.jsx";

function TableProject({
  nom_projet,
  desc_projet,
  techno,

  lien_img,
  lien_url,
  lien_gh,
  lien_vdo,

  presentation_projet,
  technique_projet,

  isAdmin,
  onDelete,
  id,
  onUpdate,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempDataProject, setTempDataProject] = useState({
    nom_projet,
    desc_projet,
    techno,

    lien_img,
    lien_url,
    lien_gh,
    lien_vdo,

    presentation_projet,
    technique_projet,
  });

  function handleDelete() {
    const yes = window.confirm("Voulez-vous vraiment supprimer ce projet ?");
    if (yes) {
      onDelete(id);
    }
  }

  function handleSave() {
    onUpdate(id, tempDataProject);
    setIsEditing(false);
  }

  function handleCancel() {
    setTempDataProject({
      nom_projet,
      desc_projet,
      techno,

      lien_img,
      lien_url,
      lien_gh,
      lien_vdo,

      presentation_projet,
      technique_projet,
    });
    setIsEditing(false);
  }

  // const formatDateForInput = (dateString) => {
  //   if (!dateString) return "";
  //   return dateString.split("T")[0]; // garde seulement YYYY-MM-DD
  // };

  return (
    <>
      {/* section normale */}
      {!isEditing && (
        <tr>
          <td className="tableProject">{nom_projet}</td>
          <td className="tableProject">{desc_projet}</td>
          <td className="tableProject max-sm:hidden">{techno}</td>
          <td className="tableProject max-sm:hidden">
            <a href={lien_url} target="_blank" rel="noreferrer">
              {lien_url}
            </a>
          </td>
          <td className="tableProject">
            <Link
              to={`/projets/${id}`}
              state={{
                projet: {
                  nom_projet,
                  desc_projet,
                  techno,

                  lien_img,
                  lien_url,
                  lien_gh,
                  lien_vdo,

                  presentation_projet,
                  technique_projet,
                },
              }}
            >
              <button type="btn-primary">En savoir plus</button>
            </Link>
          </td>

          {/*Coté Admin*/}
          {isAdmin && (
            <>
              <td>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="btn-primary bg-(--color-destructive)!"
                >
                  Supprimer
                </button>
              </td>
              <td className="tableProject">
                <button
                  type="button"
                  onClick={() => {
                    setTempDataProject({
                      nom_projet,
                      desc_projet,
                      techno,

                      lien_img,
                      lien_url,
                      lien_gh,
                      lien_vdo,

                      presentation_projet,
                      technique_projet,
                    });
                    setIsEditing(true);
                  }}
                  className="btn-primary bg-(--color-secondary)!"
                >
                  Modifier
                </button>
              </td>
            </>
          )}
        </tr>
      )}

      {/*formulaire maj */}
      {isEditing && (
        <tr>
          <td colSpan={isAdmin ? 6 : 4} className="tableProject">
            <div className="sectionApply text-white p-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}
                className="bg-primary rounded-2xl p-8"
              >
                <h2 className="bg-(--color-secondary) mb-4">
                  Modifier le projet
                </h2>

                <FormText
                  type="text"
                  value={tempDataProject.nom_projet}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      nom_projet: e.target.value,
                    })
                  }
                >
                  Nom du projet
                </FormText>

                <FormText
                  type="text"
                  value={tempDataProject.techno}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      techno: e.target.value,
                    })
                  }
                >
                  Tags des Technologies
                </FormText>

                <FormText
                  type="text"
                  value={tempDataProject.lien_img}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      lien_img: e.target.value,
                    })
                  }
                >
                  Lien de l'image projet
                </FormText>

                <FormText
                  type="text"
                  value={tempDataProject.lien_url}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      lien_url: e.target.value,
                    })
                  }
                >
                  Lien du projet
                </FormText>

                <FormText
                  type="text"
                  value={tempDataProject.lien_gh}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      lien_gh: e.target.value,
                    })
                  }
                >
                  GitHub
                </FormText>

                <FormTextrea
                  value={tempDataProject.desc_projet}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      desc_projet: e.target.value,
                    })
                  }
                >
                  Description du projet
                </FormTextrea>

                <FormTextrea
                  value={tempDataProject.presentation_projet}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      presentation_projet: e.target.value,
                    })
                  }
                >
                  Présentation du projet
                </FormTextrea>

                <FormTextrea
                  value={tempDataProject.technique_projet}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      technique_projet: e.target.value,
                    })
                  }
                >
                  Techniques du projet
                </FormTextrea>

                <FormText
                  type="text"
                  value={tempDataProject.lien_vdo}
                  onChange={(e) =>
                    setTempDataProject({
                      ...tempDataProject,
                      lien_vdo: e.target.value,
                    })
                  }
                >
                  Lien de la vidéo
                </FormText>

                <div className="flex gap-2 mt-4">
                  <button
                    type="submit"
                    className="btn-primary bg-(--color-secondary)!"
                  >
                    Enregistrer
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="btn-primary bg-(--color-accent)!"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default TableProject;
