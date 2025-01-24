import React from 'react';
import './AboutMe.css';
import avatar from './avatar.jpg'; 

const AboutMe = () => {
  return (
    <div className="about-me">
        <img src={avatar} alt="Developer Avatar" className="avatar"/>
      <h2>About Me</h2>
      <p>
        Hello, I am Kwame! I'm excited and passionate  about web developement with a curious 
        mind set, a corky person that admires being apart of a collective that creates dynamic
        and user-friendly web applications.With a interest in computer science and a love for 
        problem-solving, I enjoy turning complex challenges into simple, beautiful, and intuitive
        designs. In my free time,I love exploring new technologies, reading, and skateboarding, 
        surfing, and teaching my kids new skills.
      </p>
    </div>
  );
};

export default AboutMe;
