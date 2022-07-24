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
        "Redesigned and rebuilt a supervised machine learning model for the treasury, to classify if customers are going to use their special repayment option of their loan, and boosted the F1-score of the old model by 22% (Python, scikit-learn, pandas)",
        "Developed, tested, and maintained the frontend of a foreign exchange trading app and quickly rose to become one of the top performing devs in a team of 12, while also supporting other juniors (React, TypeScript, Styled Components)",
        "Led a team of five interns/students to help different teams with the deployment of new APIs",
        "Analyzed results, translated them into business recommendations and presented them to senior management",
        "Implemented new REST API endpoints in the backend of the Commerzbank developer API portal and built a feature in the frontend, that allowed users to see the deployment/staging status of their APIs (React, Java Spring)",
      ],
    },
    {
      company: "Bosch Rexroth AG",
      time: "January 2021 – June 2021",
      title: "Data Scientist | Master Thesis",
      description: [
        "Researched how machine learning can be used to optimize a production scheduling problem (combinatorial optimization), drafted, implemented, and evaluated a solution, and completed the master thesis with grade 1,0",
        "Extracted machine and production data from about a million excel files, analyzed, cleaned, and prepared it for the model",
        "Implemented a reinforcement learning algorithm from scratch and achieved a 12% reduction in production time per production line, which corresponds to a yearly decrease in cost of about 300.000 € per production line",
        "Analyzed results, translated them into business recommendations and presented them to senior management",
        "Tech used: Python, JavaScript, pandas, TensorFlow, Keras, scikit-learn, Node-RED",
      ],
    },
    {
      company: "Arlanis Reply AG",
      time: "January 2018 – September 2021",
      title: "Software Engineer | Bachelor Thesis, Intern, Working Student",
      description: [
        "Built an app for consultants to help them automate various tasks in the Salesforce Marketing Cloud (SF MC) like data migration and saved them multiple hours of tedious manual work in the process (Java, SQL, SF API)",
        "Developed a full stack web app for clients running in SF MC so clients could export specific Marketing Cloud data to excel files, without them needing to know how to write SQL queries (JavaScript in frontend & backend, HTML, CSS, SQL)",
        "Implemented a service, that exported millions of campaign tracking records from SF MC, processed them and imported them into Salesforce CRM, to help a client easily customize their campaign tracking reports (Java, Heroku, SF APIs)",
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
