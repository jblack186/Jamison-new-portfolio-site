import React, { useState, useEffect } from "react";
import "./App.css";
import DashBoard from "./Dashboard";
import { Route, Switch, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";
import Hero from "./Hero";
import Header from "./Header";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

function App() {
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const history = useHistory();

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
