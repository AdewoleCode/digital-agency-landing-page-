import React from 'react'
import "./Home.css"
import HomeHero from "../../assets/home-hero.png"
import Companies from '../../components/companies/Companies'
import Branding from '../../components/branding/Branding'

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <div className="left-home">
                    <h3>Building Digital Products, Brands & Experience</h3>
                    <p>Digital Agency is your online team mangement tool that easy and prompt</p>
                    <div className="button-wrapper">
                        <button>CONTACT US</button>
                    </div>
                </div>
                <div className="right-home">
                    <img src={HomeHero} alt="hero" />
                </div>
            </div>
            <Companies />
            <Branding />
        </>

    )
}

export default Home