import React, {useState} from 'react';
import ScriptTag from 'react-script-tag';
import './FrontPage.css';
import { motion, AnimatePresence } from 'framer-motion';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const FrontPage = () => {
  const [hover, setHover] = useState(false);

  const variantsContainer = {
    hidden: {
      opacity: .3
    },
    visible: {
      opacity: 1,
      transition: {
        delay: .1, duration: 1
      }
    },
    exit: {
      opacity: .5

      
    }

  }

  const hovering = e => {
    setHover(true);
  }

  const notHovering = e => {
    setHover(false);
  }

  return (
    <motion.div
    variants={variantsContainer}
    initial='hidden'
    animate='visible'
    type='tween'
    exit='exit'
    >
      <ScriptTag type="text/javascript" src="https://scriptonofficial.github.io/particle-js-background/particles.js" />
      <ScriptTag type="text/javascript" src="https://scriptonofficial.github.io/particle-js-background/app.js" />

      <div id="particles-js"></div>
      <div className='home-content'>
        <h1>Hello, I'm <span class="name">Jamison Blackwell.</span> <p>I am a full-stack web developer.</p></h1>
        <Link style={{ textDecoration: 'none' }}  to='dashboard' ><motion.div 
      onMouseOver={hovering}
      onMouseLeave={notHovering}
      whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)", boxShadow: "0px 0px 8px rgb(255, 255, 255)"}}
      class="button-link">View my work </motion.div></Link>
    </div>

    </motion.div>
  )
}

export default FrontPage;