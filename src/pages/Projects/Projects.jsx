import React from 'react'
import "./Projects.css"
import Projectcards from '../../components/Project-cards/Projectcards'
import chertnodes from "../../assets/chertnodes.jpg"

const Projects = () => {
  return (
    <div>
      <div className="bigproject">
        <br /><br /><br /><br />
        <span style={{marginLeft:"250px"}}>
          <h1><span className='slash'>/</span>projects</h1>
          <br />
          <p >List of my projects</p>
        </span>
        <br /><br /><br /><br />
        <h1 style={{marginLeft:"250px"}}><span>#</span>complete-projects</h1>
        <br /><br /><br /><br />
        <div className="projectss">
          <Projectcards h1name="my name" title="anynaynayn" p="naynayanynn" img={chertnodes} />
          <Projectcards h1name="my name" title="anynaynayn" p="naynayanynn" img={chertnodes} />
          <Projectcards h1name="my name" title="anynaynayn" p="naynayanynn" img={chertnodes} />
          <Projectcards h1name="my name" title="anynaynayn" p="naynayanynn" img={chertnodes} />
          <Projectcards h1name="my name" title="anynaynayn" p="naynayanynn" img={chertnodes} />
        </div>
        <br /><br />
      </div>
    </div>
  )
}

export default Projects