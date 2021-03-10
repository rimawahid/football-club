import React from 'react';
import logo from '../../images/logo.jpg';
import {Link} from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap';
import { Jumbotron} from 'react-bootstrap';

const About = () => {
    return (
        <div  className="header">
             <Navbar  variant="light">
                <img src={logo} alt=""/>
                <Nav className="menu">
                <Link className="menu-item" to="/">Home</Link>
                <Link className="menu-item" to="/about">About</Link>
                </Nav>
            </Navbar>
            <Jumbotron fluid className="jumbotron">
                <h1>BLACKLEY TOWN </h1>
            </Jumbotron>
        </div>
    );
};

export default About;