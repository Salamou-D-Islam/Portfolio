import React, { useState } from "react";
import FormText, { FormTextrea, ButtonForm } from "../components/Form";
import AccordionSection from "../components/AccordionSection";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Allprofil } from "../services/dataProfilTest.js";

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
              <button
                type="button"
                onClick={() => {
                  setIsEditing(true);
                }}
                className="btn-primary bg-(--color-secondary)!"
              >
                Modifier
              </button>

              <button
                type="button"
                onClick={() => handleDelete(id)}
                className="btn-primary bg-(--color-destructive)!"
              >
                Supprimer
              </button>
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
                <button type="submit" className="btn-primary">
                  Enregistrer
                </button>

                <button
                  type="button"
                  onClick={handleCancel}
                  className="btn-primary bg-(--color-muted)!"
                >
                  Annuler
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

function TabSectionProfil({}) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value.toString()} lazy={false}>
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
              className="text-(--color-foreground)! whitespace-pre-wrap"
              value={section.id.toString()}
              sx={{ whiteSpace: "pre-wrap" }}
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
  );
}

export default SectionProfil;
export { TabSectionProfil };
