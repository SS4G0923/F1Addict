import { useState } from 'react';
import { Link } from 'react-router-dom';
import F1_img from '../assets/images/F1.svg.png';
import './dashboardBanner.css';

export default function DashboardBanner() {
    
    let username = localStorage.getItem('username') ? localStorage.getItem('username').toUpperCase() : '';

    const [isShow] = useState(username.trim() !== '');

    const logout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
    
    return(
        <>
            <div name="banner" className="banner">
                <div name="f1img">
                    <a href="/home"><img src={F1_img} className="f1img"/></a>
                </div>
                <div className="dashboardBannerContent">
                    <ul className="dashboardBannerList"> 
                        <li><p>Dashboard</p></li>
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
                        <button className="bannerButton"><Link to="/login" style={{color: 'white'}}>Log in</Link></button>
                        <button className="bannerButton"><Link to="/register" style={{color: 'white'}}>Sign up</Link></button>   
                    </div>
                )}
            </div>
        </>
    )
}