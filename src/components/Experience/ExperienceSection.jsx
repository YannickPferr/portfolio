import React from "react"
import styles from "./ExperienceSection.module.scss"

const ExperienceSection = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h1>Experience</h1>
      <div className={styles.flex}>
        <div className={styles.experienceContainer}>
          <div className={styles.experienceHeader}>
            <h2>Bosch Rexroth AG</h2>
            <h2>January 2021 – June 2021</h2>
          </div>
          <h3>Master thesis: Machine Learning for Production Optimization</h3>
          <ul>
            <li>
              Carried out a <strong>data science project</strong> using the{" "}
              <strong>CRISP-DM model</strong>
            </li>
            <li>
              Built a <strong>machine learning</strong> system for{" "}
              <strong>production planning</strong> with the goal to{" "}
              <strong>optimize production</strong> and{" "}
              <strong>machine setup times</strong>
            </li>
            <li>
              System was built using <strong>supervised learning</strong> and{" "}
              <strong>deep reinforcement learning</strong>
            </li>
            <li>
              The system was implemented in <strong>Python</strong> with{" "}
              <strong>scikit-learn</strong>, <strong>pandas</strong>,{" "}
              <strong>NumPy</strong>, <strong>TensorFlow</strong> and{" "}
              <strong>Keras</strong>
            </li>
          </ul>
        </div>
        <div className={styles.experienceContainer}>
          <div className={styles.experienceHeader}>
            <h2>Arlanis Reply AG</h2>
            <h2>January 2018 – September 2021</h2>
          </div>
          <h3>Working student: Developer &amp; Consultant</h3>
          <ul>
            <li>
              Development of <strong>Java applications</strong> with{" "}
              <strong>Salesforce integration</strong> via <strong>REST</strong>{" "}
              or <strong>SOAP APIs</strong>
            </li>
            <li>
              <strong>Full stack development</strong> with{" "}
              <strong>HTML/CSS</strong> and <strong>JavaScript</strong>{" "}
              (Frontend) and <strong>server-side JavaScript</strong> (Backend)
            </li>
            <li>
              Worked with <strong>SQL queries</strong> to{" "}
              <strong>segment customers</strong> and{" "}
              <strong>produce reports</strong>
            </li>
            <li>
              <strong>Documentation</strong> and <strong>IT-Assessment</strong>{" "}
              of <strong>user stories</strong>
            </li>
            <li>
              <strong>Consulting</strong> and <strong>project work</strong> in
              an <strong>agile</strong> environment (SCRUM)
            </li>
          </ul>
        </div>
        <div className={styles.skillsContainer}>
          <h2>Skills</h2>
          <ul className={styles.skills}>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>SQL</li>
            <li>HTML/CSS</li>
            <li>R</li>
            <li>C/C++</li>
            <li>TensorFlow</li>
            <li>Keras</li>
            <li>scikit-learn</li>
            <li>Git</li>
            <li>Gatsby.js</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Apache Kafka</li>
            <li>MS-Office</li>
            <li>Atlassian Suite</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>InfluxDB</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default ExperienceSection
