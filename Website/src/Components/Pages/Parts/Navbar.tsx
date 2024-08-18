import styled from 'styled-components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';





const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  flex-direction: row;


  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;


  const Logo = styled.div`
  font-size: 1.5rem;
  font-family: 'Sans Serif';
`;


  const NavLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    &:hover {
      text-decoration: underline;
    }
      @media (max-width: 768px) {

    display: ${() => isOpen ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;

  }
  }
`;

  const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    height: 100%;

  }

`;

  const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    padding: 10px;
    border-bottom: 1px solid white;
  }
`;


  return (
    <>
      <NavbarContainer id="grid-2" >
        <div><h1 >MyApp</h1></div>
        
        <div >
        <MenuIcon  onClick={() => setIsOpen(!isOpen)}>
          <div>☰</div>
        </MenuIcon>
        {isOpen && (
          <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">About</NavLink>
            <NavLink to="/aboutme">Services</NavLink>
            <NavLink to="/contactme">Contact</NavLink>
            <NavLink to="/blog">blog</NavLink>
          </NavLinks>
        )}
        </div>

  
      </NavbarContainer>


    </>
  );

}

export default Navbar;