import React from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'
const Team = (props) => {
  
    const {strTeam,strTeamBadge,strSport,idTeam}= props.team;

    const history = useHistory();
    const showDetails = idTeam =>{
        const url = `team/${idTeam}`;
        history.push(url);
    }
    
    
    return (
        <div className="col-lg-4 col-md-3 col-sm-6 col-12">
            <div className="team"> 
                <img src={strTeamBadge} alt=""/>
                <h1>{strTeam}</h1>
                <p>Sports type:{strSport}</p>
                <button onClick={() =>showDetails(idTeam)}  className="btn  detail-btn">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>
    );
};

export default Team;