import React from 'react'
import "./Companies.css"
import Spotify from "../../assets/spotify.png"
import Slack from "../../assets/slack.png"
import Dropbox from "../../assets/dropbox.png"
import Zoom from "../../assets/zoom.png"

const Companies = () => {
    return (
        <div className='companies-container'>
            <p>Trusted by 4,000+ companies</p>
            <div className="logo-images-container">
                <div className="img-box">
                    <img src={Spotify} alt="logo" />

                </div>
                <div className="img-box slack">
                    <img src={Slack} alt="logo" />

                </div>
                <div className="img-box">
                    <img src={Dropbox} alt="logo" />

                </div>
                <div className="img-box zoom">
                    <img src={Zoom} alt="logo" />

                </div>
            </div>
        </div>
    )
}

export default Companies