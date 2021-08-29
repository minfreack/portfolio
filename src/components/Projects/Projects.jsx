import React from 'react';
import styled from 'styled-components';
import { SectionGrid } from '../Commons/SectionGrid';
import { SectionTitleBottom, SectionTitleTop } from '../Commons/SectionTitles';
import Carousel from 'react-grid-carousel';
import { StaticImage } from 'gatsby-plugin-image';
import { UilGithub, UilLink } from '@iconscout/react-unicons';
import './projects.css';
import { ButtonWithIcon } from '../Commons/ButtonWithIcon';
import { H3 } from '../Commons/H3';

const Card = styled.div`
display: flex;
flex-flow: column wrap;
background-color: #ffff;
border-radius: 1rem;
padding: 1.25rem;
margin: 1rem 2.5rem;
@media screen and (max-width: 1023.9px){
  margin: 0;
  padding: .75rem;
}
`;

const H4 = styled.h4`
font-size: 1.25rem;
font-weight: 700;
justify-self: flex-start;
color: ${props => props.black ? '#010101' : '#fff'};
`;

const StyledP = styled.p`
font-size: 1.20rem;
color: #010101;
@media screen and (max-width: 767.9px){
  font-size: 1rem;
}
`;

const UsedTechnologies = styled.div`
display: flex;
flex-flow: row nowrap;
align-items: center;
`;

const Links = styled.div`
display: flex;
flex-flow: row nowrap;
gap: .5rem;
justify-content: center;
padding: .5rem 0 0;

@media screen and (max-width: 767.9px){
flex-flow: row wrap;
}
`;


export const Projects = () => {
	return (
		<SectionGrid onecolumn id="projects">
			<SectionTitleTop>&#60;Projects&#62;</SectionTitleTop>
			<H3 variant>Estos son algunos de los proyectos que he realizado: 👩🏻‍💻</H3>
			<Carousel cols={2} rows={1} gap={10} mobileBreakpoint={767.9} loop>
				<Carousel.Item>
					<Card>
						<H4 black>To do List</H4>
						<StaticImage
							src="../../images/todo-list.png"
							alt="Profile Picture"
							placeholder="none"
							quality="100"
							className="project-image"
						/>
						<UsedTechnologies>
							<StyledP>Tecnologías utilizadas:</StyledP>
							<StaticImage
								src="../../images/iconb-html.svg"
								quality="100"
								alt="html"
							/>
							<StaticImage
								src="../../images/iconb-css.svg"
								quality="100"
								alt="html"
							/>
							<StaticImage
								src="../../images/iconb-react.svg"
								quality="100"
								alt="html"
							/>
						</UsedTechnologies>
						<Links>
							<ButtonWithIcon href="https://github.com/minfreack/To-Do-List" target="_blank" variant>Ver repo &nbsp;<UilGithub/></ButtonWithIcon>
							<ButtonWithIcon href="https://minfreack.github.io/To-Do-List/" target="_blank" variant>Ir al sitio &nbsp;<UilLink/></ButtonWithIcon>
						</Links>
					</Card>
				</Carousel.Item>
				<Carousel.Item>
					<Card>
						<H4 black>Tip Calculator</H4>
						<StaticImage
							src="../../images/tip-calculator.png"
							alt="Profile Picture"
							placeholder="none"
							quality="100"
							className="project-image"
						/>
						<UsedTechnologies>
							<StyledP>Tecnologías utilizadas:</StyledP>
							<StaticImage
								src="../../images/iconb-html.svg"
								quality="100"
								alt="html"
							/>
							<StaticImage
								src="../../images/iconb-sass.svg"
								quality="100"
								alt="html"
							/>
							<StaticImage
								src="../../images/iconb-react.svg"
								quality="100"
								alt="html"
							/>
						</UsedTechnologies>
						<Links>
							<ButtonWithIcon href="https://github.com/minfreack/tip-calculator" target="_blank" variant>Ver repo &nbsp;<UilGithub/></ButtonWithIcon>
							<ButtonWithIcon href="https://minfreack.github.io/tip-calculator/" target="_blank" variant>Ir al sitio &nbsp;<UilLink/></ButtonWithIcon>
						</Links>
					</Card>
				</Carousel.Item>
			</Carousel>
			<SectionTitleBottom>&#60;Projects/&#62;</SectionTitleBottom>
		</SectionGrid>
    
	);
};
