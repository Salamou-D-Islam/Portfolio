import React, { useState } from "react";
import FormText, { FormTextrea, ButtonForm } from "../components/Form";
import AccordionSection, { TabsSection } from "../components/AccordionSection";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

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
              <ButtonForm
                type="button"
                onClick={() => {
                  setIsEditing(true);
                }}
                className="bg-green-700 hover:bg-green-600"
              >
                Modifier
              </ButtonForm>

              <ButtonForm
                type="button"
                onClick={() => handleDelete(id)}
                className="bg-red-700 hover:bg-red-600"
              >
                Supprimer
              </ButtonForm>
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
    </>
  );
}

function TabSectionProfil({ title, desc, isAdmin, onDelete, id, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempDataProfil, setTempDataProfil] = useState({
    nom_section: title,
    description_section: desc,
  });
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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

  const tabs = [
    { value: "1", title: "frgt", content: "gtgtg" },
    {
      value: "2",
      title: "jjj",
      content:
        "La guerre d'Hiver est un conflit militaire entre l'Union des républiques socialistes soviétiques (URSS) et la Finlande qui commence par l'invasion de cette dernière par son voisin soviétique le 30 novembre 1939, trois mois après le début de la Seconde Guerre mondiale, et se termine trois mois et demi plus tard avec le traité de paix de Moscou le 13 mars 1940. Malgré une supériorité militaire sur tous les plans, l'URSS subit de lourdes pertes et obtient des résultats moins importants qu'espérés. La Société des Nations déclare l'attaque illégale et expulse l'URSS.",
    },
    { value: "3", title: "kkkk", content: "jjjkkk" },
    { value: "4", title: "frgt", content: "gtgtg" },
    { value: "5", title: "jjj", content: "jjj" },
    { value: "6", title: "kkkk", content: "jjjkkk" },
    { value: "7", title: "frgt", content: "gtgtg" },
    { value: "8", title: "jjj", content: "jjj" },
    { value: "9", title: "kkkk", content: "jjjkkk" },
    { value: "10", title: "frgt", content: "gtgtg" },
    { value: "11", title: "jjj", content: "jjj" },
    { value: "12", title: "kkkk", content: "jjjkkk" },
    { value: "13", title: "frgt", content: "gtgtg" },
    { value: "14", title: "jjj", content: "jjj" },
    { value: "15", title: "kkkk", content: "jjjkkk" },
    { value: "16", title: "frgt", content: "gtgtg" },
    { value: "17", title: "jjj", content: "jjj" },
    { value: "18", title: "kkkk", content: "jjjkkk" },
  ];
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }} fullWidth>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                aria-label="visible arrows tabs example"
                sx={{
                  [`& .${tabsClasses.scrollButtons}`]: {
                    "&.Mui-disabled": { opacity: 0.3 },
                  },
                }}
              >
                {tabs.map((tab) => (
                  <Tab
                    className="text-white! "
                    label={tab.title}
                    value={tab.value}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                  />
                ))}
              </Tabs>
            </TabList>
          </Box>{" "}
          {tabs.map((tab) => (
            <TabPanel className="text-white!" value={tab.value}>
              {tab.content}
            </TabPanel>
          ))}
        </TabContext>
      </Box>
      {/* 
      {tabs.map((tab) => (
        <TabsSection
          label={tab.title}
          className="flex flex-row mb-0! contactHoverDiv hover:bg-gray-800! rounded-lg gap-4"
        >
          <p>{tab.content}</p>
        </TabsSection>
      ))} */}

      {/* <section className="bg-amber-700">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab className="text-white!" label="Item One" value="1" />
                <Tab className="text-white!" label="Item Two" value="2" />
                <Tab className="text-white!" label="Item Three" value="3" />
              </TabList>
            </Box>
            <TabPanel className="text-white!" value="1">
              Item One
            </TabPanel>
            <TabPanel className="text-white!" value="2">
              Item Two
            </TabPanel>
            <TabPanel className="text-white!" value="3">
              Item Three
            </TabPanel>
          </TabContext>
        </Box>
      </section> */}

      {!isEditing ? (
        <>
          {isAdmin && (
            <div className="container flex gap-2 mt-4">
              <ButtonForm
                type="button"
                onClick={() => {
                  setIsEditing(true);
                }}
                className="bg-green-700 hover:bg-green-600"
              >
                Modifier
              </ButtonForm>

              <ButtonForm
                type="button"
                onClick={() => handleDelete(id)}
                className="bg-red-700 hover:bg-red-600"
              >
                Supprimer
              </ButtonForm>
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
    </>
  );
}

export default SectionProfil;
export { TabSectionProfil };
