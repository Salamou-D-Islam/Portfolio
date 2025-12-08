import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { pink } from "@mui/material/colors";

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

export default AccordionSection;
