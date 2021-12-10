import React from 'react';
import './Banner.css'
import bannerImg from '../../hero.png';
import bannerBG from '../../bg-2.jpg';


const Banner = () => {
    const bgStyle = {
        backgroundImage: `url(${bannerBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "50px 0"
    }
    return (
        <div style={bgStyle} className='banner-content'>
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <div>
                <h2 className='banner-text'><span className='fw-bolder text-danger fs-1'>Start your</span><br />
                    online learning from today!</h2>
                    <h5 className='py-3'>Unlimited access to all instructors.</h5>
                    <button className='btn-regular'>Get Started</button>
            </div>
                </div>
                <div className="col-md-6">
                <div className='bannger-img'>
                <img src={bannerImg} alt="" />
            </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;