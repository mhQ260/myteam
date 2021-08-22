import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.scss';
import { Navigation, Content, Aside } from './components'; 


function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Aside />
        <Content />
      </Router>
    </div>
  );
}

export default App;
