import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">Robert di Scipio</div>
        <div className="links-container">
          <div className="links">About</div>
          <div className="links">Projects</div>
          <div className="links">Contact</div>
          <div className="links">Resume</div>
        </div>
      </div>
      <div className="greeting">
        <div>Hey there, I'm <span>Robert di Scipio</span></div>
        <div>I'm a Software Engineer</div>
      </div>
    </div>
  );
}

export default App;
