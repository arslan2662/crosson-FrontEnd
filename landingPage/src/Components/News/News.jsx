import React from 'react'
import "./News.css"
import image1 from "./newsImg/image1.png"
import image2 from "./newsImg/image2.png"

function News() {
    return (
        <div className="news" data-aos="zoom-in">
            <div className="upper">
                <h2>News from <span>Crosson</span></h2>
                <p>Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah sesame snaps
                    chocolate cake gummies sugar plum cotton candy cupcake sweet</p>
            </div>

            <div className="lower">
                <div className="box">
                    <img src={image1} alt="" />
                    <div className="boxCont">

                        <h3>Crosson Holding’s 58th
                            ordinary general assembly
                            convened
                        </h3>
                        <p>Creating innovative, user-friendly solutions with aesthetic appeal and functionality for optimal user experience.</p>
                        <button >Read More  ►</button>
                    </div>
                </div>
                <div className="box">
                    <img src={image2} alt="" />
                    <div className="boxCont">
                        <h3>Crosson Holding’s new
                            Board of Directors has been
                            determined.
                        </h3>
                        <p>Creating innovative, user-friendly solutions with aesthetic appeal and functionality for optimal user experience.</p>
                        <button >Read More  ►</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News