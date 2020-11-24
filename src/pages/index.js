import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import scrollTo from 'gatsby-plugin-smoothscroll'
import { FaFilePdf, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

import ContactForm from "../components/contact-form"

import styles from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query{
      profilePic: file(name: {eq: "profilePic"}) {
        name
        publicURL
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
        <header id="home" className={styles.header}>
          <div className={styles.heroContainer}>
            <h1>Yannick Pferr</h1>
            <h2>Business &amp; Information Systems Student</h2>
            <button onClick={() => scrollTo('#contact')}>Get in touch</button>
          </div>
        </header>

        <section className={styles.mainSection}>
          {/* ABOUT ME */}
          <section id="aboutme" className={styles.about}>
            <h1>About Me</h1>
            <div className={styles.flex}>
              <div className={styles.aboutColumn}>
                <img src={data.profilePic.publicURL} />
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
                <a href={data.resume.publicURL}><button>Resume</button></a>
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

        <div id="contact" className={styles.contact}>
          <div className={styles.heroContainer}>
            <h1>Contact</h1>
            <ContactForm/>
          </div>
        </div>
        <footer id="footer" className={styles.footer}>
          <div className={styles.heroContainer}>
          <div className={styles.contactIcons}><a href="mailto:yannick@pferr.de"><FaEnvelope /></a><a href="https://www.linkedin.com/in/yannick-pferr-22216619a/"><FaLinkedin /></a><a href="https://github.com/YannickPferr"><FaGithub /></a></div>
          <hr></hr>
          <p>2020 © Yannick Pferr</p>
          </div>
        </footer>
      </div>
    </Layout>
  )
}

export default IndexPage
