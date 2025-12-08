import { useLocation } from "react-router-dom";
import AccordionSection from "../components/AccordionSection";
import AccordionPresentation, {
  getEmbedLink,
} from "../components/AccordionComponent";

function ProjectDetail() {
  const location = useLocation();
  const { projet } = location.state;

  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-salamou title ">{projet.nomProjet}</h1>
      </div>

      <AccordionSection content={<AccordionPresentation />} className=" mb-0!">
        Présentation du projet
      </AccordionSection>

      <AccordionSection content={projet.techproject} className=" mb-0!">
        Techniques / Compétences utilisées
      </AccordionSection>

      <AccordionSection
        content={
          <iframe
            width="600"
            height="400"
            src={getEmbedLink(projet.VDOProjet)}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="mx-auto"
          ></iframe>
        }
        className=" mb-20!"
      >
        Autre
      </AccordionSection>
    </>
  );
}

export default ProjectDetail;
