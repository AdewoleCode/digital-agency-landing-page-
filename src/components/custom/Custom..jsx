import React from 'react'
import "./Custom.css"
import BuinessMan from "../../assets/businessman.png"
import { AiOutlineArrowRight } from "react-icons/ai"

const Custom = () => {
    return (
        <div className='custom-container'>
            <div className="custom-left">
                <h3>Custom & Plugin Development</h3>
                <p>
                    Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups
                </p>
                <AiOutlineArrowRight />

            </div>
            <div className="custom-right">
                <div className="custom-image-box">
                    <img src={BuinessMan} alt="businessman" />
                </div>
            </div>
        </div>
    )
}

export default Custom