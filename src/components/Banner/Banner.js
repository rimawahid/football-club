import React from 'react';
import { Jumbotron} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import './Banner.css'
import Team from '../Team/Team';
const Banner = () => {
    const [teams,setTeams] = useState([]);
    //console.log(teams);
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`
        fetch(url)
        .then(res => res.json())
        .then(data =>setTeams(data.teams))
    },[])
    return (
        <div >

            <Jumbotron fluid className="jumbotron">
                <h1>KFC DESSEL SPORT</h1>
            </Jumbotron>
            {/* <h1>Team:{teams.length}</h1> */}
            <div className="container banner">
                {
                     teams.map(team =><Team team={team}></Team>)
                }
            </div>
            
        </div>
    );
};

export default Banner;