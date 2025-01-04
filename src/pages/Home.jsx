import React from "react";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <section className="home-container">
      <div className="home-left">
        <div className="profile-circle">
          <img src="" alt="Profile" className="profile-picture" />
        </div>
      </div>
      <div className="home-right">
        <div className="home-content">
          <h1 className="home-heading typing-effect">Hi, I'm Aditya!</h1>
          <p className="home-description">
            I'm a Frontend Developer passionate about crafting intuitive and
            visually appealing web experiences.
            <br /> Let's create something amazing together!
          </p>
        </div>
        <div className="circle-container">
          <Link to="/About" className="circle circle1">
            <span>About</span>
          </Link>
          <Link to="/Project" className="circle circle2">
            <span>Project</span>
          </Link>
          <Link to="/Contact" className="circle circle3">
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
