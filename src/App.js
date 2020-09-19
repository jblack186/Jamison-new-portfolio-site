import React from 'react';
import logo from './logo.svg';
import './App.css';
import DashBoard from './Dashboard';
import { Route, Switch, useLocation } from 'react-router-dom';
import FrontPage from './FrontPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
//    <script type="text/javascript" src="https://scriptonofficial.github.io/particle-js-background/particles.js"></script>
//    <script type="text/javascript" src="https://scriptonofficial.github.io/particle-js-background/app.js"></script>



  return (
    
    
    <div className="App">
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
      <Route exact path='/' render= {(props) => { return <FrontPage  {...props}  />}} />

      <Route exact path='/dashboard' render= {(props) => { return <DashBoard  {...props}  />}} />

      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
