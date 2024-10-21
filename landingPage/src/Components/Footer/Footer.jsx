import React from 'react'
import "./Footer.css"
import addressIcon from "./footImg/addressIcon.png"
import phoneIcon from "./footImg/phoneIcon.png"
import mailIcon from "./footImg/mailIcon.png"
import icon from "./footImg/icon.png"

function Footer() {
    return (
        <>       < hr />
            < div className="footer" data-aos="fade-in">

                <div className="upperFoot">
                    <div className="upperLeft">
                        <h3>Have <span>any Question ?</span></h3>
                        <h3>Contact</h3>
                    </div>

                    <div className="upperRight">
                        <div className="upperBox">
                            <img src={phoneIcon} alt="" />
                            <div className="help">
                                <p>Phone Number</p>
                                <p>+92-300-0674899</p>
                            </div>
                        </div>
                        <div className="upperBox">
                            <img src={mailIcon} alt="" />
                            <div className="help">
                                <p>E-mail</p>
                                <p>aslan@dctechsol.com</p>
                            </div>
                        </div>
                        <div className="upperBox">
                            <img src={addressIcon} alt="" />
                            <div className="help">
                                <p>HeadQuater</p>
                                <p>New York City, NY, 10001</p>
                                <p>United States</p>
                                <a href="https://maps.google.com/">Get Directions</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="midFoot">
                    <div className="midBox1">
                        <h2>Products</h2>
                        <li>Filling Machines</li>
                        <li>Bottle Filling Series</li>
                        <li>Package Machines</li>
                        <li>Linear Machines</li>
                        <li>Rotary Machines</li>
                    </div>
                    <div className="midBox1">
                        <h2>Solutions</h2>
                        <li>End of Line Solutions</li>
                        <li>Food Industry Machines Software</li>
                        <li>Research Solutions</li>
                        <li>Conveyor Solutions</li>
                        <li>Special Solutions Your Needs</li>
                        
                    </div>
                    <div className="midBox1">
                        <h2>Corporate</h2>
                        <li>About Us</li>
                        <li>Our Values</li>
                        <li>Human Resorces</li>
                        <li>News</li>
                        <li>Contact</li>
                    </div>
                    <div className="midBox2">
                        <div className="help">
                            <h2>Career Opportunities</h2>
                            <div className="footCont"font-size>

                                <p>Cake pudding lollipop pastry cupcake chocolate.
                                Gummi bears halvah sesame snaps</p>
                                <img src={icon} alt="" />
                            </div>
                            <button className="footBtn"> <b> Inquire More ►  </b> ;</button>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="lowerFoot">
                    <div className="lowerLeft">Copyright by Aslan Roy | All rights reserverd</div>
                    <div className="lowerRight">Our Privacy and Personal Data Protection Policy | Terms and Conditions of Use</div>
                </div>
            </div >
        </>

    )
}

export default Footer

