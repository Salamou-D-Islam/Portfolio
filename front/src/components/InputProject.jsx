import { useState } from "react";
import FormText, { FormTextrea } from "./Form.jsx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { pink } from "@mui/material/colors";

function InputProject({ onAdd }) {
  const [inputText, setInputText] = useState({
    nom_projet: "",
    desc_projet: "",
    techno: "",

    lien_img: "",
    lien_url: "",
    lien_gh: "",
    lien_vdo: "",

    presentation_projet: "",
    technique_projet: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((previnputText) => {
      return {
        ...previnputText,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // empêche le refresh de la page
    if (onAdd) onAdd(inputText); // envoie les données au parent

    setInputText({
      nom_projet: "",
      desc_projet: "",
      techno: "",

      lien_img: "",
      lien_url: "",
      lien_gh: "",
      lien_vdo: "",

      presentation_projet: "",
      technique_projet: "",
    }); // reset form
  }
  return (
    <>
      <div className="container mx-auto p-6 text-white text-center  max-sm:hidden!">
        <h1 className="title text-salamou">Page de projets (Administrateur)</h1>
      </div>

      {/* <section> */}
      <Accordion
        className={`sectionApply bg-black/50! text-white! mx-auto! border rounded p-4 whitespace-pre-wrap`}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ color: pink[50] }}
              style={{ whiteSpace: "pre-wrap" }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h5 className="text-4xl">
            Ajouter un nouveau projet dans la page projets
          </h5>
          <br /> <br />
        </AccordionSummary>
        <AccordionDetails>
          <hr />
          <div className="sectionApply text-white p-10">
            <form
              onSubmit={handleSubmit}
              className="bg-primary rounded-2xl p-8"
            >
              <div className="mb-4 space-y-3 ">
                <FormText
                  htmlFor="nom_projet"
                  type="text"
                  id="nom_projet"
                  name="nom_projet"
                  value={inputText.nom_projet}
                  onChange={handleChange}
                >
                  Nom du projet
                </FormText>

                <FormText
                  htmlFor="techno"
                  type="text"
                  id="techno"
                  name="techno"
                  value={inputText.techno}
                  onChange={handleChange}
                >
                  Technologies princpale
                </FormText>
                <FormText
                  htmlFor="lien_img"
                  type="text"
                  id="lien_img"
                  name="lien_img"
                  value={inputText.lien_img}
                  onChange={handleChange}
                >
                  lien de l'image
                </FormText>

                <FormText
                  htmlFor="lien_url"
                  type="text"
                  id="lien_url"
                  name="lien_url"
                  value={inputText.lien_url}
                  onChange={handleChange}
                >
                  Lien affilé au projet
                </FormText>

                <FormText
                  htmlFor="lien_gh"
                  type="text"
                  id="lien_gh"
                  name="lien_gh"
                  value={inputText.lien_gh}
                  onChange={handleChange}
                >
                  Lien GithHub
                </FormText>

                <FormText
                  htmlFor="lien_vdo"
                  type="text"
                  id="lien_vdo"
                  name="lien_vdo"
                  value={inputText.lien_vdo}
                  onChange={handleChange}
                >
                  Lien de la vidéo
                </FormText>

                <FormTextrea
                  htmlFor="desc_projet"
                  id="desc_projet"
                  name="desc_projet"
                  value={inputText.desc_projet}
                  onChange={handleChange}
                >
                  Description du projet
                </FormTextrea>

                <FormTextrea
                  htmlFor="presentation_projet"
                  id="presentation_projet"
                  name="presentation_projet"
                  value={inputText.presentation_projet}
                  onChange={handleChange}
                >
                  Présentation du projet
                </FormTextrea>

                <FormTextrea
                  htmlFor="technique_projet"
                  id="technique_projet"
                  name="technique_projet"
                  value={inputText.technique_projet}
                  onChange={handleChange}
                >
                  Techniques du projet
                </FormTextrea>

                <button type="submit" className="btn-primary mt-4">
                  Ajouter le projet
                </button>
              </div>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* </section> */}
    </>
  );
}

export default InputProject;
