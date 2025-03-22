import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/art" component={Art} />
          <Route path="/cv" component={CV} />
          <Route path="/commission" component={Commission} />
          <Route path="/diary" component={Diary} />
          <Route path="/fund" component={Fund} />
          <Route path="/gestures" component={Gestures} />
          <Route path="/model" component={Model} />
          <Route path="/papeles" component={Papeles} />
          <Route path="/pieces" component={Pieces} />
          <Route path="/poser" component={Poser} />
          <Route path="/taboo" component={Taboo} />
          <Route path="/works" component={Works} />
        </Switch>
      </Box>
      <Footer />
    </Box>
  );
}

export default App; 