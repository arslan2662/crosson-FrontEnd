import React from 'react'
import "./Journey.css"
import image1 from "./journeyImg/image1.png"
import image2 from "./journeyImg/image2.png"
import image3 from "./journeyImg/image3.png"

function Journey() {
    return (
        <div className="journey">
            <div className="upper" data-aos="fade-left">
                <h1 className='head'>WHAT WE DO</h1>
                <h2>A journey from <span>design to product</span></h2>
                <p>Starting from the planning of the product our customer wants; design, manufacturing,
                    software, mounting, installation & comissioning are made by us.</p>
            </div>

            <div className="lower">
                <div className="box" data-aos="slide-up">
                    <img src={image1} alt="" />
                    <h3>Product Design</h3>
                    <p>Creating innovative, user-friendly solutions with aesthetic appeal and functionality for optimal user experience.</p>
                    <button >Read More  ►</button>
                </div>
                <div className="box" data-aos="slide-up">
                    <img src={image2} alt="" />
                    <h3>Planning</h3>
                    <p>Structuring project timelines, resources, and tasks to ensure efficient development and implementation processes.</p>
                    <button >Read More  ►</button>
                </div>
                <div className="box" data-aos="slide-up">
                    <img src={image3} alt="" />
                    <h3>Installation</h3>
                    <p>Implementing and setting up products accurately to ensure proper operation and integration into existing systems.</p>
                    <button >Read More  ►</button>
                </div>
            </div>
        </div>
    )
}

export default Journey