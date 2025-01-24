import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link exact to="/" activeclassName="active">About Me</Link></li>
        <li><Link to="/portfolio" activeclassName="active">Portfolio</Link></li> 
        <li><Link to="/contact" activeclassName="active">Contact</Link></li> 
        <li><Link to="/resume" activeclassName="active">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
