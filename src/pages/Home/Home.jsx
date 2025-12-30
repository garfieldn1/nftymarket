import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import FirstHuman from "../../assets/firsthuman.png"
import Projectcards from '../../components/Project-cards/Projectcards'
import chertnodes from "../../assets/chertnodes.jpg"
import skillsimage from "../../assets/skillsimage.png"
import Skillcards from '../../components/skillcards/Skillcards'
import aboutimage from "../../assets/aboutimage.png"
import dots from "../../assets/dots.png"

const Home = () => {
  return (
    <div>
      <div className="BIIG">
        <br /><br /><br /><br />
        <div className="header">
          <div className="texts">
            <h1 className='abouttext'>I am <span className='abouttexth1'>Front-end</span> developer</h1> <br /><br />
            <p className='abouttextp'>I craft responsive websites where technologies meet <br /> creativity</p> <br />
            <button className='contactbtn'>contact me !!</button>
          </div>
          <div className="images">
            <img src={FirstHuman} alt="human" />
            <div className="container">
              <div className="box"></div>
              <p className='current'>Currently working on <span className='port'>Portfolio</span></p>
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
        <div className="power">
          <h1 className='great'>With great power comes great electricity bill</h1>
        </div>
        <div className="box2"></div>
        <div className="who">
          <h1 className='dr'>- Dr. Who</h1>
        </div>
        <br /><br /><br /><br />
             <img className='dots' src={dots} alt="dots" />
        <div className="projects">
          
          <div className='projecttext'>
            <span className='textdisplay'>
              <h1 style={{ color: 'white' }}><span className='sharp'>#</span>Projects</h1>
              <div className="line"></div>
            </span>

            <h1 className='wiewalll'>View all <i class="fa-solid fa-right" style={{ color: '#ffffff' }}></i> </h1>
          </div>
              
          <div className="project-cards">
            <Projectcards h1name="my name" title="anynaynayn" p="naynayanynn" img={chertnodes} />
            <Projectcards h1name="my name" title="anynaynayn" p="naynayanynn" img={chertnodes} />
            <Projectcards h1name="my name" title="anynaynayn" p="naynayanynn" img={chertnodes} />
          </div>
        </div>
        <div className="box3"></div>
        <br /><br /><br /><br />
        <div className="skills">
          <div>
            <span className='textdisplay'>
              <h1 className='skillsh1'><span className='sharp'>#</span>skils</h1>
              <div className="line"></div>
            </span>
            <br />
            <img className='skillsimage' src={skillsimage} alt="skills image" />
          </div>

          <div className="skillscontainer-flex">
            <div className="skills-row row-1">
              <Skillcards skilltitle="Languages" skilldescription="Typescript, Lua, python, Javascript." />
            </div>
            <div className="skills-row row-2">
              <Skillcards skilltitle="Frameworks" skilldescription="React, Node.js, Next.js, Django." />
              <Skillcards skilltitle="Databases" skilldescription="PostgreSQL, MongoDB, MySQL." />
            </div>
            <div className="skills-row row-3">
              <Skillcards skilltitle="Tools" skilldescription="Git, Docker, Webpack, Figma." />
              <Skillcards skilltitle="Cloud" skilldescription="AWS, Vercel, Heroku, Netlify." />
              <Skillcards skilltitle="Others" skilldescription="Agile, REST, GraphQL, Testing." />
            </div>

          </div>
        </div>
          <img className='dots3' src={dots} alt="" />
        <br /><br /><br /><br /><br /><br /><br />
        <div className="about">
          <div className="about-texts">
            <span className='aboutspan'>
              <h1 className='abouth1'><span className='sharp'>#</span> about-me</h1>
              <div className="linee"></div>
            </span>
            <br />
            <p className='aboutp'>
              Hello, i`m Elias!
              <br /><br />
              I`m a self-taught front-end developer based in Kyiv, <br />
              Ukraine. I can develop responsive websites from <br />
              scratch and raise them into modern user-friendly web <br />
              experiences.
              <br /><br />
              Transforming my creativity and knowledge into a <br />
              websites has been my passion for over a year. I have <br />
              been helping various clients to establish their <br />
              presence online. I always strive to learn about the <br />
              newest technologies and frameworks.
            </p>
            <br />
            <button className='about-readmore'>Read more <i class="fa-solid fa-right" style={{ color: '#ffffff' }}></i></button>
          </div>
          <img src={aboutimage} alt="about-image" />
        </div>
        <img className='dots2' src={dots} alt="" />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div className="contacts">
          <span>
            <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <h1 className='contactsh1'><span className='sharp'>#</span>contacts</h1>
              <div className="linee"></div>
            </span>
            <br /><br />
            <p className='contactsp'>
              I`m interested in freelance opportunities. However, <br />
              if you have other request or question, don`t <br />
              hesitate to contact me
            </p>
          </span>

          <div className="contact-box">
            <p style={{color:"white"}}>Message me here</p>
            <span className='calls'><i class="fa-brands fa-discord" style={{ color: 'gray' }}></i> !Garfield#3519</span>
            <span className='calls'><i class="fa-light fa-envelope"></i> Garfield@Garfield.me</span>
          </div>
        </div>

        <br /><br />
      </div>
    </div>
  )
}

export default Home