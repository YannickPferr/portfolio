//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {Link} from 'react-scroll'

import styles from "./header.module.scss"

const Header = ({ siteTitle }) => ( 
  <header className={styles.header}>
    <nav className={styles.navMain}>
      <div className={styles.navItemHome}><Link to="home" smooth={true} offset={-60}>Home</Link></div>
      <div className={styles.navItemList}>
        <div className={styles.navItem}><Link to="aboutme" smooth={true} offset={-60}>About</Link></div>
        <div className={styles.navItem}><Link to="experience" smooth={true} offset={-60}>Experience</Link></div>
        <div className={styles.navItem}><Link to="projects" smooth={true} offset={-60}>Projects</Link></div>
        <div className={styles.navItem}><Link to="contact" smooth={true} offset={-60}>Contact</Link></div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
