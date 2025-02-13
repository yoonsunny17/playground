import React from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import GoBack from "../common/GoBack";

interface ProfilePageProps {
  showProfilePage: boolean;
  setShowProfilePage: (value: boolean) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({
  showProfilePage,
  setShowProfilePage,
}) => {
  return (
    <AnimatePresence>
      {showProfilePage && (
        <motion.div
          key={"profilePage"}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-zinc-800 flex flex-col items-center justify-center"
        >
          <div className="h-screen relative w-screen overflow-auto bg-gradient-to-b from-gray-800 to-gray-900">
            {/* go to main page */}
            <GoBack
              setShowProjectsPage={setShowProfilePage}
              className="absolute z-50 top-6 left-10 cursor-none text-white text-xl font-bold"
            />

            {/* animated background stars */}
            <div className="absolute inset-0">
              {[...Array(60)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    opacity: Math.random(),
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* main contents */}
            <div className="z-10 absolute top-40 md:top-30 left-15 md:left-20 text-white space-y-10 min-w-[600px]">
              <div className="flex items-center justify-around md:justify-center gap-6">
                <motion.img
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.8, delay: 1.8 }}
                  src={"/images/profile.png"}
                  alt="profile"
                  className="rounded-full w-32 md:w-48 h-32 md:h-48"
                />
                <div className="flex flex-col items-start">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.8, delay: 2.2 }}
                    className="text-2xl md:text-4xl font-bold mb-1 text-center"
                  >
                    🌟 YoonSun Jun
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.8, delay: 2.4 }}
                    className="md:text-lg text-gray-300 text-center"
                  >
                    Frontend Developer 🖥️ | Creative Problem Solver 🧩
                  </motion.p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <motion.p
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.8, delay: 5 }}
                  className="text-sm md:text-base bg-gray-600/20 rounded-lg p-1"
                >
                  🚀 Passionate about crafting intuitive & interactive user
                  experiences.
                </motion.p>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.8, delay: 6 }}
                  className="text-sm md:text-base bg-gray-600/20 rounded-lg p-1"
                >
                  💡 Bringing ideas to life with code, creativity, and a
                  user-first mindset.
                </motion.p>
                <motion.p
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.8, delay: 7 }}
                  className="text-sm md:text-base bg-gray-600/20 rounded-lg p-1"
                >
                  ⚡ Love solving complex problems and optimizing performance.
                </motion.p>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.8, delay: 8 }}
                  className="text-sm md:text-base bg-gray-600/20 rounded-lg p-1"
                >
                  🎨 Tech Stack: React, TypeScript, Next.js, Framer Motion
                </motion.p>
                <motion.p
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.8, delay: 9 }}
                  className="text-sm md:text-base bg-gray-600/20 rounded-lg p-1"
                >
                  🛠️ Core Strengths: Responsive Web Design, Efficient State
                  Management
                </motion.p>
              </div>
              {/* email */}
              <motion.a
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                }}
                transition={{ duration: 1.8, delay: 11 }}
                href="mailto:jyoonsun0217@gmail.com"
                className="bg-gray-500/50 rounded-lg p-2 cursor-none hover:bg-gray-500/70 transition delay-100"
              >
                ✉️ Send me an email
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfilePage;
