import React from 'react'
import "./Contact.css"
import ContactPerson from "../../assets/contact.png"

const Contact = () => {
    return (
        <div className='contact-wrapper'>
            <div className="contact-container">
                <div className="contact-left">
                    <div className="contact-image-box">
                        <img src={ContactPerson} alt="contact" />
                    </div>
                </div>
                <div className="contact-right">
                    <h3>Be a part of the next big thing</h3>
                    <p>We work with Brans, Startups, to SMEs. Colaborate for more impact and growt</p>
                    <div className="button-wrapper">
                        <button>CONTACT US</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact