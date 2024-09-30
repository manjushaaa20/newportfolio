import React from 'react';
import styled from 'styled-components';

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const ProjectCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: #007bff;
  }

  a {
    margin-top: 1rem;
    display: inline-block;
  }
`;

const Projects = () => {
  return (
    <ProjectGrid>
      <ProjectCard>
        <h3>Portfolio Website</h3>
        <p>A personal portfolio website built using HTML, CSS, and React.</p>
        <a href="#">View Project</a>
      </ProjectCard>
      <ProjectCard>
        <h3>ToDo List App</h3>
        <p>A simple ToDo list app created using Node.js and React.</p>
        <a href="#">View Project</a>
      </ProjectCard>
    </ProjectGrid>
  );
};

export default Projects;
