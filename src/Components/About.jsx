import React, { useState } from 'react';
import styled from 'styled-components';

// About section styling
const AboutSection = styled.section`
  background-color: #e6f7ff;
  padding: 4rem 2rem; /* Increase padding for better spacing */
  text-align: center;
  margin-bottom: 2rem; /* Add margin to space below this section */
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease; /* Smooth transition for the transformation */
  transform: ${({ clicked }) => (clicked ? 'scale(1.1)' : 'scale(1)')}; /* Scale effect */
  cursor: pointer; /* Pointer cursor to indicate clickable */
`;

const Info = styled.div`
  margin-top: 1.5rem;
  p {
    margin: 0.5rem 0;
  }
  h2 {
    margin-bottom: 1rem;
  }
`;

const Objective = styled.p`
  font-style: italic;
  margin-top: 1rem;
`;

const About = () => {
  const [clicked, setClicked] = useState(false); // State to manage click effect

  const handleClick = () => {
    setClicked(!clicked); // Toggle the clicked state
  };

  return (
    <AboutSection id="about">
      <ProfilePic 
        src="/ReactPort/port.JPG" 
        alt="Manjusha's Profile" 
        onClick={handleClick} // Add click handler
        clicked={clicked} // Pass clicked state to styled component
      />

      <Info>
        <h2>Manjusha</h2>
        <p>Email: <a href="mailto:Manjushaacharya919@gmail.com">Manjushaacharya919@gmail.com</a></p>
        <p>Phone: +91 9900498728</p>
        <p>College: Karnataka Polytechnic, Mangalore</p>
        <Objective>Seeking a job opportunity in software development.</Objective>
      </Info>
    </AboutSection>
  );
};

export default About;
