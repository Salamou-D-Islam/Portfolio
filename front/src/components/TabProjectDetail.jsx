import { useState } from "react";
import { getEmbedLink } from "../components/AccordionComponent";

import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import TabPanel from "@mui/lab/TabPanel";

function TabProjectDetail() {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
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
                value={id}
                sx={{
                  "&.Mui-selected": {
                    fontWeight: "bold",
                  },
                }}
              />

              <Tab
                className="text-(--color-primary)! max-w-16 mx-auto flex"
                label="Techniques"
                value={id}
                sx={{
                  "&.Mui-selected": {
                    fontWeight: "bold",
                  },
                }}
              />

              <Tab
                className="text-(--color-primary)! max-w-16 mx-auto flex"
                label="Autre"
                value={id}
                sx={{
                  "&.Mui-selected": {
                    fontWeight: "bold",
                  },
                }}
              />
            </Tabs>
          </Box>
          <TabPanel
            className="text-(--color-foreground)! whitespace-pre-wrap"
            sx={{ whiteSpace: "pre-wrap" }}
            value={id}
          >
            {presentation_projet}
          </TabPanel>
          <TabPanel
            className="text-(--color-foreground)! whitespace-pre-wrap"
            sx={{ whiteSpace: "pre-wrap" }}
            value={id}
          >
            {technique_projet}
          </TabPanel>
          <TabPanel
            className="text-(--color-foreground)! whitespace-pre-wrap"
            sx={{ whiteSpace: "pre-wrap" }}
            value={id}
          >
            <iframe
              width="600"
              height="400"
              src={getEmbedLink(lien_vdo)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-auto max-md:w-full"
            />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default TabProjectDetail;
