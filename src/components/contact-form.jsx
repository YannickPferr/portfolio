import React from "react"

import styles from "./contact-form.module.scss"

const ContactForm = ({ input }) => {

    return (
        <form className={styles.form} action="https://formsubmit.io/send/c59aa336-7221-49a2-8838-2585da01783a" method="post">
            <div>
                <label className={styles.clip} htmlFor="name">Your Name*</label>
                <input
                    className={styles.formInput}
                    type="text"
                    name="NAME"
                    id="name"
                    placeholder="Your Name*"
                    required
                />
            </div>
            <div>
                <label className={styles.clip} htmlFor="email">Your Email Address*</label>
                <input
                    className={styles.formInput}
                    name="EMAIL"
                    id="email"
                    type="email"
                    placeholder="Your Email Address*"
                    required
                />
            </div>
            <div>
                <label className={styles.clip} htmlFor="message">Your Message*</label>
                <textarea
                    className={styles.formInput}
                    name="MESSAGE"
                    id="message"
                    type="text"
                    placeholder="Your Message*"
                    rows="5"
                    required
                />
            </div>
            <input
                className={styles.formSubmit}
                type="submit"
                name="submit"
                value="Get in touch"
            />
        </form>
    )
}
export default ContactForm