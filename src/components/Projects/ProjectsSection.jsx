import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Project from "./Project"
import styles from "./ProjectsSection.module.scss"

const ProjectsSection = () => {
  const data = useStaticQuery(graphql`
    query {
      reNetworkPic: file(name: { eq: "reNetworkPic" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      deepLearningGif: file(name: { eq: "deepLearningPic" }) {
        publicURL
      }

      ypSwapPic: file(name: { eq: "ypSwapPic" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

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
    }
  `)

  const projects = [
    {
      name: "Commerzbank Collabothon: ReNetwork",
      description:
        'Built a scalable web app in a team of five with Next.js, React and Firebase Firestore. The app connects refugees with volunteers through the in-app chat, to help the refugees with daily tasks that might be challenging for them. Won 1st place in the Google challenge with our idea "ReNetwork".',
      demoLink: "http://collabothon-coba.vercel.app/",
      githubLink: "https://github.com/YannickPferr/collabothon-coba",
      demoPic: { type: "jpg", src: data.reNetworkPic.childImageSharp.fluid },
    },
    {
      name: "Deep Reinforcement Agent",
      description:
        "Implemented two reinforcement learning algorithms (DDQN and REINFORCE) from scratch, one of which was used in my master thesis. The correctness of the implementation was tested with the test environments from OpenAI Gym.",
      githubLink: "https://github.com/YannickPferr/deep-learning",
      demoPic: { type: "gif", src: data.deepLearningGif.publicURL },
    },
    {
      name: "YPSwap: ERC-20 Token Exchange",
      description:
        "Created my own ERC-20 token and deployed it on the Ethereum Ropsten Testnet. In the frontend you can exchange (test) Ether for YP coins, by connecting with MetaMask. The frontend was implemented with React and the token contract with solidity.",
      demoLink: "https://ypswap.netlify.app/",
      githubLink: "https://github.com/YannickPferr/yp-swap",
      demoPic: { type: "jpg", src: data.ypSwapPic.childImageSharp.fluid },
    },
    {
      name: "Food Blog: The Filling Food Spot",
      description:
        "Created a food blog to share healthy recipes using Gatsby.js and React. The blog is hosted on Netlify and uses Contentful CMS to serve its content.",
      demoLink: "https://www.fillingfoodspot.com/",
      githubLink: "https://github.com/YannickPferr/blog",
      demoPic: { type: "jpg", src: data.foodBlogPic.childImageSharp.fluid },
    },
    {
      name: "Blockchain System Explorer",
      description:
        "Developed a Java app for researchers that can monitor & analyze the status of any blockchain platform using a client/server approach. The collected data can be viewed and queried through a web interface. The data is stored in InfluxDB and visualized with Influx Chronograf. System metrics of blockchain nodes can also be collected with the help of Influx Telegraf.",
      githubLink: "https://github.com/YannickPferr/BlockchainSystemExplorer",
      demoPic: {
        type: "jpg",
        src: data.blockchainExplorerPic.childImageSharp.fluid,
      },
    },
    {
      name: "News Sentiment Analyzer",
      description:
        "Built a web app with a team of students that searches for specific keywords in news articles, and then analyzes the sentiment of the text. The app uses Java, Apache Kafka and MongoDB to collect the data, Solr to analyze the text, and Redis and Node.js to visualize the data in a web interface.",
      githubLink: "https://github.com/YannickPferr/TUDITPM",
      demoPic: { type: "jpg", src: data.tuditpmPic.childImageSharp.fluid },
    },
    {
      name: "Gorillas Game",
      description:
        "Implemented the Gorillas game from the 90s in Java with a team of students. The game featured multiple maps, a high score table, configurable properties, and basic animations.",
      githubLink: "https://github.com/YannickPferr/Gorillas",
      demoPic: { type: "jpg", src: data.gorillasPic.childImageSharp.fluid },
    },
    {
      name: "Magic Mirror",
      description:
        "Built a smart mirror with a Raspberry Pi that could display various information. The backend was built upon a Node.js open-source library. Other than the basic features of the library, the mirror could play YouTube videos and Spotify tracks, and also be controlled through voice using Google STT.",
      demoPic: { type: "jpg", src: data.magicMirrorPic.childImageSharp.fluid },
    },
  ]

  return (
    <section id="projects" className={styles.projects}>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <Project key={index} project={project}></Project>
      ))}
    </section>
  )
}
export default ProjectsSection
