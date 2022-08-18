import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar"
import LandingPage from "./Components/LandingPage/LandingPage"
import './index.css'
function App() {
  const [active,setActive] = useState(0)
  const [mobile,setMobile] = useState(false)
  const [size,setSize] = useState(window.innerWidth)
  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setSize(window.innerWidth)
    })
    window.removeEventListener('resize', ()=>{
      setSize(window.innerWidth)
    })
    if (size>675){
      setMobile(false)
    }
    else if(size<=675){
      setMobile(true)
    }
  },[size])  
  return (
    <>
      <Router>        
        <Routes>
          <Route path="/navbar" element={
            <Navbar 
              active={active} 
              setActive={setActive}
              mobile={mobile}
            />
          } />
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
