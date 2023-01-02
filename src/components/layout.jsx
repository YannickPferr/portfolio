/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import Header from "./Header/Header"
import "./layout.scss"
import SEO from "./SEO"

const Layout = ({ title, children }) => {
  return (
    <>
      <SEO title={title} />
      <Header />
      <div>{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
