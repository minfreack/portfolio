import React from 'react';
import styled from 'styled-components';
import { SectionGrid } from '../Commons/SectionGrid';
import { SectionTitleBottom, SectionTitleTop } from '../Commons/SectionTitles';
import { UilAngleDown } from '@iconscout/react-unicons';
import './experience.css';
import { useState } from 'react';
import { H3 } from '../Commons/H3';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const ExperienceSection = styled.div`
margin: 6rem 0 5rem;
@media screen and (max-width: 1023.9px){
  margin: 2rem 0;
}
`;

const ExperienceItem = styled.div`
display: grid;
grid-template-columns: 35% 60% 5%;
align-items: center;
padding: 1rem 0 .5rem;
border-bottom: 1px solid #fff;
width: 28rem;
@media screen and (max-width: 767.9px){
  width: auto;
  gap: 0;
}
@media screen and (min-width: 768px ) and (max-width: 1023.9px){
  width: auto;
  gap: 0;
  margin-left: 1rem;
}
`;

const H4 = styled.h4`
font-size: .9rem;
font-weight: 400;
justify-self: flex-start;
color: ${props => props.black ? '#010101' : '#fff'};
@media screen and (max-width: 1023.9px){
  font-size: .8rem;
}
`;

const ExperienceJob = styled.div`
`;

const StyledP = styled.p`
font-size: ${props => props.variant ? '.85rem' : '1.1rem'};
font-style: ${props => props.variant && 'italic'};
padding-bottom: .5rem;
padding: ${props => props.variant ? '.5rem 0' : '0 0 .5rem 0'};
color: #fff;
@media screen and (max-width: 1023.9px){
  font-size: ${props => props.variant ? '.75rem' : '.9rem'};
}
`;

const ExperienceJobDescription = styled.div`
grid-column: 1 / 4;
display: none;
transition: .4s;
@media screen and (max-width: 1023.9px){
  grid-column: 1 / 3;
}
`;

const StyledUilAngleDown = styled(UilAngleDown)`
cursor: pointer;
transition: .4s;
`;

export const Experience = () => {

	const [jobExperience, setJobExperience] = useState({
		'item1': false,
		'item2': false,
		'item3': false,
	});

	return (
		<SectionGrid variant id="experience">
			<SectionTitleTop>&#60;Experience&#62;</SectionTitleTop>
			<ExperienceSection>
				<H3>Experiencia laboral ????</H3>
				<Fade top>
					<ExperienceItem >
						<H4>Ago 2020 - Dic 2020</H4>
						<ExperienceJob>
							<StyledP>Instructor de Cursos</StyledP>
							<StyledP>Volkswagen Group Academy</StyledP>
						</ExperienceJob>
						<StyledUilAngleDown className={`${jobExperience.item1 == true && 'active-icon'}`}
							onClick={() => setJobExperience({...jobExperience, item1 : !jobExperience.item1})}/>
						<ExperienceJobDescription className={`${jobExperience.item1 == true && 'active'}`}>
							<Slide top>
								<StyledP variant>Fui encargado de las capacitaciones de Office Excel 2019 en su nivel Intermedio y Avanzado.
            Adem??s realic?? actividades como capacitar a empleados en trabajos propios, supervisar instructores y evaluar
            desempe??o de los participantes.
								</StyledP>
							</Slide>
						</ExperienceJobDescription>
					</ExperienceItem>
				</Fade>
				<Fade top>
					<ExperienceItem >
						<H4>Sep 2019 - Ene 2021</H4>
						<ExperienceJob>
							<StyledP>Desarrollador E-learning</StyledP>
							<StyledP>Idea Training</StyledP>
						</ExperienceJob>
						<StyledUilAngleDown className={`${jobExperience.item2 == true && 'active-icon'}`}
							onClick={() => setJobExperience({...jobExperience, item2 : !jobExperience.item2})}/>
						<ExperienceJobDescription className={`${jobExperience.item2 == true && 'active'}`}>
							<Slide top>
								<StyledP variant>Desarroll?? y auxili?? en m??s de 10 cursos E-learning en el software Adobe Captivate.
            Adem??s de esto tuve la oportunidad de impartir junto a un colaborador un curso de Desarrollo de Cursos 
            E-learning orientados a la plataforma Articulate 360.
								</StyledP>
							</Slide>
						</ExperienceJobDescription>
					</ExperienceItem>
				</Fade>
				<Fade top>
					<ExperienceItem>
						<H4>Jun 2021 - Actual</H4>
						<ExperienceJob>
							<StyledP>Desarrollador Web</StyledP>
							<StyledP>Agencia Cometa</StyledP>
						</ExperienceJob>
						<StyledUilAngleDown className={`${jobExperience.item3 == true && 'active-icon'}`}
							onClick={() => setJobExperience({...jobExperience, item3 : !jobExperience.item3})}/>
						<ExperienceJobDescription className={`${jobExperience.item3 == true && 'active'}`}>
							<Slide top>
								<StyledP variant>Soy el encargado del desarrollo e implementaci??n de E-commerce en 
            Wordpress con WooCommerce. Hasta ahora he desarrollado 3 tiendas de distintos rubros
             que actualmente se encuentran en funcionamiento.
								</StyledP>
							</Slide>
						</ExperienceJobDescription>
					</ExperienceItem>
				</Fade>
			</ExperienceSection>
			<ExperienceSection>
				<H3>Estudios y certificaciones ????</H3>
				<Fade top>
					<ExperienceItem>
						<H4>Sep 2018 - Ago 2020</H4>
						<ExperienceJob>
							<StyledP>T.S.U. Desarrollo de Software</StyledP>
							<StyledP>Unv. Tecnol??gica de Tehuac??n</StyledP>
						</ExperienceJob>
					</ExperienceItem>
				</Fade>
				<Fade top>
					<ExperienceItem >
						<H4>Sep 2020 - Abr 2022</H4>
						<ExperienceJob>
							<StyledP>Ing. Desarrollo de Software</StyledP>
							<StyledP>Unv. Tecnol??gica de Tehuac??n</StyledP>
						</ExperienceJob>
					</ExperienceItem>
				</Fade>
				<Fade top>
					<ExperienceItem >
						<H4>Jun 2021</H4>
						<ExperienceJob>
							<StyledP>JavaScript Moderno</StyledP>
							<StyledP>Udemy - Fernando Herrera</StyledP>
						</ExperienceJob>
					</ExperienceItem>
				</Fade>
			</ExperienceSection>
			<SectionTitleBottom>&#60;Experience/&#62;</SectionTitleBottom>
		</SectionGrid>
	);
};
