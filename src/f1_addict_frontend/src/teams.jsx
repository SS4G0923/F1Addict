import { useState, useEffect } from 'react';
import Banner from './components/banner';
import Footer from './components/footer';
import axios from 'axios';
import './teams.css';

export default function Teams(){

    const [isShowScheduleFromParent, setIsShowScheduleFromParent] = useState(false);

    const baseURL = 'http://localhost:8080/F1AddictResource';

    const idxOfSpace = (string) => {
        return string.indexOf(" ");
    }
    const getTeamLogoUrl = (teamName) => {
        teamName = teamName.split(' ').join('').toLowerCase();
        if(teamName === 'redbullracing')
            teamName = 'redbull';
        return baseURL + "/images/teams/" + teamName.toLowerCase() + ".avif";
    }
    const getTeamCarUrl = (teamName) => {
        teamName = teamName.split(' ').join('').toLowerCase();
        if(teamName === 'redbullracing')
            teamName = 'redbull';
        return baseURL +  "/images/cars/" + teamName.toLowerCase() + ".avif";
    }
    const getDriverPicUrl = (driverName) => {
        const idx = driverName.indexOf(" ");
        const name = driverName.slice(idx + 1, idx + 4);
        return baseURL + "/images/drivers/" + name.toLowerCase() + ".avif";
    }
    
    const [teams, setTeams] = useState([]);
    
    const getTeams = async () => {
        const res = await axios.get('http://localhost:7070/team/list');
        setTeams(res.data.data);
    }
    
    useEffect(() => {
        getTeams();
    }, []);
    
    document.title = 'F1Addict - Teams';

    return(
        <>
            <Banner isShowScheduleFromParent={isShowScheduleFromParent}/>

            <div className="teamsContent">
                <div className="teamsContentWrapper" onMouseOver={()=>setIsShowScheduleFromParent(false)}>
                    <div className="team_drivers">F1 Teams 2024</div>
                    <div className="info">Discover everything you need to know about this year&apos;s Formula 1 teams - drivers, podium <br/>finishes, points earned and championship titles.</div>
                </div>
                <div className="teamsWrapper">
                    {teams.map((team) => (
                        <>
                            <div className="teamCard">
                                <div className="teamCardTop">
                                    <div className="teamStanding">
                                        <b>{ team.standing }</b>
                                    </div>
                                    <div className="teamPoints">
                                        <p>{ team.points }</p><p>PTS</p>
                                    </div>
                                </div>
                                <div className="teamCardMid-1">
                                    <div className="teamName">
                                        <b>{ team.name }</b>
                                    </div>
                                    <div className="teamLogo">
                                        <img src={getTeamLogoUrl(team.name)} alt=""/>
                                    </div>
                                </div>
                                <div className="teamCardMid-2">
                                    <div className="teamDriver">
                                        <div className="team_driverName">
                                            { team.driver1.slice(0, idxOfSpace(team.driver1)) } <b>{ team.driver1.slice(idxOfSpace(team.driver1), 20) }</b>
                                        </div>
                                        <div className="team_driverPic">
                                            <img src={getDriverPicUrl(team.driver1)} alt=""/>
                                        </div>
                                    </div>
                                    <div className="teamDriver">
                                        <div className="team_driverName">
                                            { team.driver2.slice(0, idxOfSpace(team.driver2)) } <b>{ team.driver2.slice(idxOfSpace(team.driver2), 20) }</b>
                                        </div>
                                        <div className="team_driverPic">
                                            <img src={getDriverPicUrl(team.driver2)} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="teamCardMain">
                                    <div className="teamCar">
                                        <img src={getTeamCarUrl(team.name)} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}     
                </div>
            </div>

            <Footer/>
        </>
    )
}