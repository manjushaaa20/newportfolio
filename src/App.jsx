import React from 'react';
import styled from 'styled-components';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactMe from './Components/Contact';

// Container for the overall layout
const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f0f8ff;
  color: #001f3f;
  padding-bottom: 50px; /* Add padding at the bottom */
`;

// Navigation bar
const Nav = styled.nav`
  background-color: #001f3f;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.5rem;
  }
  a:hover {
    text-decoration: underline;
  }
`;

function App() {
  return (
    <AppContainer>
      <Nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
      </Nav>
      <About />
      <Skills />
      <Projects />
      <ContactMe />
    </AppContainer>
  );
}

export default App;
