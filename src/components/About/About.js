import React from 'react';
import img from '../../about.jpg'

const About = () => {
    return (
        <div className='container'>
            <h2 className='pt-5 fw-bold fs-2 text-dark'>Our History</h2>
            <p>Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty <br /> with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>
            <img className='rounded py-5' src={img} alt="" />
            <p>"Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well.Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well."</p>

            <div className='download-area mb-5'>
                <h2><span className='text-warning'>Start Learning</span> <br/> by Downloding App.</h2>
                <div>
                <button><i className="fab fa-apple"></i> Apple Store</button>
                <button><i className="fab fa-google-play"></i> Play Store</button>
                </div>
            </div>
        </div>
    );
};

export default About;