import React from "react";
import "./App.css";
import Hero from "./Hero";
import Header from "./Header";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

function App() {

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
