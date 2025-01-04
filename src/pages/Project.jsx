import React from "react";
import "./Project.css";
import ecommerce from "../assets/e-commerce.jpeg";
import quiz from "../assets/quiz.jpeg";
import portfolio from "../assets/portfolio.jpeg";

const projects = [
  {
    name: "Quiz App",
    image: quiz,
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://example.com/quiz-app",
  },
  {
    name: "E-commerce Platform",
    image: ecommerce,
    languages: ["React", "JavaScript", "CSS"],
    link: "https://example.com/ecommerce-platform",
  },
  {
    name: "Portfolio Website",
    image: portfolio,
    languages: ["React", "CSS"],
    link: "https://example.com/portfolio-website",
  },
];

export const Project = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={`${project.name}`}
                className="project-image"
              />
              <h3>{project.name}</h3>
              <p>Languages: {project.languages.join(", ")}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
