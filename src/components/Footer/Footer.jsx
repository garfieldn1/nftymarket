import React from 'react'
import "./Footer.css"
import elias from "../../assets/elias.png"

const Footer = () => {
  return (
    <div>
      <div className="big-footer">
        <hr className='gray' />
        <div className="footer">
          <div className="footer-top">
            <div className="fleft">
              <div className="imt">
                <img src={elias} alt="logo" />
                <p className='gray'>elias@elias-dev.ml</p>
              </div>
              <br />
              <p className='white'>Web designer and front-end developer</p>
            </div>
            <div className="fright">
              <p className='media'>Media</p>
              <br />
              <span className='imagesgap'>
                <i class="fa-brands fa-github fa-2x" style={{ color: "#ABB2BF" }}></i>
                <i class="fa-brands fa-figma fa-2x" style={{ color: "#ABB2BF" }}></i>
                <i class="fa-brands fa-discord fa-2x" style={{ color: "#ABB2BF" }}></i>
              </span>
            </div>
          </div>
          <p className='grayy'>© Copyright 2022. Made by Elias</p>
        </div>
      </div>
    </div>
  )
}

export default Footer