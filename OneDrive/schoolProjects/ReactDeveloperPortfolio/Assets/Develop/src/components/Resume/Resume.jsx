
import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <header />
      <section className="resume-section">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Fullstack web developer in training</h3>
          <p>Jan 2020 - Present</p>
          <ul>
            <li>Developed and maintained web applications using React.js and Redux.</li>
            <li>Collaborated with the design team to create user-friendly interfaces.</li>
            <li>Implemented responsive design and optimized performance.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Web Developer Interest</h3>
          <p>Programs:</p>
          <ul>
            <li>Design and developed websites for various clients using HTML, CSS, and JavaScript.</li>
            <li>React, Node.js, Typescript</li>
            <li></li>
          </ul>
        </div>
      </section>
      <section className="resume-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>2024</h3>
          <p>University of Irvine College</p>
        </div>
      </section>
      <section className="resume-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React.js</li>
          <li></li>
          
          <li>HTML & CSS</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
