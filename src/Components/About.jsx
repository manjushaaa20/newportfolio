import React from 'react';
import styled from 'styled-components';

// Styled components for layout
const AboutSection = styled.section`
  background-color: white;
  border-radius: 10px;
  box-shadow: 100px 100px 100px rgba(0, 0, 0, 0.1);
  padding: 100px;
  max-width: 100%;
  margin: 2rem auto;
  text-align: center;
  margin-bottom 100px,100px,100px,100px;
  line-hieght:100px
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1.5rem 1.5rem;
`;

const Details = styled.div`
  margin-top: 1.5rem 1.5rem;
`;

const DetailItem = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0.5rem;
`;

const About = () => {
  return (
    <AboutSection>
      {/* Profile Picture */}
      <ProfilePic src="/port.JPG" alt="Manjusha's Profile Picture" />

      {/* Your personal details */}
      <h2>Manjusha</h2>
      <p>3rd Year Diploma Student in Computer Science & Engineering</p>

      <Details>
        <DetailItem><strong>College:</strong> Karnataka Polytechnic Mangalore</DetailItem>
        <DetailItem><strong>Email:</strong> <a href="mailto:your.email@example.com">Manjushaacharya919@gmail.com</a></DetailItem>
        <DetailItem><strong>Phone:</strong> +91 9900498728</DetailItem>
      </Details>
    </AboutSection>
  );
};

export default About;
