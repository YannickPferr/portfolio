import React from "react"
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa"
import styles from "./Footer.module.scss"

const Footer = ({ resume }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactIcons}>
        <a aria-label="mail" href="mailto:yannick@pferr.de">
          <FaEnvelope />
        </a>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/in/YannickPferr/"
        >
          <FaLinkedin />
        </a>
        <a aria-label="github" href="https://github.com/YannickPferr">
          <FaGithub />
        </a>
        <a aria-label="pdf" href={resume}>
          <FaFilePdf />
        </a>
      </div>
      <hr></hr>
      <p>2020 © Yannick Pferr</p>
    </footer>
  )
}
export default Footer
