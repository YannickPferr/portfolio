/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo"

import Header from "./header"
import "./layout.css"

const Layout = ({ title, children }) => {

  return (
    <>
      <SEO title={title} />
      <Header/>
      <div>
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
