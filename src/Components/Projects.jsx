import React from 'react';
import styled from 'styled-components';

// Projects section styling
const ProjectsSection = styled.section`
  background-color: #e6f7ff;
  padding: 4rem 2rem; /* Add padding */
  text-align: center;
  margin-bottom: 2rem; /* Add margin below */
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
`;

const ProjectItem = styled.li`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  
  a {
    color: #007bff; /* Link color */
    text-decoration: none; /* Remove underline */
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3; /* Darker color on hover */
    }
  }
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <h2>Projects</h2>
      <p>Check out my project below:</p>
      <ProjectList>
        <ProjectItem>
          <h3>Kadri Manjunatheshwara Temple</h3>
          <p>A beautiful website showcasing the Kadri Manjunatheshwara Temple.</p>
          <a href="https://manjushaaa20.github.io/KadriManjunatheshwara/temple" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </ProjectItem>
        {/* Add more projects here if needed */}
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;
