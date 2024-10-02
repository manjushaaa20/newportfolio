import React from 'react';
import styled from 'styled-components';

// Contact section styling
const ContactSection = styled.section`
  background-color: #001f3f;
  color: white;
  padding: 4rem 2rem; /* Increase padding */
  text-align: center;
`;

const ContactBox = styled.div`
  background-color: white;
  color: #001f3f;
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Add box shadow for decoration */
  margin-bottom: 2rem; /* Add margin */
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem; /* Increased padding */
  margin: 1rem 0; /* Add margin for spacing */
  border-radius: 5px;
  border: 1px solid #001f3f;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin: 1rem 0; /* Add margin for spacing */
  border-radius: 5px;
  border: 1px solid #001f3f;
  height: 100px;
`;

const Button = styled.button`
  background-color: #001f3f;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: #003366;
  }
`;

const ContactMe = () => {
  return (
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <ContactBox>
        <Input type="text" placeholder="Your Name" />
        <label>Email:</label>
        <Input type="email" placeholder="Your Email" />
        <label>Message:</label>
        <Textarea placeholder="Your Message"></Textarea>
        <Button type="submit">Send</Button>
      </ContactBox>
    </ContactSection>
  );
};

export default ContactMe;
