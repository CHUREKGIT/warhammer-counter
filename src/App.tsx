import * as React from 'react';
import MainPage from './views/MainPage';
import MissionsPage from './views/Missions';
import GameCounter from './views/GameCounter'
import { Routes, Route } from 'react-router-dom';
import SignUp from './views/auth/SignUp';
import { AuthProvider } from './views/context/AuthContext';
import Login from './views/auth/Login';
import Dashboard from './views/Dashboard';
import PrivateRoute from './views/PrivateRoute';
import ForgotPassowrd from './views/auth/ForgotPassowrd';

function App() {
  return (
      <AuthProvider>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassowrd />} />
            <Route path = "/dashboard" element={<PrivateRoute /> }>
              <Route path = "/dashboard" element={<Dashboard />}/>
            </Route>
            <Route path="/missions" element={<MissionsPage />} />
            <Route path="/game" element={<GameCounter />} />
        </Routes>
      </AuthProvider>
     )
}


export default App;
