import Home from './home';
import Drivers from './drivers';
import Teams from './teams';
import F1TV from './F1TV';
import Login from './login';
import Register from './register';
import Dashboard from './dashboard';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardDrivers from './dashboardDrivers';
import DashboardTeams from './dashboardTeams';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/f1tv" element={<F1TV />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/drivers" element={<DashboardDrivers />} />
        <Route path="/dashboard/teams" element={<DashboardTeams />} />
      </Routes>
    </Router>
  )
}

export default App
