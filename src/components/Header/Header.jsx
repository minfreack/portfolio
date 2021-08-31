import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { UilLinkedin, UilGithub, UilInstagram, UilImport } from '@iconscout/react-unicons';
import cv from '../../assets/LuisErnestoRamirezCastillo-DesarrolladorFrontEnd.pdf';
import { SectionGrid } from '../Commons/SectionGrid';
import { ButtonWithIcon } from '../Commons/ButtonWithIcon';
import Slide from 'react-reveal/Slide';

const Presentation = styled.div`
text-align: left;
`;

const H1 = styled.h1`
font-size: 2.25rem;
font-weight: 400;
@media screen and (max-width: 1023.9px){
  font-size: 1.25rem;
}

`;

const Span = styled.span`
font-weight: 600;
`;

const SocialButtons = styled.div`
display: flex;
flex-flow: row wrap;
column-gap: 1rem;
margin: 1rem 0;
`;

const SocialIcon = styled.a`
font-size: 2rem;
`;


export const Header = () => {
	return (
		<SectionGrid>
			<Slide left>
				<Presentation>
					<H1>¡Hey hola! 🖐🏻 <br/>
        Soy Luis Ernesto un <Span>Front End <br/>Developer</Span> que ama aprender y desarrollar <Span>cosas increíbles.</Span></H1>
					<SocialButtons>
						<SocialIcon href="https://www.linkedin.com/in/luis-ernesto-ramirez-castillo/" target="_blank"><UilLinkedin size={25}/></SocialIcon>
						<SocialIcon href="https://github.com/minfreack" target="_blank"><UilGithub size={25}/></SocialIcon>
						<SocialIcon href="https://www.instagram.com/minfreack/" target="_blank"><UilInstagram size={25}/></SocialIcon>
					</SocialButtons>
					<ButtonWithIcon href={cv} download>Descargar CV &nbsp;<UilImport/></ButtonWithIcon>
				</Presentation>
			</Slide>
			<StaticImage
				src="../../images/profilepicture.jpg"
				alt="Profile Picture"
				width={370}
				placeholder="none"
				height={505}
				quality="100"
			/>
		</SectionGrid>
	);
};
