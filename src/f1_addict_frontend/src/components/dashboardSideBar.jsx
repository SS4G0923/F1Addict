import { Link } from 'react-router-dom';
import './dashboardSidebar.css';

export default function DashboardSidebar(){
    return(
        <div className="sidebar">
            <ul>
                <li><Link to="teams" style={{textDecoration: 'none', color: 'white'}}>Teams</Link></li>
                <li><Link to="drivers" style={{textDecoration: 'none', color: 'white'}}>Drivers</Link></li>
                <li><Link to="articles" style={{textDecoration: 'none', color: 'white'}}>Articles</Link></li>
            </ul>
        </div>
    )
}