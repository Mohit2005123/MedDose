import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import HealthStatsProject from './pages/HealthStatsProject';
import StatsResult from './pages/StatsResult';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/healthstatsproject" element={<HealthStatsProject />} />
        <Route path="/statsresult" element={<StatsResult />} />
      </Routes>
    </Router>
  );
}

export default App;

