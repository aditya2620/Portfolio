import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Terminal, Cpu, Cloud, GitBranch, Braces, Layers, Globe } from "lucide-react";
import "./BackgroundEffects.css";

const backgroundIcons = [
  { Icon: Code, size: 40, top: "15%", left: "10%", delay: 0, color: "#38bdf8" },      // Sky Blue (React/Dev)
  { Icon: Database, size: 50, top: "25%", left: "80%", delay: 1, color: "#10b981" },  // Emerald (SQL/PostgreSQL)
  { Icon: Terminal, size: 35, top: "60%", left: "15%", delay: 2, color: "#eab308" },  // Yellow (JS Console)
  { Icon: Cpu, size: 45, top: "80%", left: "75%", delay: 1.5, color: "#ec4899" },    // Pink (Systems/Node)
  { Icon: Cloud, size: 40, top: "40%", left: "85%", delay: 3, color: "#06b6d4" },      // Cyan (Cloud/API)
  { Icon: GitBranch, size: 30, top: "70%", left: "5%", delay: 0.5, color: "#f43f5e" }, // Rose Red (Git/Repo)
  { Icon: Braces, size: 45, top: "10%", left: "70%", delay: 2.5, color: "#8b5cf6" },   // Purple (Braces/Types)
  { Icon: Layers, size: 35, top: "50%", left: "90%", delay: 3.5, color: "#14b8a6" },   // Teal (Stack/CSS)
  { Icon: Globe, size: 40, top: "85%", left: "20%", delay: 4, color: "#3b82f6" },      // Blue (Globe/Web)
];

export const BackgroundEffects = () => {
  return (
    <div className="bg-effects-container">
      {/* Shifting Aurora Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Floating Developer Icons */}
      {backgroundIcons.map(({ Icon, size, top, left, delay, color }, index) => (
        <motion.div
          key={index}
          className="floating-icon"
          style={{ top, left, color }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
          whileHover={{ 
            scale: 1.15, 
            opacity: 0.22, 
            color: "var(--accent-color)" 
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>
  );
};
