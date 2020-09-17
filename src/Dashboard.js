import React, {useState, useEffect} from 'react';
import './Dashboard.css';
import Rentlords from './img/rentlords screenshot.png';
import Revtown from './img/Revtown screenshot.png';
import Wowzers from './img/Wowzers screen shot.png';
import Email from './img/html-emails.png';
import Receipt from './img/receipt screenshot.png';

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
      <div className='dash-written-content'>
        <h2>web developer portfolio</h2>
        <p>From Web Components and UI/UX animations to React.JS, Redux, MongoDb, and Node.JS. Check out my latest web software development portfolio projects.</p>
      </div>
      <div className='button-container'>
        <ul className='list-container'>
          <li onClick={toggleShowAll}>Show All</li>
          <li onClick={toggleFront}>Front-end</li>
          <li onClick={toggleBack}>Back-end</li>
          <li onClick={toggleHTML}>HTML5</li>
          <li onClick={toggleMongo}>MongoDB</li>
          <li onClick={toggleSql}>SQLite3</li>
          <li onClick={toggleNode}>NodeJS</li>
          <li onClick={toggleReact}>React</li>
        </ul>
        <p>Showing all projects. Use the filter to list them by skill or technology.</p>
      </div>
        <div className='project'>
          <div className={mongo || node || back === true ? 'project-item' : 'dont-show'}>
            <img src={Rentlords} />
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


        </div>
    </div>
  )
}

export default Dashboard;