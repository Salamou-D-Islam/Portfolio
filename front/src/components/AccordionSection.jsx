import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { pink } from "@mui/material/colors";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function AccordionSection({ children, content, className = "", ...props }) {
  return (
    <>
      <Accordion
        {...props}
        content={content}
        className={`sectionApply bg-black/50! text-white! mx-auto! border rounded p-4 whitespace-pre-wrap ${className}`}
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
          <h5 className="text-4xl">{children}</h5> <br />
        </AccordionSummary>
        <AccordionDetails>
          <hr /> <br /> {content}
        </AccordionDetails>
      </Accordion>
      ;
    </>
  );
}

function TabsSection({ children, content, className = "", label, ...props }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="bg-amber-700">
      <Tab className="text-white!" label={label} value="1" />
      <TabPanel className="text-white!" value="1">
        {children}
      </TabPanel>
    </section>
  );
}
export default AccordionSection;
export { TabsSection };
