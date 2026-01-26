import React, { useState, useEffect } from "react";
import SectionProfil, {
  TabSectionProfil,
} from "../components/SectionProfil.jsx";
import { getAllSections } from "../services/profilApi.js";
import CircularProgress from "@mui/material/CircularProgress";
import Photo from "../assets/Photo.png";
import Reveal from "../components/Reveal.jsx";

function Profi() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const data = await getAllSections();
        setSections(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchSections();
  }, []);

  if (loading)
    return (
      <div className="mt-20 flex flex-col items-center text-white">
        <CircularProgress />
        <span>Chargement en cours… Veuillez patienter</span>
      </div>
    );

  return (
    <>
      <Reveal>
        <section className="img-profil border-b-2 border-(--color-foreground) p-5 mb-10 -translate-y-20 pt-20 :pt-30">
          <div className="flex flex-col-reverse md:flex-row text-center container p-4 mx-auto gap-20 justify-center">
            <div className="flex flex-col ">
              <h1 className="text-white!">Mon Profil</h1>
              <p className="items-center flex p-10 max-w-200 text-white!">
                Je suis Islam Derrouiche, développeur web full stack passionné
                par le développement d’applications modernes et concrètes.
                J’interviens aussi bien sur le frontend avec React que sur le
                backend avec Node.js et Python (FastAPI, Flask), en développant
                des solutions complètes et structurées, avec PostgreSQL et
                MongoDB pour la gestion des données. À travers mes projets, j’ai
                appris à travailler sur l’ensemble du cycle de vie d’une
                application : analyse du besoin, conception, développement,
                tests et déploiement. J’accorde une importance particulière à la
                logique métier et à l’expérience utilisateur.
              </p>
            </div>

            <div className="group ">
              <img
                src={Photo}
                alt="Illustration de moi"
                className="w-80 max-md:w-60 border-2 border-white rounded-4xl flex mx-auto hover:bg-(--color-secondary)/50! max-lg:active:bg-(--color-secondary)/50! transform-all duration-400 ease-in"
              />
            </div>
          </div>
        </section>
      </Reveal>
      <div className="container bg-(--color-background) mx-auto mb-10">
        {sections && sections.length > 0 ? (
          sections.map((section) => (
            <TabSectionProfil
              key={section.id}
              id={section.id}
              title={section.nom_section}
              desc={section.description_section}
              isAdmin={false}
            />
          ))
        ) : (
          <p className="text-white text-center bg-">
            Aucune section disponible pour le moment .
          </p>
        )}
        {/* <TabSectionProfil /> */}
      </div>
    </>
  );
}

export default Profi;

{
  /* <section className="sectionApply text-white p-10 contactHoverDiv hover:bg-gray-800">
        <div className="mb-6 text-3xl">
          <h1>{props.title}</h1>
        </div>
        <div className="text-lg">
          <p>{props.desc}</p>
           <p>
            Je suis Islam Derrouiche, un jeune développeur web fullstack junior.
            Passionné par la technologie et le développement web, je développe
            des applications web en frontend avec du HTML/CSS et JavaScript avec
            React en framwork, et backend avec NodeJS et Python(FastAPI /
            Flask). Mon objectif est de créer des applications web innovantes et
            performantes qui répondent aux besoins des utilisateurs.
          </p> 
        </div>
      </section> */
}
