import React, { useState } from 'react';
import './App.css';
import DashBoard from './Dashboard';
import { Route, Switch, useLocation } from 'react-router-dom';
import FrontPage from './FrontPage';
import Blog from './Blog';
import { motion, AnimatePresence } from 'framer-motion';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import Contact from './Contact';


function App() {
  const location = useLocation();
  const [menu, setMenu] = useState('');
  const history = useHistory();

  const handleHistory = (e) => {
    history.push('/')
    window.location.reload();
  }

  const toWork = (e) => {
    history.push('/dashboard')
    window.location.reload();
  }

  const toBlog = (e) => {
    history.push('/blog')
    window.location.reload();
  }

  const toContact = (e) => {
    history.push('/contact')
    window.location.reload();
  }




  const clickMenu = e => {
    setMenu(true);
    
  }

  const closeMenu = e => {
    setMenu(false);
    console.log('up')
   }

   const variantsContainerFirst = {
    hidden: {
      opacity: 1
    },
    visible: {
      opacity: 1,
      transition: {
        delay: .1, duration: .1
      }
    },
    exit: {
      opacity: .8

      
    }

  }

  const variantsContainer = {
    hidden: {
      height: '2px', 
      width: '100%'
    },
    visible: {
      height: '2px', 
      width: '0%'
    },
    exit: {
      opacity: .8

      
    }

  }


  return (
    
    
    <div className="App">

      <AnimatePresence exitBeforeEnter>
      <motion.div
    variants={variantsContainer}
    className='motion-div-line'
    initial='hidden'
    animate='visible'
    transition={{ delay: .1, duration: .7, type: 'tween'}}
    ></motion.div>
    <motion.div
    className='motion-div'
    initial={{height: '100vh'}}
    animate={{height: '0vh'}}
    transition={{ delay: 1, duration: .8, type: 'tween'}}
    ></motion.div>

      <motion.div 
               className='barSpin'>
      
      {<FontAwesomeIcon onClick={clickMenu} className={menu ? 'drops-none': 'barsIcon'} icon={faBars}/> }
      
      {<FontAwesomeIcon  onClick={closeMenu} className={menu  ? 'closeIcon'  : 'barsIconA'} icon={faTimes}/> }

      </motion.div>

      <motion.div className={menu === false ? 'drop-closed' : menu ? 'drop-menu' : 'drops-none'}     
            transition={{ delay: 1.8, duration: .5}}
      >
        <ul>
         
            <li onClick={handleHistory}>
              about
           </li>
         
          <li onClick={toWork}>
            work
          </li>
          <li onClick={toBlog}>
            blog
          </li>
          <li onClick={toContact}>
            contact
          </li>

        </ul>
      </motion.div>
      <Switch location={location} key={location.key}>
      <Route exact path='/' render= {(props) => { return <FrontPage  {...props}  />}} />

      <Route exact path='/dashboard' render= {(props) => { return <DashBoard  {...props}  />}} />
      <Route exact path='/blog' render= {(props) => { return <Blog  {...props}  />}} />
      <Route exact path='/contact' render= {(props) => { return <Contact  {...props}  />}} />

      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
