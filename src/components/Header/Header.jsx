import React from "react"
import { Link } from "react-scroll"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navMain}>
        <div className={styles.navItemHome}>
          <Link to="hero" smooth={true} offset={-60}>
            Home
          </Link>
        </div>
        <div className={styles.navItemList}>
          <div className={styles.navItem}>
            <Link to="aboutme" smooth={true} offset={-60}>
              About
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link to="experience" smooth={true} offset={-60}>
              Experience
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link to="projects" smooth={true} offset={-60}>
              Projects
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link to="contact" smooth={true} offset={-60}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
