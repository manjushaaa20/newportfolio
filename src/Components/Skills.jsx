import React from 'react';
import styled from 'styled-components';

// Skills section styling
const SkillsSection = styled.section`
  background-color: #001f3f; /* Deep navy blue */
  color: #f0f8ff; /* Light blue text for readability */
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #00aced; /* Lighter blue to make the title stand out */
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const SkillText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  strong {
    color: #00aced; /* Highlight key skills with the same blue */
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    font-size: 1.2rem;
    margin: 0.5rem 1rem;
    padding: 0.5rem 1rem;
    background-color: #004080; /* Lighter navy blue for the skill item */
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0074d9; /* Hover effect to lighten the skill block */
    }
  }
`;

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SkillText>
        I have a strong foundation in web development and programming languages.
        I am proficient in <strong>HTML</strong>, <strong>CSS</strong>, and
        <strong>JavaScript</strong> for creating dynamic and responsive web
        interfaces. Additionally, I have hands-on experience with
        <strong>React</strong> for building single-page applications,
        <strong>Node.js</strong> for server-side development, and
        <strong>Spring Boot</strong> for backend development. My knowledge
        also extends to <strong>Python</strong> for scripting and
        problem-solving, and I am continuously expanding my skills to stay
        up-to-date with the latest technologies.
      </SkillText>
      <SkillList>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
        <li>Java</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Spring Boot</li>
      </SkillList>
    </SkillsSection>
  );
};

export default Skills;
