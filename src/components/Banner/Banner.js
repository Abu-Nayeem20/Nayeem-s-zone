import React from 'react';
import './Banner.css'
import bannerImg from '../../hero.png';


const Banner = () => {
    return (
        <div className='banner-content'>
            <div>
                <h2 className='banner-text'><span className='fw-bolder text-danger fs-1'>Start your</span><br />
                    online learning from today!</h2>
                    <h5 className='py-3'>Unlimited access to all instructors.</h5>
                    <button className='btn-regular'>Get Started</button>
            </div>
            <div className='bannger-img'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;