import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import scrollTo from 'gatsby-plugin-smoothscroll'
import { FaLinkedin, FaGithub } from "react-icons/fa"

import styles from "./resume.module.scss"

const Resume = () => (
  <Layout title="Home">
    <div className={styles.scrollContainer}>
      <header id="home" className={styles.header}>
        <div className={styles.heroContainer}>
          <h1>Yannick Pferr</h1>
          <h2>Business &amp; Information Systems Student</h2>
          <div className={styles.contactIcons}><a href="https://www.linkedin.com/in/yannick-pferr-22216619a/"><FaLinkedin /></a><a href="https://github.com/YannickPferr"><FaGithub /></a></div>
          <button onClick={() => scrollTo('#contact')}>Get in touch</button>
        </div>
      </header>

      <section className={styles.mainSection}>
        {/* ABOUT ME */}
        <section id="aboutme" className={styles.about}>
          <h1>About Me</h1>
          <div className={styles.flex}>
            <div className={styles.aboutColumn}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQGKoaCPFhH8fA/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=vWGMm-56toBQLO4MWd3GGMQTtHTBiq_IOps2N6Ne6Cw"></img>
            </div>
            <div className={styles.aboutColumn}>
              <h2>My name is Yannick Pferr</h2>
              <p>
                I am currently pursuing my masters degree in business &amp; information systems at TU Darmstadt. 
                I am passionate about software engineering and technology in general. 
                In my freetime I like working on software projects and messing around with raspberry pi or arduino.

                Other than tech, I really like working out, cooking and coming up with new healthy recipes.  
                I have a food blog where I share my recipes if you want to check it out. 
              </p>
              <button>Resume</button>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className={styles.projects}>
          <div className={styles.projectsRow}>
            <h1>Projects</h1>
            <div className={styles.flex}>
              <div className={styles.projectsColumn}>
                <h1>Gorillas Game</h1>
                <p>
                  Gorillas Game implemented in Java
            </p>
              </div>
              <div className={styles.projectsColumn}>
                <img
                  src="https://raw.githubusercontent.com/YannickPferr/Gorillas/main/gorillas.JPG"></img>
              </div>
            </div>
          </div>
          <div className={styles.projectsRow}>
            <div className={styles.flex}>
              <div className={styles.projectsColumn}>
                <h1>Tetris Game</h1>
                <p>
                  Tetris Game implemented in Java.
            </p>
              </div>
              <div className={styles.projectsColumn}>
                <img
                  src="https://raw.githubusercontent.com/YannickPferr/Tetris/main/tetris.JPG"></img>
              </div>
            </div>
          </div>
        </section>
      </section>

      <footer id="contact" className={styles.footer}>
        <div className={styles.heroContainer}>
          <h1>Contact</h1>
          <div className={styles.contactIcons}><a href="https://www.linkedin.com/in/yannick-pferr-22216619a/"><FaLinkedin /></a><a href="https://github.com/YannickPferr"><FaGithub /></a></div>
          <button>Get in touch</button>
        </div>
      </footer>
    </div>
  </Layout>
)

export default Resume
