import React, { useState, useEffect } from 'react';
import Navbar  from './assets/Components/Navbar';
import Aboutme from './assets/Components/Aboutme';
import Profile from './assets/Components/Profile';
import Projects from './assets/Components/Projects';
import Additional from './assets/Components/Additional';
import Technologies from './assets/Components/Technologies';
import Contact from './assets/Components/Contact';

import './App.css'



import { animate, motion, useViewportScroll, useTransform } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


import { Opacity, Scale } from '@mui/icons-material';
import { duration } from '@mui/material';

function App() {
 




  return (
    <>
        {/* Navbar */}
        <Navbar />
       {/* Profile */}
         <Profile />  
        
        {/* project */}
        <Projects  />
          {/* Additional-Technologies */}
          <Additional />
         
          {/*technologies  */}
         <Technologies />
         {/* About-me */}
          <Aboutme />
         {/* ContactMe */}
            <Contact />
         
         {/* On top */}
         
  
    </>
  );
}

export default App
