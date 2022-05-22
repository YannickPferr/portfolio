import React from "react"
import styles from "./Experience.module.scss"

const Experience = ({ experience }) => {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.experienceHeader}>
        <h2>{experience.company}</h2>
        <h2>{experience.time}</h2>
      </div>
      <h3>{experience.title}</h3>
      <ul>
        {experience.description.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}
export default Experience
