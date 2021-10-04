import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../nayeems-zone.png';
import bgImage from '../../bg-2.jpg';
import './Header.css'
import Banner from '../Banner/Banner';


const Header = () => {
    const bgStyle = {
        backgroundImage:`url(${bgImage})`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat'
    };
    const activeStyle ={
        fontWeight: "bold",
        color: "red"
      };

    return (
        <div style={bgStyle}>
            <div className='header-container'>
            <div>
             <img className="logo" src={logo} alt="" />
            </div>
            <div>
                <nav className='nav-menu'>
                    <ul>
                        <li><NavLink activeStyle={activeStyle} to="/home">Home</NavLink></li>
                        <li><NavLink activeStyle={activeStyle}  to="/courses">Courses</NavLink></li>
                        <li><NavLink activeStyle={activeStyle}  to="/mentors">Mentors</NavLink></li>
                        <li><NavLink activeStyle={activeStyle}  to="/about">About</NavLink></li>
                        <li><NavLink activeStyle={activeStyle}  to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Header;