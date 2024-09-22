import DashboardBanner from './components/dashboardBanner';
import { Link } from 'react-router-dom';
import './dashboard.css';

export default function Dashboard() {
    return(
        <>
            <DashboardBanner/>
            <div className="dashboardWrapper">
                <div className="sidebar">
                    <ul>
                        <li><Link to="/teams" style={{textDecoration: 'none', color: 'white'}}>Teams</Link></li>
                        <li><Link to="/drivers" style={{textDecoration: 'none', color: 'white'}}>Drivers</Link></li>
                        <li><Link to="/articles" style={{textDecoration: 'none', color: 'white'}}>Articles</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}