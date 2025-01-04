import React from "react";
import "./Project.css";
import ecommerce from "../assets/e-commerce.jpeg";
import quiz from "../assets/quiz.jpeg";
import portfolio from "../assets/portfolio.jpeg";

const projects = [
  {
    name: "Quiz App",
    description:
      "A comprehensive quiz web application with a focus on user authentication, real-time quiz functionality, and detailed result tracking. The application is built from scratch without using external APIs, with all quiz questions created manually",
    image: quiz,
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://shorturl.at/SYfnh",
  },
  {
    name: "E-commerce Platform",
    description:
      "A fully functional e-commerce website with key features such as user authentication, item management, and seamless data integration using APIs. The project demonstrates strong front-end development skills with a focus on responsive design and user experience",
    image: ecommerce,
    languages: ["HTML", "CSS", "JavaScript"],
    link: "https://shorturl.at/y67xy",
  },
  {
    name: "Portfolio Website",
    description: "will update soon",
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
            <img
              src={project.image}
              alt={`${project.name}`}
              className="project-image"
            />
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Languages: {project.languages.join(", ")}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
