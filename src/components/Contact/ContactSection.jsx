import React from "react"
import ContactForm from "./ContactForm"
import styles from "./ContactSection.module.scss"

const ContactSection = () => {
  return (
    <div id="contact" className={styles.contact}>
      <h1>Contact</h1>
      <ContactForm />
    </div>
  )
}
export default ContactSection
