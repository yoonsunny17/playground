import React from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import ProjectCards from "./ProjectCards";
import GoBack from "../common/GoBack";

interface ProjectsPageProps {
  showProjectsPage: boolean;
  setShowProjectsPage: (value: boolean) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({
  showProjectsPage,
  setShowProjectsPage,
}) => {
  return (
    <AnimatePresence>
      {showProjectsPage && (
        <motion.div
          key={"projectsPage"}
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-yellow-500 flex flex-col items-center justify-center"
        >
          <ProjectCards />
          {/* go to main page */}
          <GoBack
            className="absolute bottom-6 right-10 cursor-none text-white text-xl font-bold"
            setShowProjectsPage={setShowProjectsPage}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectsPage;
