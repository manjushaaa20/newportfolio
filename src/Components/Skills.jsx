import React from 'react';
import styled from 'styled-components';

// Styled components
const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Description = styled.p`
  max-width: 800px;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #333;
`;

const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Skill = styled.div`
  background-color: #007bff;
  color: white;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  width: 120px;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Skills = () => {
  // Array of skills
  const skills = ["HTML", "CSS", "Python", "Java", "Node.js", "React", "Spring Boot"];

  return (
    <SkillsSection>
      {/* Skills description */}
      <Description>
        I have a strong foundation in web development and programming languages. I am proficient in 
        <strong> HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> for creating dynamic 
        and responsive web interfaces. Additionally, I have hands-on experience with <strong>React</strong> 
        for building single-page applications, <strong>Node.js</strong> for server-side development, and 
        <strong>Spring Boot</strong> for backend development. My knowledge also extends to <strong>Python</strong> 
        for scripting and problem-solving, and I am continuously expanding my skills to stay up-to-date with 
        the latest technologies.
      </Description>
      
      {/* Skill boxes */}
      <SkillGrid>
        {skills.map((skill, index) => (
          <Skill key={index}>{skill}</Skill>
        ))}
      </SkillGrid>
    </SkillsSection>
  );
};

export default Skills;
