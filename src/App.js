import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DashBoard from './Dashboard';
import { Route, Switch, useLocation } from 'react-router-dom';
import FrontPage from './FrontPage';
import { motion, AnimatePresence } from 'framer-motion';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  const location = useLocation();
  const [menu, setMenu] = useState(false);

  const clickMenu = e => {
    setMenu(true);
  }

  return (
    
    
    <div className="App">

      <AnimatePresence exitBeforeEnter>
      <motion.div onClick={clickMenu}
               className={menu ? 'barSpin' : null}
      
      >
      
      {<FontAwesomeIcon className='barsIcon' icon={faBars}/> }
      </motion.div>
      <Switch location={location} key={location.key}>
      <Route exact path='/' render= {(props) => { return <FrontPage  {...props}  />}} />

      <Route exact path='/dashboard' render= {(props) => { return <DashBoard  {...props}  />}} />

      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
