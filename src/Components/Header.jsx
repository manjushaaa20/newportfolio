import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const NavItem = styled.li`
  a {
    color: white;
    font-size: 1.2rem;
    &:hover {
      color: #007bff;
    }
  }
`;

const Header = () => {
  return (
    <Navbar>
      <NavList>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/skills">Skills</Link></NavItem>
        <NavItem><Link to="/projects">Projects</Link></NavItem>
        <NavItem><Link to="/contact">Contact</Link></NavItem>
      </NavList>
    </Navbar>
  );
};

export default Header;
