import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Option from "../components/option/option"
// import  "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.min.js";
// import "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.dom.min.js"
// import "../components/sketch";

const IndexPage = () => (

<div>



  <Layout >

    {/* <SEO title="Home" /> */}
    {/* < h1 className = "main-title" > Hi!I 'm Luqi NIE,</h1> */}
    {/* <div className=" main-text">
                <p>An interaction designer ✨, a creative technologist 👩‍💻, and a gamer 🎮.</p>
                <p>Here is the page for my experiments in Design &amp; Code. </p>
                <p>Find my selected projects on <a className="mysite" href="http://luqinie.com">My Portfolio
                        <span className="mysitetext">Try Me!</span>
                    </a> </p>
                    
            </div> */}

   



            < div className = "home-cate"
           id= "home-cate" >
                        
    < Option  />
                          
                       
         
            </div>
  </Layout>
  </div>
)

export default IndexPage
