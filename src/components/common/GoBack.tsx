"use client";

import React from "react";
import { motion } from "framer-motion";

interface GoBackProps {
  setShowProjectsPage: (flag: boolean) => void;
  className?: string;
}

const GoBack: React.FC<GoBackProps> = ({ setShowProjectsPage, className }) => {
  return (
    <motion.button
      onClick={() => setShowProjectsPage(false)}
      className={`${className}`}
    >
      {/* hover effect text */}
      <motion.span whileHover={{ x: 10 }} className="block py-2 text-white">
        BACK
      </motion.span>
    </motion.button>
  );
};

export default GoBack;
