import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { Aside, Content } from './components'; 

function App() {
  return (
    <div className="app">
      <Router>
        <Aside />
        <Content />
      </Router>
    </div>
  );
}

export default App;
