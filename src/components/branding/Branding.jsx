import React from 'react'
import "./Branding.css"
import Pencil from "../../assets/pencil.png"
import { AiOutlineArrowRight } from "react-icons/ai"

const Branding = () => {
  return (
    <div className='branding-container'>
      <div className="branding-left">
        <div className="branding-image-box">
          <img src={Pencil} alt="pencil" />
        </div>
      </div>
      <div className="branding-right">
        <h3>Branding & Design System</h3>
        <p>
          Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups
        </p>
        <AiOutlineArrowRight />
      </div>
    </div>
  )
}

export default Branding