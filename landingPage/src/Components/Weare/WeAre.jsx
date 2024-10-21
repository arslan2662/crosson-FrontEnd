import React from 'react'
import "./WeAre.css"
import icon1 from "./weareImg/icon1.png"
import icon2 from "./weareImg/icon2.png"
import icon3 from "./weareImg/icon3.png"

function WeAre() {
    return (
        <div className="weAre">
            <div className="left" data-aos="fade-left">
                <h1 className='head'>HOW ARE WE</h1>
                < h2>Crosson is an international group dedicated to the food industry.<br></br> <span>Food Industry</span></h2>
                <p>Crosson has twenty years experience in food,quality,automation and software which has been established in food sector for Research,Efficiency and solutions products </p>
                <p>It was no long to discover that supported to knowledge by scientific prespective, would be a solution for real need of the sector </p>
                <div className="weAreBnts">
                    <button className="btn">About Us  ►</button>
                    <a href="">Quality Certificates</a>
                </div>
            </div>

            <div className="right">
                <div className="box" data-aos="fade-up">
                    <img src={icon1} alt="" />
                    <div className="boxCont">
                        <h3>Exported to 24 Countries</h3>
                        <p>169 companies in 24 countries use our machines</p>
                    </div>
                </div>
                <div className="box" data-aos="fade-up">
                    <img src={icon2} alt="" />
                    <div className="boxCont">
                        <h3>8 Billion Products Per Day</h3>
                        <p>8 billions products produced from out company daily</p>
                    </div>
                </div>
                <div className="box" data-aos="fade-up">
                    <img src={icon3} alt="" />
                    <div className="boxCont">
                        <h3>We touch 850 million people a day</h3>
                        <p>850 million people use our product</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WeAre