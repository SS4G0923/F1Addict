import DashboardBanner from './components/dashboardBanner';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './dashboardDrivers.css';
import './dashboard.css';

const [drivers, setDrivers] = useState([]);

const getDrivers = async () => {
    const res = await axios.get('http://localhost:7070/driver/list');
    setDrivers(res.data.data);
}

useEffect(() => {
    getDrivers();
}, []);

export default function DashboardDrivers() {
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
                <div>
                    <ul>

                    </ul>
                </div>
            </div>
        </>
    )
}