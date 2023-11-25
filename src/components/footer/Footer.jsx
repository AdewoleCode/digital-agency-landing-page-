import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="group">
                <div className="foot-group-1">
                    <h4>Digital Agency</h4>
                    <p>Building digital products, brands & experience</p>
                </div>
                <div className="foot-group">
                    <h4>Reources</h4>
                    <p>guides</p>
                    <p>blogs</p>
                    <p>customer stories</p>
                    <p>glossary</p>
                </div>
                <div className="foot-group">
                    <h4>Company</h4>
                    <p>About Us</p>
                    <p>Career</p>
                    <p>Partners</p>
                    <p>Contact Us</p>
                </div>
                <div className="foot-group">
                    <h4>Social Media</h4>
                    <p>LinkedIn</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>

            </div>
            <p className='footer-tag'>© Matheus. Todos os direitos reservados</p>
        </div>
    )
}

export default Footer