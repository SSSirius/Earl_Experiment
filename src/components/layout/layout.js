/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import P5Wrapper from 'react-p5-wrapper';
import Header from "./header"
// import sketch from "../bgsketch/sketch";
// import ScrollDown from "../bgsketch/scrolldown"
// import "./layout.css"
import "../style.css"
const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     stateSketch: sketch,
  //   };
  // }
  

  return (
    <>
    {/* <P5Wrapper sketch={sketch} /> */}

   
 {/* siteTitle={data.site.siteMetadata.title} */}
      <Header />
      {/* < ScrollDown /> */}
      <div style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 0 1.45rem`,
          paddingTop: 0,
        }} >

             <div id="home-into" className="view-page">
            <h1 className="main-title">Hi! I'm Luqi NIE,</h1>
            < div className = "intro-text" >
                < p > An interaction designer < span className="emoji"
        role="img" aria-label="spir"> ✨ </span>, a creative technologist<span className="emoji"
        role="img" aria-label="code">👩‍💻</span > , and a gamer < span className="emoji"
        role="img" aria-label="game"> 🎮</span>. </p >
                <p>Here is the page for my experiments in Design & Code. </p>
                <p>Find my selected projects on <a className="mysite" href="http://luqinie.com">My Portfolio
                        <span className="mysitetext">Try Me!</span>
                    </a> </p>
            </div>
     </div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, LUQI NIE
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
