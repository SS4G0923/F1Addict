import Home from './home';
import Drivers from './drivers';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/drivers" element={<Drivers />} />
      </Routes>
    </Router>
  )
}

export default App
