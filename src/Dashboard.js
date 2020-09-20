import React, {useState, useEffect} from 'react';
import './Dashboard.css';
import Rentlords from './img/rent-frame_generic_light.png';
import Revtown from './img/rev-frame_generic_light.png';
import Wowzers from './img/wow-frame_generic_light.png';
import Email from './img/rec-frame_generic_light.png';
import Receipt from './img/wow-rec-frame_generic_light.png';
import { motion, AnimatePresence } from 'framer-motion';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {faFacebookSquare, faGithubSquare, faLinkedin, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';


const Dashboard = () => {
  const [showAll, setShowAll] = useState(true);
  const [sql, setSql] = useState(true);
  const [mongo, setMongo] = useState(true);
  const [html, setHtml] = useState(true);
  const [front, setFront] = useState(true);
  const [back, setBack] = useState(true);
  const [react, setReact] = useState(true);
  const [node, setNode] = useState(true);
  const [slide, setSlide] = useState(false)


  const toggleSql = e => {
    setSql(true);
    setMongo(false);
    setShowAll(false)
    setHtml(false);
    setReact(false);
    setFront(false);
    setBack(false);
    setNode(false);
    setSlide(true)
    setTimeout(() => {
     setSlide(false);
    }, 1500);

  }

  const toggleMongo = e => {
    setMongo(true);
    setSql(false);
    setShowAll(false);
    setHtml(false)
    setReact(false);
    setFront(false);
    setBack(false);
    setNode(false);
    setSlide(true)
    setTimeout(() => {
     setSlide(false);
    }, 1500);

  }

  const toggleShowAll = e => {
    setMongo(true);
    setSql(true);
    setShowAll(true);
    setHtml(true);
    setReact(true);
    setFront(true);
    setBack(true);
    setSlide(true)
    setTimeout(() => {
     setSlide(false);
    }, 1500);
    
  
  }

  const toggleHTML = e => {
    setHtml(true);
    setMongo(false);
    setSql(false);
    setShowAll(false);
    setReact(false);
    setFront(false);
    setBack(false);
    setNode(false);
    setSlide(true)
    setTimeout(() => {
     setSlide(false);
    }, 1500);

  }

  const toggleReact = e => {
    setReact(true)
    setMongo(false);
    setSql(false);
    setShowAll(false)
    setHtml(false)
    setFront(false);
    setBack(false);
    setSlide(true)
    setTimeout(() => {
     setSlide(false);
    }, 1500);

  }

  const toggleFront = e => {
    setFront(true);
    setReact(true);
    setMongo(true);
    setSql(true);
    setShowAll(true);
    setHtml(true);
    setReact(true);
    setBack(true);
    setSlide(true)
    setTimeout(() => {
     setSlide(false);
    }, 1500);


  }
  const toggleBack = e => {
    setBack(true);
    setReact(false);
    setMongo(false);
    setSql(false);
    setShowAll(false);
    setHtml(false);
    setFront(false);
    setSlide(true)
    setTimeout(() => {
     setSlide(false);
    }, 1500);

  }

  const toggleNode = e => {
    setBack(false);
    setReact(false);
    setMongo(false);
    setSql(false);
    setShowAll(false);
    setHtml(false);
    setFront(false);
    setNode(true);
    setSlide(true)
    setTimeout(() => {
     setSlide(false);
    }, 1500);

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




  return (
    <motion.div 
    variants={variantsContainerFirst}
    initial='hidden'
    animate='visible'
    transition={{ delay: .1, duration: .7, type: 'tween'}}

    exit='exit'

    className='dash-container'>
            <div>
        <div className='faIcons-dash'>
          
          {<FontAwesomeIcon className='list-icon-dash' icon={faFacebookSquare}/> }
          
          
          {<FontAwesomeIcon className='list-icon-dash' icon={faTwitterSquare}/> }
          
          
          {<FontAwesomeIcon className='list-icon-dash' icon={faGithubSquare}/> }
          
          
          {<FontAwesomeIcon className='list-icon-dash' icon={faLinkedin}/> }
          

        </div>
      </div>

      <motion.div
      variants={variantsContainer}
      className='motion-div-line'
      initial='hidden'
      animate='visible'
      transition={{ delay: .1, duration: .7, type: 'tween'}}
      ></motion.div>
      <motion.div
      className='motion-div'
      initial={{height: '50vw'}}
      animate={{height: '0vw'}}
      transition={{ delay: 1, duration: .8, type: 'tween'}}
      ></motion.div>
      <div className='dash'>
        <div className='dash-written-content'>
          <motion.h2 
            transition={{ delay: 1.5, duration: .8, type: 'tween'}}    
            initial={{y: -250}}
            animate={{y: 0}}
            exit='exit'
         

          >web developer portfoio</motion.h2>
          <motion.p 
          transition={{ delay: 1.5, duration: .8, type: 'tween'}}    
          initial={{x: -1250}}
          animate={{x: 0}}>From Web Components and UI/UX animations to React.JS, Redux, MongoDb, and Node.JS. Check out my latest web software development portfolio projects.</motion.p>
        </div>
        <motion.div
         className='motion-div'
         initial={{opacity: 0  }}
         animate={{opacity: 1 }}
         transition={{ delay: 1.5, duration: 1, type: 'tween'}}
         
        className='button-container'>
          <ul className='list-container'>
            <motion.li whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)", transition: {yoyo: 10}}} onClick={toggleShowAll}>Show All</motion.li>
            <motion.li whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)", transition: {yoyo: 10}}}onClick={toggleReact}>React</motion.li>
            <motion.li whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)", transition: {yoyo: 10}}} onClick={toggleMongo}>MongoDB</motion.li>
            <motion.li whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)", transition: {yoyo: 10}}} onClick={toggleSql}>SQLite3</motion.li>
            <motion.li whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)", transition: {yoyo: 10}}} onClick={toggleNode}>NodeJS</motion.li>
            <motion.li whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)", transition: {yoyo: 10}}} onClick={toggleHTML}>HTML5</motion.li>
            <motion.li whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)", transition: {yoyo: 10} }} onClick={toggleFront}>Front-end</motion.li>
            <motion.li whileHover={{  scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)", transition: {yoyo: 10}}} onClick={toggleBack}>Back-end</motion.li>

            <motion.li whileHover={{  scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)", transition: {yoyo: 10}}} onClick={toggleBack}>WordPress</motion.li>

          </ul>
          <p className='filter'>Showing all projects. Use the filter to list them by skill or technology.</p>
        </motion.div>
        <div className={slide ? 'slide-container' : 'dont-show'}>
        <div className={slide ? 'slide-bar' : 'dont-show'}></div>
        <p className='slide-filter'>Filtering ...</p>
        <div className={slide ? 'slide-bar-bott' : 'dont-show'}></div>
        </div>

          <motion.div className='project'
                   
                   initial={{y: 400  }}
                   animate={{y: 0 }}
                   transition={{ delay: 1.8, duration: .5}}
          >
            <motion.div 
            initial={{y: 400  }}
            animate={{y: 0 }}
            transition={{ delay: 1.8, duration: .5}}
            className={mongo || node || back || react === true ? 'project-item' : 'dont-show'}>
              <motion.img 
              whileHover={{  scale: 1.1}} src={Rentlords} />
            </motion.div>
            <div className={sql  || node || back || react === true ? 'project-item' : 'dont-show'}>
              <img src={Revtown} />
            </div>
            <div className={ react === true ? 'project-item' : 'dont-show'}>
              <img src={Wowzers} />
            </div>
            <div className={html === true ? 'project-item' : 'dont-show'}>
              <img src={Email} />
            </div>
            <div className={html === true ? 'project-item' : 'dont-show'}>
              <img src={Receipt} />
            </div>


          </motion.div>
        </div>
        <motion.div
      className='motion-div-two'
      initial={{height: '50vw'}}
      animate={{height: '0vw'}}
      transition={{ delay: 1, duration: .8, type: 'tween'}}
      ></motion.div>
    <Link style={{ textDecoration: 'none' }}  to='/' > <div >
    {<FontAwesomeIcon className='arrow-left' icon={faChevronLeft}/> }
    </div></Link>

    </motion.div>
  )
}

export default Dashboard;