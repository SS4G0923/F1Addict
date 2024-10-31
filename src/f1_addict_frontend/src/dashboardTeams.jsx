import DashboardBanner from './components/dashboardBanner';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './dashboardTeams.css';
import './dashboard.css';


export default function DashboardTeams() {

    const [teams, setTeams] = useState([]);

    const getTeams = async () => {
        const res = await axios.get('http://localhost:7070/team/list');
        setTeams(res.data.data);
    }

    const getTeamLogoUrl = (teamName) => {
        teamName = teamName.split(' ').join('').toLowerCase();
        if(teamName === 'redbullracing')
            teamName = 'redbull';
        return baseURL + "/images/teams/" + teamName.toLowerCase() + ".avif";
    }

    const baseURL = 'http://localhost:8080/F1AddictResource';

    useEffect(() => {
        getTeams();
    }, []);


    const update_team = async(name, points) => {
        const res = await axios.post('http://localhost:7070/team/update', {name: name, points: points});
        if(res.data.code === 200){
            alert(res.data.data);
            getTeams();
        }
    }

    return(
        <>
            <DashboardBanner/>
            <div className="dashboardWrapper">
                <div className="sidebar">
                    <ul>
                        <li><Link to="teams" style={{textDecoration: 'none', color: 'white'}}>Teams</Link></li>
                        <li><Link to="drivers" style={{textDecoration: 'none', color: 'white'}}>Drivers</Link></li>
                        <li><Link to="articles" style={{textDecoration: 'none', color: 'white'}}>Articles</Link></li>
                    </ul>
                </div>
                <div className="dashboardTeamWrapper">
                    <ul>
                        {
                            teams.map((team) => (
                                
                                <li key={team.id}>
                                    <div className='dashboardTeamItem'>
                                        <div className='dbTeamStanding'>
                                            <b>{ team.standing }</b>
                                        </div>
                                        <div className='dbTeamPic'>
                                            <img src={getTeamLogoUrl(team.name)} alt=""/>
                                        </div>
                                        <div className='dbTeamName'>
                                            {team.name}
                                        </div>
                                        <div className='dbTeamPoints'>
                                            { team.points }
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={()=>update_team(team.name, team.points)}>Edit</button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}