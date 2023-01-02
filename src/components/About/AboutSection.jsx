import Image from "gatsby-image"
import React from "react"
import Button from "../Button"
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
            My name is Yannick Pferr, I have a bachelors and masters degree in
            business information systems from TU Darmstadt and am currently
            working as a Full Stack Software Engineer in the ksqlDB team at
            Confluent.
            <br />
            <br />I am passionate about software engineering and technology in
            general. In my freetime I like working on software projects and
            messing around with Raspberry Pi's or Arduino's. Other than tech, I
            really like working out, cooking and coming up with new healthy
            recipes (check out my food blog{" "}
            <a href="https://www.fillingfoodspot.com">here</a>).
            <br />
            <br />
            If you want to get in touch, you can message me on LinkedIn, send me
            an email or simply use my contact form!
            <br />
            <br />
            Looking for my resume? Look no further! Click the button below!
          </p>
          <Button
            text="Resume"
            href={resume}
            color={styles.colorPrimary}
            backgroundColor={styles.colorSecondary}
          ></Button>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
