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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="mb-4"
      layout
    >
      <Accordion
        expanded={isExpanded}
        onChange={onToggle}
        sx={{
          background: "transparent",
          boxShadow: "none",
          "&:before": { display: "none" },
          border: "1px solid #e5e7eb",
          borderRadius: "12px !important",
          overflow: "hidden",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: "#6366f1",
            boxShadow: "0 4px 24px rgba(99, 102, 241, 0.1)",
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-1"
            >
              <ExpandMoreIcon className="text-primary text-2xl" />
            </motion.div>
          }
          aria-controls={`panel${panelId}-content`}
          id={`panel${panelId}-header`}
          sx={{
            padding: "1.25rem",
            backgroundColor: isExpanded ? "#f8fafc" : "transparent",
            transition: "background-color 0.3s ease, padding 0.3s ease",
          }}
        >
          <div className="flex items-center gap-4">
            <motion.div
              className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white font-medium shadow-lg"
              animate={{ 
                scale: isExpanded ? 1.1 : 1,
                backgroundColor: isExpanded ? "#6A1B9A" : "#6366f1"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              layout
            >
              {sn}
            </motion.div>
            <Typography
              component={motion.span}
              className="font-semibold text-xl"
              sx={{
                color: isExpanded ? "#6A1B9A" : "#1e293b",
                transition: "color 0.3s ease",
              }}
              layout="position"
            >
              {title}
            </Typography>
          </div>
        </AccordionSummary>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: "auto",
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { duration: 0.2, ease: "easeIn" }
              }}
              className="origin-top"
            >
              <AccordionDetails 
                sx={{ 
                  padding: "0 1.5rem 1.5rem 5rem",
                  "@media (max-width: 640px)": {
                    padding: "0 1rem 1.5rem 4rem"
                  }
                }}
              >
                <motion.div
                  initial={{ scaleY: 0.98 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Typography 
                    className="text-textGray text-base leading-relaxed"
                    variant="body1"
                    component="div"
                  >
                    {summary.split("\n").map((line, i) => (
                      <p key={i} className="mb-3 last:mb-0">
                        {line}
                      </p>
                    ))}
                  </Typography>
                </motion.div>
              </AccordionDetails>
            </motion.div>
          )}
        </AnimatePresence>
      </Accordion>
    </motion.div>
  );
};

export default AccordionCard;