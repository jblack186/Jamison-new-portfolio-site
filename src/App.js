import React from 'react';
import logo from './logo.svg';
import './App.css';
import DashBoard from './Dashboard';
import { Route } from 'react-router-dom';
import FrontPage from './FrontPage';

function App() {
//    <script type="text/javascript" src="https://scriptonofficial.github.io/particle-js-background/particles.js"></script>
//    <script type="text/javascript" src="https://scriptonofficial.github.io/particle-js-background/app.js"></script>



  return (
    
    
    <div className="App">
      <Route exact path='/' render= {(props) => { return <FrontPage  {...props}  />}} />

      <Route exact path='/dashboard' render= {(props) => { return <DashBoard  {...props}  />}} />


    </div>
  );
}

export default App;
