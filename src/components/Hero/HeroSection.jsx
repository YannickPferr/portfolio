import React from "react"
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa"
import { Link } from "react-scroll"
import styles from "./HeroSection.module.scss"

const HeroSection = ({ resume, mail, linkedin, github }) => {
  return (
    <header id="hero" className={styles.header}>
      <h1>Yannick Pferr</h1>
      <h2>Software Engineer (IT-Trainee) @ Commerzbank</h2>
      <h2 className={styles.contactIcons}>
        <a aria-label="mail" href={mail}>
          <FaEnvelope />
        </a>
        <a aria-label="linkedin" href={linkedin}>
          <FaLinkedin />
        </a>
        <a aria-label="github" href={github}>
          <FaGithub />
        </a>
        <a aria-label="pdf" href={resume}>
          <FaFilePdf />
        </a>
      </h2>
      <Link to="aboutme" smooth={true} offset={-60}>
        <button>Learn more</button>
      </Link>
    </header>
  )
}
export default HeroSection
