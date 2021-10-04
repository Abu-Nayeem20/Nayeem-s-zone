import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../nayeems-zone.png';
import './Footer.css';


const Footer = () => {
    const activeStyle ={
        fontWeight: "bold",
        color: "red"
      };
    return (
        <div className='container pt-5'>
            <div className='row'>
            <div className='col-md-4 footer-left'>
                <img className='footer-img' src={logo} alt="" />
                <p>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
                <div className='d-flex justify-content-center'>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
                </div>
            </div>
            <div className='col-md-4 footer-middle'>
                <h2 className='text-dark fw-bold pb-3'>Pages</h2>
                <nav className='nav-menu'>
                    <ul className='d-block'>
                        <li><NavLink activeStyle={activeStyle} to="/home">Home</NavLink></li>
                        <li><NavLink activeStyle={activeStyle}  to="/courses">Courses</NavLink></li>
                        <li><NavLink activeStyle={activeStyle}  to="/mentors">Mentors</NavLink></li>
                        <li><NavLink activeStyle={activeStyle}  to="/about">About</NavLink></li>
                        <li><NavLink activeStyle={activeStyle}  to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className='col-md-4'>
                <h2 className='text-dark fw-bold pb-3'>Subscribe</h2>
                <div className='input-group'>
                    <input className='form-control' type="text" placeholder='Your email address' />
                    <Button variant='danger'><i className="fas fa-arrow-right"></i></Button>
                </div>
                <p className='py-3'>Get the latest news and updates right at your inbox.</p>
            </div>
        </div>
        <div className='mt-5 footer-bottom-text'>
            <p className='py-2'><i className="far fa-copyright"></i> 2022 Nayeem's Zone, All Rights Reserved. Design By Nayeem.</p>
        </div>
        </div>
    );
};

export default Footer;