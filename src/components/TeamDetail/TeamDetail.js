import React,{useEffect,useState} from 'react';
import { Jumbotron} from 'react-bootstrap';
import {useParams} from 'react-router';
import {Link} from "react-router-dom";
import logo from '../../images/logo.jpg';
import { Navbar,Nav } from 'react-bootstrap';
import MaleTeam from '../../images/male.png';
import FemaleTeam from '../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars,faFutbol,faFlag,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'
import './TeamDetails.css'

const TeamDetail = () => {
    const{idTeam} = useParams();
    const[team, setTeam] = useState({});
    const{strTeamBadge,strTeam,strGender,strCountry,strSport,intFormedYear,strStadiumDescription,strDescriptionEN,strTwitter,strYoutube,strFacebook} = team;
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[])
    return (
        <div>
            <div className="header">
            <Navbar  variant="light">
                <img src={logo} alt=""/>
                <Nav className="menu">
                <Link className="menu-item" to="/">Home</Link>
                <Link className="menu-item" to="/about">About</Link>
                </Nav>
            </Navbar>
            </div>
            <Jumbotron fluid className="team-detail">
                <img className="team-detail-logo" src={strTeamBadge} alt=""/>
                <h1>{strTeam}</h1>
            </Jumbotron>
        <div className="container">
            <div className="row align-items-center  bg py-3">
                <div className="col-md-6 align">
                    <h1>{strTeam}</h1>
                    <p><FontAwesomeIcon className="icon" icon={faMapMarkerAlt}/>Founded:{intFormedYear}</p>
                    <p><FontAwesomeIcon className="icon" icon={faFlag}/>Country:{strCountry}</p>
                    <p><FontAwesomeIcon className="icon" icon={faFutbol}/>Sport Type:{strSport}</p>
                    <p><FontAwesomeIcon className="icon" icon={faMars}/>Gender:{strGender}</p>
                </div>
                <div className="col-md-6">
                    {
                       strGender === "Male"?  <img src={MaleTeam} alt=""/> : <img src={FemaleTeam} alt=""/> 
                    }
                </div>
            </div>
            <div className="mt-3">
                <p>{strStadiumDescription}</p>
                <p>{strDescriptionEN}</p>
            </div>
            
        </div>
        <a href={strTwitter}><FontAwesomeIcon className="social-icon" icon={faTwitter}/></a>
        <a href={strFacebook}><FontAwesomeIcon className="social-icon" icon={faFacebook}/></a>
        <a href={strYoutube}><FontAwesomeIcon className="social-icon" icon={faYoutube}/></a>
        </div>
    );
};

export default TeamDetail;