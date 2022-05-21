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

      foodBlogPic: file(name: { eq: "foodBlogPic" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      blockchainExplorerPic: file(name: { eq: "blockchainExplorerPic" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      tuditpmPic: file(name: { eq: "tuditpmPic" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      gorillasPic: file(name: { eq: "gorillasPic" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      magicMirrorPic: file(name: { eq: "magicMirrorPic" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      resume: file(name: { eq: "resume" }) {
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
      <ExperienceSection></ExperienceSection>
      <ProjectsSection
        foodBlogPic={data.foodBlogPic.childImageSharp.fluid}
        blockchainExplorerPic={data.blockchainExplorerPic.childImageSharp.fluid}
        tuditpmPic={data.tuditpmPic.childImageSharp.fluid}
        gorillaPic={data.gorillasPic.childImageSharp.fluid}
        magicMirrorPic={data.magicMirrorPic.childImageSharp.fluid}
      ></ProjectsSection>
      <ContactSection></ContactSection>
      <Footer resume={data.resume.publicURL}></Footer>
    </Layout>
  )
}

export default IndexPage
