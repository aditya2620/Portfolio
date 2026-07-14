import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import coding from "../assets/coding.png";
import "./Header.css";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-logo-title">
        <motion.img 
          src={coding} 
          alt="logo" 
          className="header-logo"
          width="40"
          height="40"
          whileHover={{ rotate: 15, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <Link to="/" className="header-title">
          DevStudio
        </Link>
      </div>

      <div className="header-actions">
        <nav className="header-nav">
          <NavLink to="/" className="header-link">
            Home
          </NavLink>
          <NavLink to="/About" className="header-link">
            About
          </NavLink>
          <NavLink to="/Project" className="header-link">
            Project
          </NavLink>
          <NavLink to="/Contact" className="header-link">
            Contact
          </NavLink>
        </nav>

        <motion.button
          onClick={toggleTheme}
          className="theme-toggle"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            <Sun className="theme-icon sun" size={20} />
          ) : (
            <Moon className="theme-icon moon" size={20} />
          )}
        </motion.button>
      </div>
    </header>
  );
};
