import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { GrMenu } from "react-icons/gr";

import scrollTo from 'gatsby-plugin-smoothscroll'

import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <nav className={styles.navMain}>
      <div className={styles.navItemHome} onClick={() => scrollTo('#home')}>Home</div>
      <div className={styles.navItemList}>
        <div className={styles.navItem} onClick={() => scrollTo('#aboutme')}>About</div>
        <div className={styles.navItem}>Experience</div>
        <div className={styles.navItem} onClick={() => scrollTo('#projects')}>Projects</div>
        <div className={styles.navItem} onClick={() => scrollTo('#contact')}>Contact</div>
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
