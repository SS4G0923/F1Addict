import axios from "axios";
import { useState, useEffect } from "react";
import './scheduleDetail.css';

export default function ScheduleDetail() {

    const [schedule, setSchedule] = useState([]);

    const baseURl = 'http://localhost:8080/F1AddictResource';

    const getSchedule = async () => {
        const res = await axios.get("http://localhost:7070/schedule");
        setSchedule(res.data.data);
    }

    useEffect(() => {
        getSchedule();
    }, []);

    return(
        <>
            <div className="scheduleDetail">
                <div className="scheduleHeader">
                    <h2><a href="https://www.formula1.com/en/racing/2024.html" style={{color: 'white'}}>Full Schedule</a></h2>
                    <h2><a href="https://www.formula1.com/en/racing/2024/2025.html" style={{color: 'white'}}>2025</a></h2>
                </div>
                <div className="scheduleList">
                    <ul>
                        {
                            schedule.map((item, index) => (
                                <li key={index}>
                                    <div>
                                        <h3>{item.description}</h3>
                                        <img src={`${baseURl}/images/${item.raceCountry}GP.avif`} alt={`${item.raceCountry} GP`}/>
                                        <div className="scheduleTitleBox">
                                            <h5><a href="#" style={{color: 'white'}}>{item.raceName}</a></h5>
                                            <div className="date">
                                                <p>{item.date}</p>
                                            </div>
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