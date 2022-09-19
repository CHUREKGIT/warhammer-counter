import * as React from 'react';
import MainPage from './views/mainPage';
import MissionsPage from './views/Missions';
import { Routes, Route } from 'react-router-dom';


function App() {
  return <div>
  <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/missions" element={<MissionsPage />} />
  </Routes>
  </div>
}


export default App;
