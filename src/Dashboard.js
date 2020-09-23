import React, {useState, useEffect} from 'react';
import './Dashboard.css';
import Rentlords from './img/rent-frame_generic_light.png';
import Revtown from './img/rev-frame_generic_light.png';
import Wowzers from './img/wow-frame_generic_light.png';
import Email from './img/rec-frame_generic_light.png';
import Receipt from './img/wow-rec-frame_generic_light.png';
import { motion, AnimatePresence } from 'framer-motion';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faChevronLeft, faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import {faFacebookSquare, faGithubSquare, faLinkedin, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import {Button, Modal} from 'react-bootstrap';
import RentVid from './img/rent-recording.mov';
import Rev from './img/rev-rec.mov';
import Wow from './img/wow-rec.mov';
import Pups from './img/pups-pic.png';
import ReceiptPic from './img/receipt-pic.png';





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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [slide2, setSlide2] = useState(false)
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [slide3, setSlide3] = useState(false)
  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [slide4, setSlide4] = useState(false)
  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [slide5, setSlide5] = useState(false)
  const [show5, setShow5] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});

  }, [])



  const history = useHistory();

  const toHome = (e) => {
    e.preventDefault();
    history.push('/')
    window.location.reload();
  }
  
  const toBlog = (e) => {
    e.preventDefault();
    history.push('/blog')
    window.location.reload();
    
  }

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
    window.scrollTo({top: 0, behavior: 'smooth'});

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
    window.scrollTo({top: 0, behavior: 'smooth'});

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
    window.scrollTo({top: 0, behavior: 'smooth'});

  
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
    window.scrollTo({top: 0, behavior: 'smooth'});

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
    window.scrollTo({top: 0, behavior: 'smooth'});
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
    window.scrollTo({top: 0, behavior: 'smooth'});


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
    window.scrollTo({top: 0, behavior: 'smooth'});

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
    window.scrollTo({top: 0, behavior: 'smooth'});

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
    transition={{ delay: .1, duration: .1, type: 'tween'}}

    exit='exit'

    className='dash-container'>
            <div>
        <div className='faIcons-dash'>
          
        <a href='https://www.facebook.com/jamison.blackwell.3/'>{<FontAwesomeIcon className='list-icon-dash' icon={faFacebookSquare}/> }</a>
          
          
        <a href='https://twitter.com/JamisonBlackw10'>{<FontAwesomeIcon className='list-icon-dash' icon={faTwitterSquare}/> }</a>
          
          
        <a href='https://github.com/jblack186'>{<FontAwesomeIcon className='list-icon-dash' icon={faGithubSquare}/> }</a>
          
          
        <a href='https://www.linkedin.com/in/jamison-blackwell/'>{<FontAwesomeIcon className='list-icon-dash' icon={faLinkedin}/> }</a>
          

        </div>
      </div>

      <motion.div
      className='motion-div'
      initial={{height: '50vh'}}
      animate={{height: '0vh'}}
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
                   
                   initial={{y: 400 }}
                   animate={{y: 0 }}
                   transition={{ delay: 1.8, duration: .5}}
          >
            <div 
            className={mongo || node || back || react === true ? 'project-item' : 'dont-show'}>
              <motion.img 
               src={Rentlords} />
              <motion.div className='proj-hover' 
                                whileHover={{ opacity: 1}}
                                transition={{ delay: .2, duration: .5}}

              >              
              <div className='proj-list-buttons'>
              <ul>
                <li>React</li>
                <li>CSS3</li>
                <li>Node</li>
                <li>MongoDB</li>
                <li>Google Auth</li>
                <Button data-target="#myModal1" size='md' variant="info" onClick={handleShow}>
        CLICK HERE FOR MORE
      </Button>

              </ul>
            </div>

</motion.div>

      <Modal id="myModal1" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title id="myModal1" >Rentlords</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='moadal-para'>In this application, I used React on the frontend and Node on the backend. I used MongoDB to manage users and their issues. Google authentication was used for registering and logging in users. Landlords and tenants connect to discuss any issues with the property. Landlords can easily stay on top of problems and notify their tenants once they recieved the complaint and when it is completed.</p>
        <video autoPlay loop muted  className="video">
          <source src={RentVid} type="video/mp4" />
        </video>

        </Modal.Body>
        <Modal.Footer>
        <a href="https://floating-lake-21994.herokuapp.com/login"><button className="live">View Live Version</button></a>

          <Button  variant="secondary" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </Button>
        </Modal.Footer>
      </Modal>            
      
            </div>
            <div className={sql  || node || back || react === true ? 'project-item' : 'dont-show'}>
              <img src={Revtown} />
              <motion.div className='proj-hover' whileHover={{opacity: 1}}
              >              
              <div className='proj-list-buttons'>
              <ul>
                <li>React</li>
                <li>CSS3</li>
                <li>Sqlite3</li>
                <li>Node</li>
                <Button  size='md' variant="info" onClick={handleShow2}>
        CLICK HERE FOR MORE
      </Button>

              </ul>
            </div>
</motion.div>
<Modal show={show2} onHide={handleClose2} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>RevTown</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='moadal-para'>This eccommerce site was built with React on the front end and Node on the backend. I used an SQL database to manage the items in the store.</p>
        <video autoPlay loop muted className="video">
          <source src={Rev} type="video/mp4" />
        </video>

        </Modal.Body>
        <Modal.Footer>
        <a href="https://unruffled-mclean-d98c5a.netlify.app/"><button class="live">View Lives Version</button></a>

          <Button variant="secondary" onClick={handleClose2}>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </Button>
        </Modal.Footer>
      </Modal>            

            </div>
            <div className={ react === true ? 'project-item' : 'dont-show'}>
              <img src={Wowzers} />
              <motion.div className='proj-hover' whileHover={{opacity: 1}}
              >              
              <div className='proj-list-buttons'>
              <ul>
                <li>React</li>
                <li>CSS3</li>
                <li>Rest Api</li>
                <Button data-target="#myModal1" size='md' variant="info" onClick={handleShow3}>
        CLICK HERE FOR MORE
      </Button>

              </ul>
            </div>
</motion.div>
<Modal show={show3} onHide={handleClose3} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Wowzers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='moadal-para'>This site is still under construction. I am building it with React. I am using a 3rd party api to allow users to obtain recipes for their chosen diets.</p>
        <video autoPlay loop muted className="video"
        >
          <source src={Wow} type="video/mp4" />
        </video>

        </Modal.Body>
        <Modal.Footer>
        <a href="https://pedantic-swirles-0f5272.netlify.app/home/"><button class="live">View Live Version</button></a>

          <Button variant="secondary" onClick={handleClose3}>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </Button>
        </Modal.Footer>
      </Modal>            

            </div>
            <div className={html === true ? 'project-item' : 'dont-show'}>
              <img src={Email} />
              <motion.div className='proj-hover' whileHover={{opacity: 1}}
              >              
              <div className='proj-list-buttons'>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <Button data-target="#myModal1" size='md' variant="info" onClick={handleShow4}>
        CLICK HERE FOR MORE
      </Button>

              </ul>
            </div>
</motion.div>
<Modal show={show4} onHide={handleClose4} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>HTML Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='moadal-para'>An HTML email that I made that shows off a clean design.</p>
        
                         
      
          <img src={Pups} style={{width: '100%', height: '400px', objectFit: 'contain'}} />
       

        </Modal.Body>
        <Modal.Footer>
        

          <Button variant="secondary" onClick={handleClose4}>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </Button>
        </Modal.Footer>
      </Modal>            

            </div>
            <div className={html === true ? 'project-item' : 'dont-show'}>
              <img src={Receipt} />
              <motion.div className='proj-hover' whileHover={{opacity: 1}}
              >              
              <div className='proj-list-buttons'>
              <ul>
              <li>HTML5</li>
                <li>CSS3</li>
                <Button data-target="#myModal1" size='md' variant="info" onClick={handleShow5}>
        CLICK HERE FOR MORE
      </Button>

              </ul>
            </div>
</motion.div>
<Modal show={show5} onHide={handleClose5} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>HTML Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='moadal-para'>An HTML email receipt that I made that shows off a clean design.</p>
        
                         
      
          <img src={ReceiptPic} style={{width: '100%', height: '400px', objectFit: 'contain'}} />
       

        </Modal.Body>
        <Modal.Footer>
        

          <Button variant="secondary" onClick={handleClose5}>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </Button>
        </Modal.Footer>
      </Modal>            

            </div>


          </motion.div>
        </div>
        <motion.div
      className='motion-div-two'
      initial={{height: '50vh'}}
      animate={{height: '0vh'}}
      transition={{ delay: 1, duration: .8, type: 'tween'}}
      ></motion.div>
    <div onClick={toHome}>
    {<FontAwesomeIcon className='arrow-left' icon={faChevronLeft}/> }

    </div>
    <div onClick={toBlog}>
    {<FontAwesomeIcon className='arrow-right' icon={faChevronRight}/> }
    </div>
    </motion.div>
  )
}

export default Dashboard;