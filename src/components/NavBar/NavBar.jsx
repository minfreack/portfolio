import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { UilBars } from '@iconscout/react-unicons';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';

const Nav = styled.nav`
padding: 0 2rem;
position: sticky;
top: 0;
z-index: 1;
background-color: #010101;
padding: 1.5rem 0;
`;

const Menu = styled.div`
display: flex;
justify-content: center;
column-gap: 2.5rem;
position: relative;
@media screen and (max-width: 1023.9px){
  column-gap: 0;
  align-items: center;
  justify-content: space-evenly;
  flex-flow: column wrap;
  width: 100%;
  max-height: ${({isOpen}) => (isOpen ? '300px' : '0')};
  overflow: hidden;
}
`;

const Hamburguer = styled.div`
display: none;
@media screen and (max-width: 1023.9px){
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  padding: 0 1rem;
}
`;

const NavLink = styled(Link)`
font-size: 1.05rem;
transition: .5s;
border-bottom: 2px solid transparent;
padding-bottom: 0.25rem;
font-weight: 500;
&:hover{
  border-bottom: 2px solid white;
  transition: .5s;
}
`;
export const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Nav>
			<Fade top>
				<Hamburguer onClick={() => setIsOpen(!isOpen)}><UilBars/></Hamburguer>
				<Menu isOpen={isOpen}>
					<NavLink to="/">Hola! 🖐🏻</NavLink>
					<NavLink to="#about">Acerca de 👩🏻‍💻</NavLink>
					<NavLink to="#skills">Skills ⚙</NavLink>
					<NavLink to="#projects">Proyectos 💻</NavLink>
					<NavLink to="#experience">Experiencia 💼</NavLink>
					<NavLink to="#contact">Contacto ✉</NavLink>
				</Menu>
			</Fade>
		</Nav>
	);
};
