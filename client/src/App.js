import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<div>Test 1</div>} />
      </Routes>
    </Router>
  );
}

export default App;
