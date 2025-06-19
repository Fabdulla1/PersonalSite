import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

const buttonNames = ['Me', 'About', 'Contact'];
const routes = ['/me', '/about', '/contact'];

function buttons() {
   return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {buttonNames.map((label, index) => (
        <Link to={routes[index]} key={index}>
          <button
            style={{
              backgroundColor: "blueviolet"
            }}
          >{label}</button>
        </Link>
      ))}
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header
        className="header"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', 
          padding: '10px',
        }}
      >
        <div>Farhan Abdulla</div>
        {buttons()}
      </header>
    </div>
  );
}

export default App;
