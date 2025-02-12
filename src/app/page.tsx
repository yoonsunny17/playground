"use client";

import confetti from "canvas-confetti";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ProjectCards from "@/components/projects/ProjectCards";
import GoBack from "@/components/common/GoBack";

const Home = () => {
  const [progress, setProgress] = useState(0);
  const [showCategoryTitle, setShowCategoryTitle] = useState("");
  const [showMainPage, setShowMainPage] = useState(false);
  const [showProjectsPage, setShowProjectsPage] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // 언마운트 시 스크롤바 복구
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    confetti.create(undefined, { resize: true });
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
    });

    // 게이지바 채우기
    setProgress((prev) => (prev + 20 >= 100 ? 100 : prev + 20));

    // 게이지 다 차면, 그 다음 클릭에서 화면 전환환
    if (progress >= 100) {
      setShowMainPage(true);
    }
  };
  return (
    <div
      className="relative flex flex-col min-h-screen items-center justify-center"
      onClick={handleClick}
    >
      <AnimatePresence>
        {showMainPage ? (
          <motion.div
            key={"mainPage"}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-blue-500 flex items-center justify-center text-white text-4xl space-x-4 sm:space-x-2"
          >
            {showCategoryTitle && (
              <motion.div
                className="absolute -translate-y-14 text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {showCategoryTitle}
              </motion.div>
            )}

            {/* resume */}
            <Link
              href={"https://yoonsunny17.github.io/imsunny/"}
              target="_blank"
            >
              <motion.button
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setShowCategoryTitle("RESUME")}
                onHoverEnd={() => setShowCategoryTitle("")}
                className="cursor-none"
              >
                😉
              </motion.button>
            </Link>

            {/* github */}
            <Link href={"https://github.com/yoonsunny17"} target="_blank">
              <motion.button
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setShowCategoryTitle("GITHUB")}
                onHoverEnd={() => setShowCategoryTitle("")}
                className="cursor-none"
              >
                🥰
              </motion.button>
            </Link>

            {/* projects */}
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setShowCategoryTitle("PROJECTS")}
              onHoverEnd={() => setShowCategoryTitle("")}
              onClick={() => {
                setShowProjectsPage(true);
              }}
              className="cursor-none"
            >
              🤩
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setShowCategoryTitle("?")}
              onHoverEnd={() => setShowCategoryTitle("")}
              className="cursor-none"
            >
              😐
            </motion.button>
          </motion.div>
        ) : (
          <>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              🎉 Welcome 🎉
            </h1>
            <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </>
        )}
      </AnimatePresence>

      {/* projects page */}
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
            <GoBack setShowProjectsPage={setShowProjectsPage} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
