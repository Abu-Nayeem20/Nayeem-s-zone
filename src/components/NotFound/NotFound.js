import React from 'react';
import { NavLink } from 'react-router-dom';
import errorImg from '../../error.png'

const NotFound = () => {
    return (
        <div className='py-5'>
            <img src={errorImg} alt="" />
            <div className='py-5'>
            <h5>You've found a page that doesn't exist!!!</h5>
            <p>You can back to home by click below...</p>
            <NavLink to='/home'>Back To Home</NavLink>
            </div>
        </div>
    );
};

export default NotFound;