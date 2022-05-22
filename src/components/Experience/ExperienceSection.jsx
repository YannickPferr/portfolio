import React from "react"
import Experience from "./Experience"
import styles from "./ExperienceSection.module.scss"

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Bosch Rexroth AG",
      time: "January 2021 – June 2021",
      title: "Master thesis: Machine Learning for Production Optimization",
      description: [
        "Carried out a data science project using the CRISP-DM model",
        "Built a machine learning system for production planning with the goal to optimize production and machine setup times",
        "System was built using supervised learning and deep reinforcement learning",
        "The system was implemented in Python with scikit-learn, pandas, NumPy, TensorFlow and Keras",
      ],
    },
    {
      company: "Arlanis Reply AG",
      time: "January 2018 – September 2021",
      title: "Working student: Developer & Consultant",
      description: [
        "Development of Java applications with Salesforce integration via REST or SOAP APIs",
        "Full stack development with HTML/CSS and JavaScript (Frontend) and server-side JavaScript (Backend)",
        "Worked with SQL queries to segment customers and produce reports",
        "Documentation and IT-Assessment of user stories",
        "Consulting and project work in an agile environment (SCRUM)",
      ],
    },
  ]

  const skills = [
    "Java",
    "JavaScript",
    "Python",
    "SQL",
    "HTML/CSS",
    "R",
    "C/C++",
    "TensorFlow",
    "Keras",
    "scikit-learn",
    "Git",
    "Gatsby.js",
    "Node.js",
    "React",
    "Apache Kafka",
    "MS-Office",
    "Atlassian Suite",
    "MySQL",
    "MongoDB",
    "InfluxDB",
  ]

  return (
    <section id="experience" className={styles.experience}>
      <h1>Experience</h1>
      <div className={styles.flex}>
        {experiences &&
          experiences.map((experience, index) => (
            <Experience key={index} experience={experience}></Experience>
          ))}

        <div className={styles.skillsContainer}>
          <h2>Skills</h2>
          <ul className={styles.skills}>
            {skills &&
              skills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
export default ExperienceSection
