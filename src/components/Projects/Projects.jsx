import React from 'react';
import styled from 'styled-components';
import { SectionGrid } from '../Commons/SectionGrid';
import { SectionTitleBottom, SectionTitleTop } from '../Commons/SectionTitles';
import { StaticImage } from 'gatsby-plugin-image';
import { UilGithub, UilLink } from '@iconscout/react-unicons';
import './projects.css';
import { ButtonWithIcon } from '../Commons/ButtonWithIcon';
import { H3 } from '../Commons/H3';
import Slide from 'react-reveal/Slide';

const Card = styled.div`
display: flex;
flex-flow: column wrap;
background-color: #ffff;
border-radius: 1rem;
padding: 1.25rem;
margin: 1rem 2.5rem;
@media screen and (max-width: 1023.9px){
  margin: 1rem;
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
			<SectionGrid projects>
				<Slide left>
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
				</Slide>
				<Slide left>
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
				</Slide>
				<Slide left>
					<Card>
						<H4 black>Playlist Generator</H4>
						<StaticImage
							src="../../images/playlist.png"
							alt="Playlist Generator"
							placeholder="none"
							quality="100"
							className="project-image"
						/>
						<UsedTechnologies>
							<StyledP>Tecnologías utilizadas:</StyledP>
							<StaticImage
								src="../../images/iconb-react.svg"
								quality="100"
								alt="html"
							/>
							<StaticImage
								src="../../images/iconb-styled.svg"
								quality="100"
								alt="html"
							/>
						</UsedTechnologies>
						<Links>
							<ButtonWithIcon href="https://github.com/minfreack/playlist_generator" target="_blank" variant>Ver repo &nbsp;<UilGithub/></ButtonWithIcon>
							<ButtonWithIcon href="https://playlist-generator.vercel.app" target="_blank" variant>Ir al sitio &nbsp;<UilLink/></ButtonWithIcon>
						</Links>
					</Card>
				</Slide>
				<Slide left>
					<Card>
						<H4 black>E-commerce Enfiesta2</H4>
						<StaticImage
							src="../../images/enfiesta2.png"
							alt="E-commerce Enfiesta2"
							placeholder="none"
							quality="100"
							className="project-image"
						/>
						<UsedTechnologies>
							<StyledP>Tecnologías utilizadas:</StyledP>
							<StaticImage
								src="../../images/iconb-wordpress.svg"
								quality="100"
								alt="html"
							/>
							<StaticImage
								src="../../images/iconb-css.svg"
								quality="100"
								alt="html"
							/>
						</UsedTechnologies>
						<Links>
							<ButtonWithIcon href="https://papelpicadoenfiesta2.com" target="_blank" variant>Ir al sitio &nbsp;<UilLink/></ButtonWithIcon>
						</Links>
					</Card>
				</Slide>
				<Slide left>
					<Card>
						<H4 black>E-commerce Cometa</H4>
						<StaticImage
							src="../../images/cometa.png"
							alt="E-commerce Cometa"
							placeholder="none"
							quality="100"
							className="project-image"
						/>
						<UsedTechnologies>
							<StyledP>Tecnologías utilizadas:</StyledP>
							<StaticImage
								src="../../images/iconb-wordpress.svg"
								quality="100"
								alt="html"
							/>
							<StaticImage
								src="../../images/iconb-css.svg"
								quality="100"
								alt="html"
							/>
						</UsedTechnologies>
						<Links>
							<ButtonWithIcon href="https://cometapapelpicado.com" target="_blank" variant>Ir al sitio &nbsp;<UilLink/></ButtonWithIcon>
						</Links>
					</Card>
				</Slide>
			</SectionGrid>
			<SectionTitleBottom>&#60;Projects/&#62;</SectionTitleBottom>
		</SectionGrid>
    
	);
};
