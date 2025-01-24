import React from 'react';
import Project from '../Project/Project';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project One',
      image: 'path/to/image1.jpg',
      deployedLink: 'https://deployedlink1.com',
      githubLink: 'https://github.com/username/project-one'
    },
    {
      title: 'Project Two',
      image: 'path/to/image2.jpg',
      deployedLink: 'https://deployedlink2.com',
      githubLink: 'https://github.com/username/project-two'
    },
    {
      title: 'Project Three',
      image: 'path/to/image3.jpg',
      deployedLink: 'https://deployedlink3.com',
      githubLink: 'https://github.com/username/project-three'
    },
    {
      title: 'Project Four',
      image: 'path/to/image4.jpg',
      deployedLink: 'https://deployedlink4.com',
      githubLink: 'https://github.com/username/project-four'
    },
    {
      title: 'Project Five',
      image: 'path/to/image5.jpg',
      deployedLink: 'https://deployedlink5.com',
      githubLink: 'https://github.com/username/project-five'
    },
    {
      title: 'Project Six',
      image: 'path/to/image6.jpg',
      deployedLink: 'https://deployedlink6.com',
      githubLink: 'https://github.com/username/project-six'
    }
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
