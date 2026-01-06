import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function Header() {
    return (
        <header>
            <img src="../images/ichich2.png" alt="this is me" className="header-img"/>
            <h1 className="header-title">Silvio Schwarz</h1>
            <h2 className="header-subtitle">Geophysicist (B.Sc.)</h2>
            <h3 className="header-sub-subtitle">
                <a href="http://silvioschwarz.ddns.net" target="_blank">www.silvioschwarz.com</a></h3>

            <div className="header-buttons">
                <a href ="mailto:silvio_schwarz@web.de" target="_blank">
            <button className="email-button">
                <FontAwesomeIcon icon={faEnvelope} size="1x"/> Email
            </button>
            </a>
            <a href="https://www.linkedin/in/silvioschwarz" target="_blank">
                <button className="linkedin-button">
                    <FontAwesomeIcon icon={faLinkedin} size="1x"/> LinkedIn
                </button>
            </a>
            </div>
        </header>
    )
}