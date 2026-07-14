import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Lazy load named exports
const Home = lazy(() => import("../pages/Home.jsx").then(module => ({ default: module.Home })));
const About = lazy(() => import("../pages/About.jsx").then(module => ({ default: module.About })));
const Project = lazy(() => import("../pages/Project.jsx").then(module => ({ default: module.Project })));
const Contact = lazy(() => import("../pages/Contact.jsx").then(module => ({ default: module.Contact })));

export const AllRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh", color: "var(--text-muted)" }}>
          Loading...
        </div>
      }>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};
