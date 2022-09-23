import Image from "gatsby-image"
import React from "react"
import { FaGithub } from "react-icons/fa"
import Button from "../Button"
import styles from "./Project.module.scss"

const Project = ({ project }) => {
  return (
    <div className={styles.projectsRow}>
      <div className={styles.flex}>
        <div className={styles.projectsColumn}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className={styles.techUsed}>
            <b>Tech used:</b>
            <ul className={styles.tech}>
              {project.techUsed.map(tech => (
                <li>{tech}</li>
              ))}
            </ul>
          </div>
          <div className={styles.githubLink}>
            {project.demoLink && (
              <Button
                text="Live Demo"
                href={project.demoLink}
                color="#00414b"
                backgroundColor="white"
              ></Button>
            )}
            {project.githubLink && (
              <a
                aria-label="github"
                className={styles.contactIcons}
                href={project.githubLink}
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
        <div className={styles.projectsColumn}>
          {project.demoPic.type === "gif" ? (
            <img src={project.demoPic.src} />
          ) : (
            <Image fluid={project.demoPic.src} />
          )}
        </div>
      </div>
    </div>
  )
}
export default Project
