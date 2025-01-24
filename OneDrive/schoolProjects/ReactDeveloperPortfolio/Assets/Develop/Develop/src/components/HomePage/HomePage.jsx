import React from 'react';
import Project from './HomePage';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Welcome to My Portfolio</h2>
      {/* Add your projects or other content here */}
      <Project title="Project 1" description="Description of Project 1" />
      <Project title="Project 2" description="Description of Project 2" />
    </div>
  );
};

export default HomePage;

