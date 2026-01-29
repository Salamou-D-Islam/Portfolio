import React, { useState, useEffect } from "react";
import { getAllSections } from "../services/profilApi.js";
import CircularProgress from "@mui/material/CircularProgress";
import Photo from "../assets/Photo.png";
import Reveal from "../components/Reveal.jsx";
import { Allprofil } from "../services/dataProfilTest.js";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";

function Profi({ nom_section, description_section, isAdmin }) {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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

      <Reveal>
        <div className="container bg-(--color-background) mx-auto mb-10">
          <>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value.toString()}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value.toString()}
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
                    {sections.map((section) => (
                      <Tab
                        className="text-(--color-primary)! max-w-16 mx-auto flex"
                        label={section.nom_section}
                        value={section.id.toString()}
                        sx={{
                          "&.Mui-selected": {
                            fontWeight: "bold",
                          },
                        }}
                      />
                    ))}
                  </Tabs>
                </Box>
                {sections.map((section) => (
                  <TabPanel
                    className="text-(--color-foreground)!"
                    value={section.id.toString()}
                  >
                    {section.description_section
                      ?.replace(/\r\n/g, "\n") // Windows
                      .replace(/\r/g, "\n") // Mac ancien
                      .split("\n") // split en lignes
                      .map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                  </TabPanel>
                ))}
              </TabContext>
            </Box>
          </>
        </div>
      </Reveal>
    </>
  );
}

export default Profi;
