import { Link, NavLink } from "react-router-dom";
import coding from "../assets/coding.png";
import "./Header.css";
export const Header = () => {
  return (
    <header className="header">
      <div className="header-logo-title">
        <img src={coding} alt="logo" className="header-logo" />
        <Link to="/" className="header-title">
          DevStudio
        </Link>
      </div>
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
    </header>
  );
};
