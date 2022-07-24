import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import AboutSection from "../components/About/AboutSection"
import ContactSection from "../components/Contact/ContactSection"
import ExperienceSection from "../components/Experience/ExperienceSection"
import Footer from "../components/Footer/Footer"
import HeroSection from "../components/Hero/HeroSection"
import Layout from "../components/layout"
import ProjectsSection from "../components/Projects/ProjectsSection"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      profilePic: file(name: { eq: "profilePic" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      resume: file(name: { eq: "resume2.0" }) {
        name
        publicURL
      }
    }
  `)

  return (
    <Layout title="Home">
      <HeroSection
        resume={data.resume.publicURL}
        mail="mailto:yannick@pferr.de"
        linkedin="https://www.linkedin.com/in/YannickPferr/"
        github="https://github.com/YannickPferr"
      ></HeroSection>
      <AboutSection
        image={data.profilePic.childImageSharp.fluid}
        resume={data.resume.publicURL}
      ></AboutSection>
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer resume={data.resume.publicURL}></Footer>
    </Layout>
  )
}

export default IndexPage
