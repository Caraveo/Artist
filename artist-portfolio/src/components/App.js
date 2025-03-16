import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Art from '../pages/Art';
import CV from '../pages/CV';
import Commission from '../pages/Commission';
import Diary from '../pages/Diary';
import Fund from '../pages/Fund';
import Model from '../pages/Model';
import Papeles from '../pages/Papeles';
import Pieces from '../pages/Pieces';
import Poser from '../pages/Poser';
import Taboo from '../pages/Taboo';
import Works from '../pages/Works';
import Gestures from '../pages/Gestures';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/art" element={<Art />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/commission" element={<Commission />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/fund" element={<Fund />} />
          <Route path="/gestures" element={<Gestures />} />
          <Route path="/model" element={<Model />} />
          <Route path="/papeles" element={<Papeles />} />
          <Route path="/pieces" element={<Pieces />} />
          <Route path="/poser" element={<Poser />} />
          <Route path="/taboo" element={<Taboo />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App; 