import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home.jsx";
import { About } from "../pages/About.jsx";
import { Project } from "../pages/Project.jsx";
import { Contact } from "../pages/Contact.jsx";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} end />
      <Route path="/About" element={<About />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};
