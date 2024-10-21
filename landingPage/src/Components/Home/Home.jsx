import React from 'react'
import "./Home.css"
import phoneIcon from "../Navbar/navbarImg/phoneIcon.png"

function Home() {
    return (
        <div className="home">
            <div className="left">
                <h2 data-aos="fade-up">We make Filling & Packaging Machines for <span>Food Industry</span></h2>
                <p data-aos="fade-left">With our flexible production capacity and high technology, we produce
                    customized solutions for your needs.</p>
                <div className="homeBtns" data-aos="fade-in">
                    <button className="btn">Our Products  ►</button>
                    <div className="btnRight">
                        <img src={phoneIcon} alt="" />
                        <div className="help">
                            <p>Sales Department</p>
                            <p>+92-300-0674899</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right"></div>
        </div>
    )
}

export default Home