import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DashBoard from './Dashboard';
import { Route, Switch, useLocation } from 'react-router-dom';
import FrontPage from './FrontPage';
import { motion, AnimatePresence } from 'framer-motion';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';


function App() {
  const location = useLocation();
  const [menu, setMenu] = useState('');
  const history = useHistory();

  const handleHistory = (e) => {
    e.preventDefault();
    history.push('/')
    window.location.reload();
  }

  const toWork = (e) => {
    e.preventDefault();
    history.push('/dashboard')
    window.location.reload();
  }


  const clickMenu = e => {
    setMenu(true);
    
  }

  const closeMenu = e => {
    setMenu(false);
    console.log('up')
   }
console.log('menu',menu)
  return (
    
    
    <div className="App">

      <AnimatePresence exitBeforeEnter>
      <motion.div 
               className={menu ? 'barSpin' : null}>
      
      {<FontAwesomeIcon onClick={clickMenu} className={menu ? 'barsIconA': 'barsIcon'} icon={faBars}/> }
      
      {<FontAwesomeIcon  onClick={closeMenu} className={menu === true ? 'closeIcon'  : 'barsIconA'} icon={faTimes}/> }

      </motion.div>

      <motion.div className={menu === false ? 'drop-closed' : menu === true ? 'drop-menu' : 'drop-none'}     
            transition={{ delay: 1.8, duration: .5}}
      >
        <ul>
         
            <li onClick={handleHistory}>
              about
           </li>
         
          <li onClick={toWork}>
            work
          </li>
          <li>
            blog
          </li>
          <li>
            contact
          </li>

        </ul>
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
