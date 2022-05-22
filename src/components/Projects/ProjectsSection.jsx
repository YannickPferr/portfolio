import React from "react"
import Project from "./Project"
import styles from "./ProjectsSection.module.scss"

const ProjectsSection = ({
  foodBlogPic,
  blockchainExplorerPic,
  tuditpmPic,
  gorillaPic,
  magicMirrorPic,
}) => {
  const projects = [
    {
      name: "Food Blog: The Filling Food Spot",
      description:
        "Created a food blog to share healthy recipes using Gatsby.js and React. The blog is hosted on Netlify and uses Contentful CMS to serve its content",
      demoLink: "https://www.fillingfoodspot.com/",
      githubLink: "https://github.com/YannickPferr/blog",
      demoPic: foodBlogPic,
    },
    {
      name: "Blockchain System Explorer",
      description:
        "Developed a Java app for researchers that can monitor & analyze the status of any blockchain platform using a client/server approach. The collected data can be viewed and queried through a web interface. The data is stored in InfluxDB and visualized with Influx Chronograf. System metrics of blockchain nodes can also be collected with the help of Influx Telegraf.",
      demoLink: "",
      githubLink: "https://github.com/YannickPferr/BlockchainSystemExplorer",
      demoPic: blockchainExplorerPic,
    },
    {
      name: "News Sentiment Analyzer",
      description:
        "Built a web app with a team of students that searches for specific keywords in news articles, and then analyzes the sentiment of the text. The app uses Java, Apache Kafka and MongoDB to collect the data, Solr to analyze the text, and Redis and Node.js to visualize the data in a web interface.",
      githubLink: "https://github.com/YannickPferr/TUDITPM",
      demoPic: tuditpmPic,
    },
    {
      name: "Gorillas Game",
      description:
        "Implemented the Gorillas game from the 90s in Java with a team of students. The game featured multiple maps, a high score table, configurable properties, and basic animations.",
      githubLink: "https://github.com/YannickPferr/Gorillas",
      demoPic: gorillaPic,
    },
    {
      name: "Magic Mirror",
      description:
        "Built a smart mirror with a Raspberry Pi that could display various information. The backend was built upon a Node.js open-source library. Other than the basic features of the library, the mirror could play YouTube videos and Spotify tracks, and also be controlled through voice using Google STT.",
      demoPic: magicMirrorPic,
    },
  ]

  return (
    <section id="projects" className={styles.projects}>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <Project key={index} project={project}></Project>
      ))}
    </section>
  )
}
export default ProjectsSection
