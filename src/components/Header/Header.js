import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';
import {Link} from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap';
import Banner from '../Banner/Banner';
const Header = () => {
    return (
        <div className="header">
            <Navbar  variant="light">
                <img src={logo} alt=""/>
                <Nav className="menu">
                <Link className="menu-item" to="/">Home</Link>
                <Link className="menu-item" to="/about">About</Link>
                <Link className="menu-item" to="/contact">Contact</Link>
                </Nav>
            </Navbar>
            <Banner></Banner>
            
        </div>
    );
};

export default Header;