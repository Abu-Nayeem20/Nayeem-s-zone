import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../nayeems-zone.png';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
    const activeStyle ={
        fontWeight: "bold",
        color: "red"
      };

    return (
        <div>
            <div className="header-section">
            <Navbar collapseOnSelect expand="lg" className="nav-area" sticky="top">
            <Container>
            <Navbar.Brand className='logo-area'><Nav.Link as={NavLink} to="/home"><img className='img-fluid' src={logo} alt="Abu Nayeem's Logo" /></Nav.Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                <Nav className="menu-items">
                <Nav.Link activeStyle={activeStyle} as={NavLink} to="/home">Home</Nav.Link>
                <Nav.Link activeStyle={activeStyle} as={NavLink} to="/courses">Courses</Nav.Link>
                <Nav.Link activeStyle={activeStyle} as={NavLink} to="/mentors">Mentors</Nav.Link>
                <Nav.Link activeStyle={activeStyle} as={NavLink} to="/about">About</Nav.Link>
                <Nav.Link activeStyle={activeStyle} as={NavLink} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        </div>
    );
};

export default Header;