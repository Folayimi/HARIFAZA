import React from 'react';
import {BrowserRouter as Routes, Route, Router} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import LandingPage from "./Components/LandingPage/LandingPage"
function App() {
  return (
    <>
      <Router>        
        <Routes>
          <Route path="/navbar" element={<Navbar/>} />
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
