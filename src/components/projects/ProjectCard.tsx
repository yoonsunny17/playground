import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SiNotion, SiGithub } from "react-icons/si";
import Badge from "../common/Badge";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    teamSize: string;
    period: string;
    img?: string;
    notion: string;
    github: string;
    details: {
      skills: string[];
      mainFeatures: string[];
      roles: string[];
      whatILearned: string[];
    };
    isComplete: boolean;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleClick = () => {
    if (project.isComplete) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      {/* card */}
      <motion.div
        layout
        transition={{
          layout: { duration: 1.2, type: "spring" },
        }}
        onClick={handleClick}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        className={`bg-white rounded-2xl overflow-hidden px-8 py-4 ${
          isOpen ? "fixed inset-4 z-100 m-auto max-w-4xl h-[80vh]" : ""
        }`}
        style={{
          boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <motion.div layout className="relative h-full overflow-auto">
          {/* title */}
          <motion.h2 layout="position" className="text-lg font-bold">
            {project.title}
          </motion.h2>

          {/* Coming Soon Text */}
          <AnimatePresence>
            {!project.isComplete && isHover && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-xl z-10"
              >
                <motion.div className="text-white font-bold">
                  Coming Soon!
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* content */}
          {project.isComplete && isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-6 mt-4"
            >
              {/* Main info section */}
              <div className="flex flex-col lg:flex-row gap-6">
                {project.img && (
                  <div className="lg:w-1/2 relative aspect-video">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="rounded-lg object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={!isOpen}
                      loading={isOpen ? "lazy" : "eager"}
                    />
                  </div>
                )}
                <div className="lg:w-1/2 space-y-4">
                  {/* description & teamSize */}
                  <div>
                    <p className="text-lg font-medium">{project.description}</p>
                    <p className="text-sm text-gray-600">{project.teamSize}</p>
                  </div>
                  {/* links */}
                  <div className="flex gap-3">
                    {/* rel: noopener noreferrer */}
                    <a
                      href={project.notion}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <SiNotion className="w-5 h-5" />
                      <span className="font-semibold">Notion</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <SiGithub className="w-5 h-5" />
                      <span className="font-semibold">Github</span>
                    </a>
                  </div>

                  {/* skills */}
                  <div className="flex flex-wrap gap-2">
                    {project.details.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* project details */}
              <div className="space-y-6">
                {/* main features */}
                <section>
                  <h3 className="text-lg font-semibold mb-3">주요 기능</h3>
                  <ul className="space-y-2">
                    {project.details.mainFeatures.map((feature, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-blue-500">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* roles */}
                <section>
                  <h3 className="text-lg font-semibold mb-3">담당 역할</h3>
                  <ul className="space-y-2">
                    {project.details.roles.map((role, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-green-500">•</span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* what i learned */}
                <section>
                  <h3 className="text-lg font-semibold mb-3">배운 점</h3>
                  <ul className="space-y-2">
                    {project.details.whatILearned.map((learn, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-purple-500">•</span>
                        {learn}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-50"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
