import React from 'react';
import ScriptTag from 'react-script-tag';
import './FrontPage.css';

const FrontPage = () => {
  return (
    <>
      <ScriptTag type="text/javascript" src="https://scriptonofficial.github.io/particle-js-background/particles.js" />
      <ScriptTag type="text/javascript" src="https://scriptonofficial.github.io/particle-js-background/app.js" />

      <div id="particles-js"></div>
      <div class='home-content'>
        <h1>Hello, I'm <span class="name">Jamison Blackwell.</span> <p>I am a full-stack web developer.</p></h1>
      <div class="button-link">View my work</div>
    </div>

    </>
  )
}

export default FrontPage;