import { useState, useEffect } from 'react';
import Banner from './components/banner';
import Footer from './components/footer';
import './drivers.css';
import axios from 'axios';

export default function Drivers(){

    const [drivers, setDrivers] = useState([]);
    const [isShowScheduleFromParent, setIsShowScheduleFromParent] = useState(false);

    const getDrivers = async () => {
        const res = await axios.get('http://localhost:7070/driver/list');
        setDrivers(res.data.data);
    }

    const baseURL = 'http://localhost:8080/F1AddictResource';
    document.title = 'F1Addict - Drivers';

    useEffect(() => {
        getDrivers();
    }, []);

    return(
        <>
            <Banner isShowScheduleFromParent={isShowScheduleFromParent}/>
            
            <div className="driversContent" onMouseOver={()=>setIsShowScheduleFromParent(false)}>
                <div className="driversContentWrapper">
                    <div className="drivers">F1 Drivers 2024</div>
                    <div className="info">Check out this season&apos;s official F1 line-up. Full breakdown of drivers, points and current positions. <br/>Follow your favourite F1 drivers on and off the track.</div>
                </div>
                <div className="driversWrapper">
                    {drivers.map((driver) => (
                        <div className={`${driver.standing <= 3 ? 'driverCard-top3' : 'driverCard-rest'}`} key={driver.id}>
                            <div className="driverCard-top">
                                <div className="driverStanding">
                                    <b>{ driver.standing }</b>
                                </div>
                                <div className="driverPoints">
                                    <p>{ driver.points }</p><p>PTS</p>
                                </div>
                            </div>
                            <div className="driverCard-mid">
                                <div className="driverName">
                                    { driver.firstName }<br/><b>{ driver.lastName }</b>
                                </div>
                                <div className="driverNation">
                                    <img src={`${baseURL}/images/countries/${driver.country}.avif`} alt={driver.country} />
                                </div>
                            </div>
                            <div className="driverCard-bottom">
                                <div className="cardBottomLeft">
                                    <div className="driverTeam">
                                        { driver.team }
                                    </div>
                                    <div className={`${driver.standing <= 3 ? 'driverNumber-top3' : 'driverNumber'}`}>
                                        <img src={`${baseURL}/images/drivers/no${driver.no}.avif`} alt={driver.no} />
                                    </div>
                                </div>
                                <div className="cardBottomRight">
                                    <div className={`${driver.standing <= 3 ? 'driverPic-top3' : 'driverPic'}`}>
                                        <img src={`${baseURL}/images/drivers/${driver.lastName.split(' ').join('').slice(0, 3).toLowerCase()}.avif`} alt={driver.lastName} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer/>
        </>
    )
}