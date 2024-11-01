import DashboardBanner from './components/dashboardBanner';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './dashboardDrivers.css';
import DashboardSidebar from './components/dashboardSidebar';


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


    const update_driver = async(no, points) => {
        const res = await axios.post('http://localhost:7070/driver/update', {no: no, points: points});
        if(res.data.code === 200){
            alert(res.data.msg);
            getDrivers();
        }
    }

    return(
        <>
            <DashboardBanner/>
            <div className="dashboardWrapper">
                <DashboardSidebar/>
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
                                    <div>
                                        <button onClick={()=>update_driver(driver.no, driver.points)}>Edit</button>
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