import React from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

interface OverlayProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, setIsOpen }) => {
  return (
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
  );
};

export default Overlay;
