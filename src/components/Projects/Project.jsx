import Image from "gatsby-image"
import React from "react"
import { FaGithub } from "react-icons/fa"
import styles from "./Project.module.scss"

const Project = ({
  projectName,
  projectDescription,
  liveDemoLink,
  githubLink,
  demoPic,
}) => {
  return (
    <div className={styles.projectsRow}>
      <div className={styles.flex}>
        <div className={styles.projectsColumn}>
          <h2>{projectName}</h2>
          <p>{projectDescription}</p>
          <div className={styles.githubLink}>
            {liveDemoLink && (
              <a href={liveDemoLink}>
                <button>Live Demo</button>
              </a>
            )}
            {githubLink && (
              <a
                aria-label="github"
                className={styles.contactIcons}
                href={githubLink}
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
        <div className={styles.projectsColumn}>
          <Image fluid={demoPic} />
        </div>
      </div>
    </div>
  )
}
export default Project
