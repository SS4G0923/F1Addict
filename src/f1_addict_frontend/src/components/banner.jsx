import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BannerDetail from './bannerDetail';
import axios from 'axios';
import { Link } from 'react-router-dom';
import F1_img from '../assets/images/F1.svg.png';
import './banner.css';

export default function Banner({isShowScheduleFromParent}) {
    
    let username = localStorage.getItem('username') ? localStorage.getItem('username').toUpperCase() : '';

    const [isShowSchedule, setIsShowSchedule] = useState(isShowScheduleFromParent);
    const [schedule, setSchedule] = useState([]);
    const [isShow] = useState(username.trim() !== '');

    const logout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    const getSchedule = async () => {
        const res = await axios.get("http://localhost:7070/schedule");
        setSchedule(res.data.data);
    }

    useEffect(() => {
        getSchedule();
    }, []);
    
    return(
        <>
            <div name="banner" className="banner">
                <div name="f1img">
                    <a href="/home"><img src={F1_img} className="f1img"/></a>
                </div>
                <div className="bannerContent">
                    <ul className="bannerlist"> 
                        <li><a href="#" target="_blank" className="scheduleTag" id="1" style={{color: 'white'}} onMouseOver={()=>setIsShowSchedule(true)}>Schedule</a></li>
                        <li><Link to="/drivers" target='_blank' id="2" className="driversTag" style={{color: 'white'}} onMouseOver={()=>setIsShowSchedule(false)}>Drivers</Link></li>
                        <li><Link to="/teams" target="_blank" id="3" className="constructorsTag" style={{color: 'white'}} onMouseOver={()=>setIsShowSchedule(false)}>Constructors</Link></li>
                        <li><Link to="/f1tv" target="_blank" style={{color: 'white'}} onMouseOver={()=>setIsShowSchedule(false)}>F1 TV</Link></li>
                    </ul>
                </div>
                {isShow ? (
                    <div name="user">
                        <button 
                            className="bannerButton" 
                            style={{
                                backgroundColor: 'white', 
                                color: 'red'
                            }}
                        >
                            {username}
                        </button>
                        <button className="bannerButton" onClick={()=>logout()}>Log out</button>
                    </div>
                ) : (
                    <div name="user">
                        <button className="bannerButton"><Link to="/login">Log in</Link></button>
                        <button className="bannerButton"><Link to="/register">Sign up</Link></button>   
                    </div>
                )}
            </div>
            <BannerDetail isShowSchedule={isShowSchedule} schedule={schedule}/>
        </>
    )
}

Banner.propTypes = {
    isShowScheduleFromParent: PropTypes.bool.isRequired,
  };