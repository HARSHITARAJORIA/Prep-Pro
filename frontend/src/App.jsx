import { useState } from 'react'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import './App.css'

import LandingPage from './pages/LandingPage';
import { AuthProvider } from './contexts/AuthContext';
import Authentication from './pages/Authentication';
import VideoMeet from './pages/VideoMeet';
function App() {
  

  return (
    <div className='App'>
    <Router>
      <AuthProvider >
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/auth' element={<Authentication />}></Route>
        <Route path='/:url' element={<VideoMeet />}></Route>
      </Routes>
      </AuthProvider>
    </Router>
    </div>
    
  );
}

export default App
