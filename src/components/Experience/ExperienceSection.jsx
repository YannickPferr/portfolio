import React from "react"
import Experience from "./Experience"
import styles from "./ExperienceSection.module.scss"

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Commerzbank AG",
      time: "since October 2021",
      title: "Software Engineer (IT-Trainee program) | Full Time",
      description: [
        "Redesigned and rebuilt a supervised machine learning model for the treasury to predict if customers are going to use the special repayment option of their loan; boosted the F1-score of the old model by 22% (Python, scikit-learn, pandas)",
        "Developed and unit-tested the frontend of a foreign exchange trading app; improved maintainability and the code review process by enforcing coding style conventions (React, TypeScript, Styled Components)",
        "Implemented new REST API endpoints in the backend of the Commerzbank developer API portal and built a feature in the frontend that allowed users to see the deployment/staging status of their projects (React, Java Spring, REST APIs)",
        "Led a team of five interns/students to help different teams with the deployment of new APIs",
      ],
    },
    {
      company: "Bosch Rexroth AG",
      time: "January 2021 – June 2021",
      title: "Data Scientist | Master Thesis",
      description: [
        "Researched how machine learning can be used to optimize a production scheduling problem (combinatorial optimization); drafted, implemented, and evaluated a solution; completed the master thesis with the highest grade possible (1.0)",
        "Extracted machine and production data from one million excel files, analyzed, cleaned, and prepared the data for the model",
        "Implemented a reinforcement learning algorithm from scratch and achieved a 12% reduction in production time per production line which corresponds to a yearly decrease in costs of about 300.000 € per production line",
        "Analyzed results, translated them into business recommendations, and presented them to senior management ",
        "Tech used: Python, JavaScript, pandas, TensorFlow, Keras, scikit-learn, Node-RED",
      ],
    },
    {
      company: "Arlanis Reply AG",
      time: "January 2018 – September 2021",
      title: "Software Engineer | Bachelor Thesis, Intern, Working Student",
      description: [
        "Built an app for consultants to help them automate various tasks (e.g.: data migration) in the Salesforce Marketing Cloud (SF MC) and saved them multiple hours of tedious manual work in the process (Java, SQL, REST/SOAP APIs)",
        "Developed a full stack web app for clients running in Marketing Cloud so clients could export specific data to excel files, without them needing to know how to write SQL queries (JavaScript in frontend & backend, HTML, CSS, SQL)",
        "Implemented a service that exported millions of campaign tracking records from SF MC, processed them, and imported them into SF CRM to help a client easily customize their campaign tracking reports (Java, Heroku, REST/SOAP APIs)",
      ],
    },
  ]

  const skills = [
    "Java",
    "JavaScript/TypeScript",
    "Python",
    "HTML/CSS",
    "SQL",
    "React",
    "Spring",
    "scikit-learn",
    "pandas",
    "TensorFlow",
    "Keras",
    "Next.js",
    "Gatsby.js",
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
