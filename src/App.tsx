import * as React from 'react';
import MainPage from './views/mainPage';
import MissionsPage from './views/Missions';
import GameCounter from './views/GameCounter'
import { Routes, Route } from 'react-router-dom';


function App() {
  return <div>
  <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/game" element={<GameCounter />} />
  </Routes>
  </div>
}


export default App;
