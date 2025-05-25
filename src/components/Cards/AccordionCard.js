import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const AccordionCard = ({ title, summary, isExpanded, onToggle, panelId, sn }) => {
  return (
   <div className="mb-4">
  <Accordion
    expanded={isExpanded}
    onChange={onToggle}
    sx={{
      background: "transparent",
      boxShadow: "none",
      borderBottom: "1px solid #e5e7eb",
      borderRadius: "12px !important",
      overflow: "hidden",
      transition: "all 0.2s ease",
      "&:hover": {
        borderColor: "#6366f1",
      },
    }}
  >
    <AccordionSummary
      expandIcon={
        <div className="text-primary text-xl font-bold p-1">
          {isExpanded ? '-' : '+'}
        </div>
      }
      aria-controls={`panel${panelId}-content`}
      id={`panel${panelId}-header`}
      sx={{
        padding: "1rem",
        backgroundColor: isExpanded ? "transparent" : "transparent",
      }}
    >
      <div className="flex items-center gap-4">
        <span className={` text-xl font-normal ${
          isExpanded ? 'text-[#6A1B9A]' : 'text-[#6A1B9A]'
        }`}>
          {title}
        </span>
      </div>
    </AccordionSummary>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { duration: 0.2 }
      }}
    >
      <AccordionDetails className="p-4 pl-12 sm:pl-16">
        <div className="text-textGray leading-6  leading-relaxed text-sm">
          {summary.split("\n").map((line, i) => (
            <p key={i} className="mb-3 last:mb-0">
              {line}
            </p>
          ))}
        </div>
      </AccordionDetails>
    </motion.div>
  </Accordion>
</div>
  );
};

export default AccordionCard;