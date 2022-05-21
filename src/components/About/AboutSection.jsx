import Image from "gatsby-image"
import React from "react"
import styles from "./AboutSection.module.scss"

const AboutSection = ({ image, resume }) => {
  return (
    <section id="aboutme" className={styles.about}>
      <h1>About Me</h1>
      <div className={styles.flex}>
        <div className={styles.aboutColumn}>
          <Image fluid={image} />
        </div>
        <div className={styles.aboutColumn}>
          <h2>Welcome to my page!</h2>
          <p>
            My name is Yannick Pferr, I have a masters degree in business &amp;
            information systems from TU Darmstadt and am currently working as a
            IT-Trainee at Commerzbank. I am passionate about software
            engineering and technology in general. In my freetime I like working
            on software projects and messing around with raspberry pi or
            arduino.
            <br />
            <br />
            Other than tech, I really like working out, cooking and coming up
            with new healthy recipes (check out my food blog{" "}
            <a href="https://www.fillingfoodspot.com">here</a>).
            <br />
            <br />
            If you want to get in touch, you can message me on LinkedIn, send me
            an email or simply use my contact form!
            <br />
            <br />
            Looking for my resume? Look no further! Click the button below!
          </p>
          <a aria-label="resume" href={resume}>
            <button>Resume</button>
          </a>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
