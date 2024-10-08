import DashboardBanner from './components/dashboardBanner';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './dashboardDrivers.css';
import './dashboard.css';


export default function DashboardDrivers() {

    const [drivers, setDrivers] = useState([]);

    const getDrivers = async () => {
        const res = await axios.get('http://localhost:7070/driver/list');
        setDrivers(res.data.data);
    }

    const baseURL = 'http://localhost:8080/F1AddictResource';

    useEffect(() => {
        getDrivers();
    }, []);

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
                <div className="dashboardDriverWrapper">
                    <ul>
                        {
                            drivers.map((driver) => (
                                <li key={driver.id}>
                                    <div className='dashboardDriverItem'>
                                        <div className='dbDriverStanding'>
                                            <b>{ driver.standing }</b>
                                        </div>
                                        <div className='dbDriverPic'>
                                        <img src={`${baseURL}/images/drivers/${driver.lastName.split(' ').join('').slice(0, 3).toLowerCase()}.avif`} alt={driver.lastName} />
                                        </div>
                                        <div className='dbDriverName'>
                                            { driver.firstName } &nbsp;
                                            <b>{ driver.lastName }</b>
                                        </div>
                                        <div className='dbDriverNoPic'>
                                            <img src={`${baseURL}/images/drivers/no${driver.no}.avif`} alt={driver.no} />
                                        </div>
                                        <div className='dbDriverPoints'>
                                            { driver.points }
                                        </div>
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