import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';
import Resume from './components/Resume/Resume.jsx';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';

function Navigation() { 
  const location = useLocation();
  const [active, setActive] = useState('/'); 

  useEffect(() => { 
    setActive(location.pathname); 
  }, [location]); 

 // return ( 
    <nav>
      <ul>
        <li className={active === '/' ? 'active' : ''}>
          <Link to="/">About Me</Link> 
        </li> 
        <li className={active === '/portfolio' ? 'active' : ''}> 
          <Link to="/portfolio">Portfolio</Link> 
        </li>
        <li className={active === '/contact' ? 'active' : ''}> 
          <Link to="/contact">Contact</Link> 
        </li> 
        <li className={active === '/resume' ? 'active' : ''}> 
          <Link to="/resume">Resume</Link> 
        </li>
      </ul>
    </nav>
//  );
}

function App() { 
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState(''); 

  const validateEmail = (email) => { 
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    return re.test(String(email).toLowerCase());
  }; 
   
  const handleChange = (e) => { 
    const input = e.target.value; 
    setEmail(input);

    if (!validateEmail(input)) { 
      setMessage('Invalid email address.'); 
    } else { 
      setMessage(''); 
    }
  };

  return ( 
    <Router> 
      <Header /> 
      <Navigation />
      <main> 
        <Routes> 
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/resume" element={<Resume />} /> 
        </Routes> 
        <div> 
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" /> 
          </a> 
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a> 
        </div> 
        <h1>Vite + React</h1>
        <div className="card"> 
          <button onClick={() => setCount(count + 1)}>
            Count is {count}
          </button> 
          <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
        </div> 
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <div> 
          <input type="email" value={email} onChange={handleChange} placeholder="Enter your email" /> 
          {message && <p className="error-message">{message}</p>} 
        </div> 
        <section id="resumeSection">
          <a href="/path/to/resume.pdf" download>Download Resume</a> 
          <ul> 
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li> 
            <li>...</li>
          </ul> 
        </section> 
      </main> 
      <Footer />
    </Router> 
  ); 
}

export default App;
