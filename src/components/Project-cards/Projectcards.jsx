import React from 'react'
import "./project-cards.css"

function Projectcards(props) {
  return(
    <>
      <div className="card">
        <img src={props.img} alt="" />
        <h1 className='h1name'>{props.h1name}</h1>
        <hr style={{backgroundColor:'gray', height:'1px'}}/>
        <h1 className='title'>{props.title}</h1>
        <p className='p'>{props.p}</p>
        <button className='contactbtn2'>Learn more</button>
      </div>
    </>
  )
}

export default Projectcards