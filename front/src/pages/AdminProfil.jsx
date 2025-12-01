import React, { useState } from "react";
import FormText from "../components/Form.jsx";
import { FormTextrea, ButtonForm } from "../components/Form.jsx";

function AdminProfil(props) {
  const [section, setSection] = useState({
    profilNom: "",
    profilDesc: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setSection((prevSection) => {
      return {
        ...prevSection,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    props.onAdd(section); // transmet la section à Admin

    setSection({
      profilNom: "",
      profilDesc: "",
    }); // reset form
    event.preventDefault(); // empêche le refresh de la page
  }

  return (
    <>
      <div className="container mx-auto p-6 text-white text-center">
        <h1 className="title text-salamou">Admin Page</h1>
      </div>

      <section>
        <div className="sectionApply text-white p-10">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6">
              Ajouter une nouvelle section dans le profil
            </h2>
            <div className="mb-4">
              <FormText
                htmlFor="profilNom"
                type="text"
                id="profilNom"
                name="profilNom"
                value={section.profilNom}
                onChange={handleChange}
              >
                Nom de la section
              </FormText>

              <FormTextrea
                htmlFor="profilDesc"
                id="profilDesc"
                name="profilDesc"
                value={section.profilDesc}
                onChange={handleChange}
                //onChange={() => {}}
              >
                Titre de la section
              </FormTextrea>

              <ButtonForm type="submit"> Ajouter la section</ButtonForm>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default AdminProfil;
