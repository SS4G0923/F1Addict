import { useState } from 'react';
import BannerDetail from './bannerDetail';
import './banner.css';
import F1_img from '../assets/images/F1.svg.png';


export default function Banner() {
    
    let username = localStorage.getItem('username') ? localStorage.getItem('username').toUpperCase() : '';

    const [isShowSchedule, setIsShowSchedule] = useState(false);
    const [isShow] = useState(username.trim() !== '');
    
    
    return(
        <>
            <div name="banner" className="banner">
                <div name="f1img">
                    <a href="/home"><img src={F1_img} className="f1img"/></a>
                </div>
                <div className="bannerContent">
                    <ul className="bannerlist"> 
                        <li><a href="#" target="_blank" className="scheduleTag" id="1" style={{color: 'white'}} onMouseOver={()=>setIsShowSchedule(true)}>Schedule</a></li>
                        <li><a href="/drivers" target="_blank" id="2" className="driversTag" style={{color: 'white'}} onMouseOver={()=>setIsShowSchedule(false)}>Drivers</a></li>
                        <li><a href="/teams" target="_blank" id="3" className="constructorsTag" style={{color: 'white'}} onMouseOver={()=>setIsShowSchedule(false)}>Constructors</a></li>
                        <li><a href="/f1tv" target="_blank" style={{color: 'white'}} onMouseOver={()=>setIsShowSchedule(false)}>F1 TV</a></li>
                    </ul>
                </div>
                {isShow ? (
                    <div name="user">
                        <button 
                            className="bannerButton" 
                            style={{
                                backgroundColor: 'white', 
                                color: 'red', 
                                fontSize: 'small', 
                                fontWeight: 300, 
                                marginRight: '10px', 
                                padding: '0px 5px 0px 5px', 
                                width: '90%'
                            }}
                        >
                            {username}
                        </button>
                        <button className="bannerButton">Log out</button>
                    </div>
                ) : (
                    <div name="user">
                        <button className="bannerButton">Log in</button>
                        <button className="bannerButton">Sign up</button>   
                    </div>
                )}
            </div>
            <BannerDetail isShowSchedule={isShowSchedule}/>
        </>
    )
}