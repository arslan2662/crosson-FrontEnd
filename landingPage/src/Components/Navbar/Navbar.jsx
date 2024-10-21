import React from 'react'
import './Navbar.css';
import phoneIcon from "./navbarImg/phoneIcon.png"
import logo from "./navbarImg/logo.png"
import twitterIcon from "./navbarImg/twitterIcon.png"
import linkedinIcon from "./navbarImg/linkedinIcon.png"
import languageIcon from "./navbarImg/languageIcon.png"
import instagramIcon from "./navbarImg/instagramIcon.png"

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                {/* upper part of navbar */}
                <div className="upper">

                    <div className="logoleft">
                        <img src={phoneIcon} alt="" />
                        <div className="help">
                            <p><b>Do you need help?</b></p>
                            <p>+92-300-0674899</p>
                        </div>
                    </div>

                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="logoright">
                        <img src={linkedinIcon} alt="" />
                        <img src={instagramIcon} alt="" />
                        <img src={twitterIcon} alt="" />
                        <img src={languageIcon} alt="" />
                    </div>
                </div>

                {/* lower part of navbar */}
                <div className="lower">
                    <ul className='navlinks'>
                        <li><a href="">Product</a></li>
                        <li><a href="">Solutions</a></li>
                        <li><a href="">Software</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Corporate</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar