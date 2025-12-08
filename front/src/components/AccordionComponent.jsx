import { useLocation } from "react-router-dom";
import AccordionDetails from "@mui/material/AccordionDetails";

function AccordionPresentation() {
  const location = useLocation();
  const { projet } = location.state;
  return (
    <>
      <AccordionDetails>
        <p>
          <b> Lien:</b>{" "}
          <a href={projet.LienProjet} target="_blank">
            {projet.LienProjet}
          </a>
        </p>
        <p>
          <b> GitHub:</b>{" "}
          <a href={projet.GHProjet} target="_blank">
            {projet.GHProjet}
          </a>
        </p>
        <p>
          <b>Date du début :</b> {projet.dateProjetDebut}
        </p>
        <p>
          <b>Date de fin :</b> {projet.dateProjetFin}
        </p>
        <br /> <hr /> <br />
        {projet.PresentationProject}
      </AccordionDetails>
    </>
  );
}

function getEmbedLink(link) {
  if (!link) return "";

  // Youtu.be
  if (link.includes("youtu.be")) {
    const videoId = link.split("/").pop().split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // Youtube watch
  if (link.includes("youtube.com/watch")) {
    const url = new URL(link);
    const videoId = url.searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return link; // autre lien vidéo
}

export default AccordionPresentation;
export { getEmbedLink };
