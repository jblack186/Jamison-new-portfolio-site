import React, {useState, useEffect} from 'react';
import './Dashboard.css';
import Rentlords from './img/rent-frame_generic_light.png';
import Revtown from './img/rev-frame_generic_light.png';
import Wowzers from './img/wow-frame_generic_light.png';
import Email from './img/rec-frame_generic_light.png';
import Receipt from './img/wow-rec-frame_generic_light.png';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [showAll, setShowAll] = useState(true);
  const [sql, setSql] = useState(true);
  const [mongo, setMongo] = useState(true);
  const [html, setHtml] = useState(true);
  const [front, setFront] = useState(true);
  const [back, setBack] = useState(true);
  const [react, setReact] = useState(true);
  const [node, setNode] = useState(true);


  

  const toggleSql = e => {
    setSql(true);
    setMongo(false);
    setShowAll(false)
    setHtml(false);
    setReact(false);
    setFront(false);
    setBack(false);
    setNode(false);
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

  }

  const toggleShowAll = e => {
    setMongo(true);
    setSql(true);
    setShowAll(true);
    setHtml(true);
    setReact(true);
    setFront(true);
    setBack(true);

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
  }

  const toggleReact = e => {
    setReact(true)
    setMongo(false);
    setSql(false);
    setShowAll(false)
    setHtml(false)
    setFront(false);
    setBack(false);

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

  }
  const toggleBack = e => {
    setBack(true);
    setReact(false);
    setMongo(false);
    setSql(false);
    setShowAll(false);
    setHtml(false);
    setFront(false);
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

  }


  return (
    <div className='dash-container'>
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
            <motion.li whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)"}} onClick={toggleShowAll}>Show All</motion.li>
            <motion.li whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)"}}onClick={toggleReact}>React</motion.li>
            <motion.li whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)"}} onClick={toggleMongo}>MongoDB</motion.li>
            <motion.li whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)"}} onClick={toggleSql}>SQLite3</motion.li>
            <motion.li whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)"}} onClick={toggleNode}>NodeJS</motion.li>
            <motion.li whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)"}} onClick={toggleHTML}>HTML5</motion.li>
            <motion.li whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)" }} onClick={toggleFront}>Front-end</motion.li>
            <motion.li whileHover={{  scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)"}} onClick={toggleBack}>Back-end</motion.li>

            <motion.li whileHover={{  scale: 1.1, textShadow: "0px 0px 8px rgb(255, 255, 255)"}} onClick={toggleBack}>WordPress</motion.li>

          </ul>
          <p className='filter'>Showing all projects. Use the filter to list them by skill or technology.</p>
        </motion.div>
          <motion.div className='project'
                   
                   initial={{y: 400  }}
                   animate={{y: 0 }}
                   transition={{ delay: 1.5, duration: .5}}
          >
            <div className={mongo || node || back === true ? 'project-item' : 'dont-show'}>
              <motion.img whileHover={{  scale: 1.1}} src={Rentlords} />
            </div>
            <div className={sql  || node || back === true ? 'project-item' : 'dont-show'}>
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

    </div>
  )
}

export default Dashboard;