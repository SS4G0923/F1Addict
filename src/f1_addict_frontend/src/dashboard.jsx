import DashboardBanner from './components/dashboardBanner';
import './dashboard.css';
import DashboardSidebar from './components/dashboardSidebar';

export default function Dashboard() {

    document.title = 'F1Addict - Dashboard';
    
    return(
        <>
            <DashboardBanner/>
            <div className="dashboardWrapper">
                <DashboardSidebar/>
            </div>
        </>
    )
}