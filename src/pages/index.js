import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import { FaFilePdf, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

import { Link } from 'react-scroll'

import ContactForm from "../components/contact-form"

import styles from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query{
      profilePic: file(name: {eq: "profilePic"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      foodBlogPic: file(name: {eq: "foodBlogPic"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      blockchainExplorerPic: file(name: {eq: "blockchainExplorerPic"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      tuditpmPic: file(name: {eq: "tuditpmPic"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      gorillasPic: file(name: {eq: "gorillasPic"}) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      magicMirrorPic: file(name: {eq: "magicMirrorPic"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      resume: file(name: {eq: "resume"}) {
        name
        publicURL
      }
    }
  `)

  return (
    <Layout title="Home">
      <div className={styles.scrollContainer}>
        <div>
          <header id="home" className={styles.header}>
            <h1>Yannick Pferr</h1>
            <h2>Business &amp; Information Systems Student</h2>
            <h2 className={styles.contactIcons}><a aria-label="mail" href="mailto:yannick@pferr.de"><FaEnvelope /></a><a aria-label="linkedin" href="https://www.linkedin.com/in/YannickPferr/"><FaLinkedin /></a><a aria-label="github" href="https://github.com/YannickPferr"><FaGithub /></a><a aria-label="pdf" href={data.resume.publicURL}><FaFilePdf /></a></h2>
            <Link to="aboutme" smooth={true} offset={-60}><button>Learn more</button></Link>
          </header>
        </div>

        <section className={styles.mainSection}>
          {/* ABOUT ME */}
          <section id="aboutme" className={styles.about}>
            <h1>About Me</h1>
            <div className={styles.flex}>
              <div className={styles.aboutColumn}>
                <Image fluid={data.profilePic.childImageSharp.fluid} />
              </div>
              <div className={styles.aboutColumn}>
                <h2>Welcome to my page!</h2>
                <p>
                  My name is Yannick Pferr and I am currently pursuing my masters degree in business &amp; information systems at TU Darmstadt.
                  I am passionate about software engineering and technology in general.
                  In my freetime I like working on software projects and messing around with raspberry pi or arduino.
                <br />
                  <br />
                Other than tech, I really like working out, cooking and coming up with new healthy recipes
                (I have a food blog where I share my recipes if you want to check it out).
                <br />
                  <br />
                If you want to get in touch, you can message me on LinkedIn, send me an email or simply use my contact form!
              </p>
                <a aria-label="resume" href={data.resume.publicURL}><button>Resume</button></a>
              </div>
            </div>
          </section>

          {/* EXPERIENCE  */}
          <section id="experience" className={styles.experience}>
            <h1>Experience</h1>
            <div className={styles.flex}>
              <div className={styles.verticalCenter}>
                <div className={styles.experienceContainer}>
                  <h2>2018 – present</h2>
                  <h3>Working Student (Developer) at Arlanis Reply AG</h3>
                  <ul>
                    <li>
                      Built a Java app on Heroku, that syncs data between Salesforce Marketing Cloud and Sales Cloud.
                      The app was able to efficiently transfer millions of data rows without reaching API and Heroku limits.
                  </li>
                    <li>
                      Developed a secure web application with login &amp; session management that enabled users to segment audiences without needing to use SQL queries.
                  </li>
                    <li>
                      Created a GUI-based app to help users with no coding experience leverage Salesforce Marketing Cloud API functionality, thus reducing setup and configuration times drastically.
                  </li>
                  </ul>
                </div>
              </div>
              <div className={styles.verticalCenter}>
                <h2>Skills</h2>
                <ul className={styles.skills}>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>SQL</li>
                  <li>HTML/CSS</li>
                  <li>Python</li>
                  <li>R</li>
                  <li>C/C++</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>Git</li>
                  <li>Gatsby.js</li>
                  <li>Node.js</li>
                </ul>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className={styles.projects}>
            <div className={styles.projectsRow}>
              <h1>Projects</h1>
              <div className={styles.flex}>
                <div className={styles.projectsColumn}>
                  <h1>Food Blog: The Filling Food Spot</h1>
                  <p>
                    Created a food blog to share healthy recipes using Gatsby.js and React. The blog is hosted on Netlify and uses Contentful CMS to serve its content.
                  </p>
                  <div className={styles.githubLink}>
                    <a href="https://fillingfoodspot.com"><button>Live Demo</button></a>
                    <a aria-label="github" className={styles.contactIcons} href="https://github.com/YannickPferr/blog"><FaGithub /></a>
                  </div>
                </div>
                <div className={styles.projectsColumn}>
                  <Image
                    fluid={data.foodBlogPic.childImageSharp.fluid} />
                </div>
              </div>
            </div>
            <div className={styles.projectsRow}>
              <div className={styles.flex}>
                <div className={styles.projectsColumn}>
                  <h1>Blockchain System Explorer</h1>
                  <p>
                    Developed a Java app for researchers that can monitor &amp; analyze the status of any blockchain platform using a client/server approach.
                    The collected data can be viewed and queried through a web interface. The data is stored in InfluxDB and visualized with Influx Chronograf.
                    System metrics of blockchain nodes can also be collected with the help of Influx Telegraf.
                  </p>
                  <div className={styles.githubLink}>
                    <a aria-label="github" className={styles.contactIcons} href="https://github.com/YannickPferr/BlockchainSystemExplorer"><FaGithub /></a>
                  </div>
                </div>
                <div className={styles.projectsColumn}>
                  <Image
                    fluid={data.blockchainExplorerPic.childImageSharp.fluid} />
                </div>
              </div>
            </div>
            <div className={styles.projectsRow}>
              <div className={styles.flex}>
                <div className={styles.projectsColumn}>
                  <h1>News Sentiment Analyzer</h1>
                  <p>
                    Built a web app with a team of students that searches for specific keywords in news articles, and then analyzes the sentiment of the text.
                    The app uses Java, Apache Kafka and MongoDB to collect the data, Solr to analyze the text, and Redis and Node.js to visualize the data in a web interface.
                  </p>
                  <div className={styles.githubLink}>
                    <a aria-label="github" className={styles.contactIcons} href="https://github.com/YannickPferr/TUDITPM"><FaGithub /></a>
                  </div>
                </div>
                <div className={styles.projectsColumn}>
                  <Image fluid={data.tuditpmPic.childImageSharp.fluid} />
                </div>
              </div>
            </div>
            <div className={styles.projectsRow}>
              <div className={styles.flex}>
                <div className={styles.projectsColumn}>
                  <h1>Gorillas Game</h1>
                  <p>
                    Implemented the Gorillas game from the 90s in Java with a team of students.
                    The game featured multiple maps, a high score table, configurable properties, and basic animations.
                  </p>
                  <div className={styles.githubLink}>
                    <a aria-label="github" className={styles.contactIcons} href="https://github.com/YannickPferr/Gorillas"><FaGithub /></a>
                  </div>
                </div>
                <div className={styles.projectsColumn}>
                  <Image fluid={data.gorillasPic.childImageSharp.fluid} />
                </div>
              </div>
            </div>
            <div className={styles.projectsRow}>
              <div className={styles.flex}>
                <div className={styles.projectsColumn}>
                  <h1>Magic Mirror</h1>
                  <p>
                    Built a smart mirror with a Raspberry Pi that could display various information.
                    The backend was built upon a Node.js open-source library.
                    Other than the basic features of the library, the mirror could play YouTube videos and Spotify tracks, and also be control through voice using Google STT.
                  </p>
                </div>
                <div className={styles.projectsColumn}>
                  <Image fluid={data.magicMirrorPic.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </section>
        </section>

        <div id="contact" className={styles.contact}>
          <h1>Contact</h1>
          <ContactForm />
        </div>
        <footer className={styles.footer}>
          <div className={styles.contactIcons}><a aria-label="mail" href="mailto:yannick@pferr.de"><FaEnvelope /></a><a aria-label="linkedin" href="https://www.linkedin.com/in/YannickPferr/"><FaLinkedin /></a><a aria-label="github" href="https://github.com/YannickPferr"><FaGithub /></a><a aria-label="pdf" href={data.resume.publicURL}><FaFilePdf /></a></div>
          <hr></hr>
          <p>2020 © Yannick Pferr</p>
        </footer>
      </div>

    </Layout>
  )
}

export default IndexPage
