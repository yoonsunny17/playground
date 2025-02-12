import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const ProjectCards = () => {
  return (
    <motion.div className="relative w-4/5 h-full flex justify-center items-center">
      <motion.h1 className="absolute top-40 sm:top-50 text-4xl font-bold text-white">
        PROJECTS
      </motion.h1>
      <div className="absolute grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </motion.div>
  );
};
export default ProjectCards;
