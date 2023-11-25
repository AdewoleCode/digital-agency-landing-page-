import React from 'react'
import "./Testimonials.css"
import Man1 from "../../assets/man1.png"
import Man2 from "../../assets/man2.png"
import Man3 from "../../assets/man3.png"

const Testimonials = () => {
  return (
    <div className='testimonials-container'>
        <p>TESTIMONIALS</p>
        <h4>Read What Others Have To Say</h4>
        <div className="card-container">
            <div className="card">
                <img src={Man1} alt="person" />
                <h5>Kevin De Bruyne</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
            </div>
            <div className="card">
            <img src={Man2} alt="person" />
                <h5>Emily Blunt</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
            </div>
            <div className="card">
            <img src={Man3} alt="person" />
                <h5>Asap Rocky</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials