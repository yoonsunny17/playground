"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface GoBackProps {
  setShowProjectsPage: (flag: boolean) => void;
}

const GoBack: React.FC<GoBackProps> = ({ setShowProjectsPage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={() => setShowProjectsPage(false)}
      className="absolute bottom-6 right-10 cursor-none text-white text-xl font-bold"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <span className="relative">BACK</span>

      {/* hover effect text */}
      <motion.span
        className="absolute text-orange-300 inset-0"
        style={{ mixBlendMode: "difference", pointerEvents: "none" }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 4 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        BACK
      </motion.span>
    </motion.button>
  );
};

export default GoBack;
