import React from 'react'
import "./Skillcards.css"

function Skillcards(props) {
    return (
        <>
         <div className="skillcard">
             <div className="skilltitle">
                {props.skilltitle}
             </div>
             <div className="hr"></div>
             <div className="skilldescription">
                {props.skilldescription}
             </div>
         </div>
        </>
    )
}

export default Skillcards