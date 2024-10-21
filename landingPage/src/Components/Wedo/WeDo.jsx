import React from 'react'
import "./weDo.css"
import icon1 from "./wedoImg/icon1.png"
import icon2 from "./wedoImg/icon2.png"
import icon3 from "./wedoImg/icon3.png"
import icon4 from "./wedoImg/icon4.png"
import icon5 from "./wedoImg/icon5.png"
import icon6 from "./wedoImg/icon6.png"
import icon7 from "./wedoImg/icon7.png"
import image1 from "./wedoImg/image1.png"
import image2 from "./wedoImg/image2.png"
import image3 from "./wedoImg/image3.png"
import mailIcon from "./wedoImg/mailIcon.png"
import phoneIcon from "./wedoImg/phoneIcon.png"

function WeDo() {
    return (
        <div className="weDo">

            <div className="doOne">
                <div className="Oneup">
                    <div className="upLeft" data-aos="fade-in">
                        <h1 className='head'>WHAT WE DO</h1>
                        <h2>With our flexible  production capacity and
                            high technology, we<span> produce customized</span><br></br>
                             solutions for your needs</h2>
                    </div>
                    <div className="upRight">
                        <img src={icon1} alt="" />
                        <h2><span>Watch Our Machines</span></h2>
                    </div>
                </div>
                <div className="OneDown" data-aos="fade-up">
                    <div className="box">
                        <img src={icon6} alt="" />
                        <h3>Filling and Packaging Machines</h3>
                    </div>
                    <div className="box">
                        <img src={icon2} alt="" />
                        <h3>End of Line Solutions</h3>
                    </div>
                    <div className="box">
                        <img src={icon3} alt="" />
                        <h3>Food Industry Machines Software</h3>
                    </div>
                    <div className="box">
                        <img src={icon4} alt="" />
                        <h3>Special Solutions Your Needs</h3>
                    </div>
                    <div className="box">
                        <img src={icon5} alt="" />
                        <h3>7/24 Techincal Support</h3>
                    </div>
                </div>
            </div>


            <div className="doTwo" data-aos="fade-in">
                <div className="TwoLeft">
                    <h2>Filling and Packaging Machines</h2>
                    <p>Filling and packaging machines automate the process of filling products into containers and packaging them, ensuring efficiency, consistency, and hygiene in production. <span>Read more</span></p>
                    <div className="boxes">
                        <div className="box">
                            <img src={image1} alt="" />
                            <h4>Linear Machines</h4>
                        </div>
                        <div className="box">
                            <img src={image2} alt="" />
                            <h4>Rotary Machines</h4>
                        </div>
                        <div className="box">
                            <img src={image3} alt="" />
                            <h4>Bottle Filling Machines</h4>
                        </div>
                    </div>
                </div>

                <div className="TwoRight " data-aos="fade-in">
                    <div className="TwoUp">
                        <h4>Let's Plan an Online Meeting</h4>
                        <img src={icon7} alt="" />
                    </div>

                    <div className="TwoDown">
                        <h3>Are you interested? Contact our sales department now</h3>
                        <div className="twoBox">
                            <img src={phoneIcon} alt="" />
                            <div className="help">
                                <p>Call Us</p>
                                <p>+92-300-0674899</p>
                            </div>
                        </div>
                        <div className="twoBox">
                            <img src={mailIcon} alt="" />
                            <div className="help">
                                <p>Sales Department</p>
                                <p>Sales@dctechsol.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeDo