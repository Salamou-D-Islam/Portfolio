import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import AccordionSection from "../components/AccordionSection";
import AccordionPresentation, {
  getEmbedLink,
} from "../components/AccordionComponent";
import { getOneProjet } from "../services/projectApi.js";
import CircularProgress from "@mui/material/CircularProgress";

import { Allproject } from "../services/dataProjectTest.js";
import TabSectionProfil from "../components/SectionProfil.jsx";

import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import TabPanel from "@mui/lab/TabPanel";

import Box from "@mui/material/Box";

function ProjectDetail() {
  const location = useLocation();
  const { id } = useParams();
  const [projet, setProjet] = useState(location.state?.projet || null);
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const oneproject = Allproject.find((p) => p.id === Number(id));

  useEffect(() => {
    if (!projet) {
      const fetchProjet = async () => {
        try {
          const data = await getOneProjet(id);
          setProjet(data);
        } catch (err) {
          console.error("Erreur récupération projet :", err);
        }
      };
      fetchProjet();
    }
  }, [id, projet]);

  if (!projet)
    return (
      <div className="mt-20 flex flex-col items-center justify-center">
        <CircularProgress />
        <span className="text-(--color-foreground)">
          Chargement en cours… Veuillez patienter
        </span>
      </div>
    );

  return (
    <>
      <section className="bg-fuchsia-700 border-b-2 border-(--color-foreground) p-5 mb-10 -translate-y-20 pt-20 md:pt-30">
        <div className="flex flex-col-reverse md:flex-row text-center container p-4 mx-auto gap-20 justify-center">
          <div className="flex flex-col ">
            <h1 className="text-white!">{projet.nom_projet}</h1>
            <p className="items-center flex p-10 max-w-200 text-white!">
              {projet.desc_projet}
            </p>
          </div>

          <div className="group ">
            <a href={projet.lien_img} target="_blank">
              <img
                src={projet.lien_img}
                alt="Illustration du projet"
                className="w-150 max-md:w-60 border-2 border-white rounded-4xl flex mx-auto hover:shadow-lg transform hover:scale-105 transition-all"
              />
            </a>
          </div>
        </div>
      </section>
      <div>
        {/* {oneproject && oneproject.length > 0 ? (
        oneproject.map((section) => ( */}

        {/* <TabSectionProfil
              key={section.id}
              id={section.id}
              nom_projet={section.nom_projet}
              desc_projet={section.desc_projet}
              techno={section.techno}
              lien_img={section.lien_img}
              lien_url={section.lien_url}
              lien_gh={section.lien_gh}
              presentation_projet={section.presentation_projet}
              technique_projet={section.technique_projet}
              lien_vdo={section.lien_vdo}
              isAdmin={false}
            /> */}
        {/*            
          </>
        ))
      ) : ( */}
        {/* <p className="text-white text-center bg-">
          Aucune section disponible pour le moment .
        </p> */}
        {/* )} */}

        {/* <AccordionSection content={<AccordionPresentation />} className=" mb-0!">
        Présentation du projet
      </AccordionSection>

      <AccordionSection
        content={oneproject.technique_projet}
        className=" mb-0!"
      >
        Techniques / Compétences utilisées
      </AccordionSection>

      <AccordionSection
        content={
          <iframe
            width="600"
            height="400"
            src={getEmbedLink(oneproject.lien_vdo)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mx-auto max-md:w-full"
          ></iframe>
        }
        className=" mb-20!"
      >
        Autre
      </AccordionSection> */}
      </div>
      <div className="container bg-(--color-background) mx-auto mb-10">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                variant="scrollable"
                scrollButtons
                onChange={handleChange}
                aria-label="visible arrows tabs example"
                sx={{
                  [`& .${tabsClasses.scrollButtons}`]: {
                    "&.Mui-disabled": { opacity: 0.3 },
                  },
                }}
              >
                <Tab
                  className="text-(--color-primary)! max-w-16 mx-auto flex"
                  label="Présentation"
                  value="1"
                  sx={{
                    "&.Mui-selected": {
                      fontWeight: "bold",
                    },
                  }}
                />

                <Tab
                  className="text-(--color-primary)! max-w-16 mx-auto flex"
                  label="Techniques"
                  value="2"
                  sx={{
                    "&.Mui-selected": {
                      fontWeight: "bold",
                    },
                  }}
                />

                <Tab
                  className="text-(--color-primary)! max-w-16 mx-auto flex"
                  label="Autre"
                  value="3"
                  sx={{
                    "&.Mui-selected": {
                      fontWeight: "bold",
                    },
                  }}
                />
              </Tabs>
            </Box>
            <TabPanel className="text-(--color-foreground)!" value="1">
              {projet.presentation_projet
                .replace(/\r\n/g, "\n") // normalise les retours de Windows
                .split("\n")
                .map((line, idx) => (
                  <span key={idx}>
                    {line.replace(/\t/g, "\u00A0\u00A0\u00A0\u00A0")}{" "}
                    {/* tab → espaces */}
                    <br />
                  </span>
                ))}
            </TabPanel>

            <TabPanel className="text-(--color-foreground)!" value="2">
              {projet.technique_projet
                .replace(/\r\n/g, "\n")
                .split("\n")
                .map((line, idx) => (
                  <span key={idx}>
                    {line.replace(/\t/g, "\u00A0\u00A0\u00A0\u00A0")}
                    <br />
                  </span>
                ))}
            </TabPanel>

            <TabPanel className="text-(--color-foreground)!" value="3">
              <iframe
                width="600"
                height="400"
                src={getEmbedLink(projet.lien_vdo)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-auto max-md:w-full"
              />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
}

export default ProjectDetail;
