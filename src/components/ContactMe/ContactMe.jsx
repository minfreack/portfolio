import React from 'react';
import styled from 'styled-components';
import { SectionGrid } from '../Commons/SectionGrid';
import { SectionTitleBottom, SectionTitleTop } from '../Commons/SectionTitles';
import { UilLinkedin, UilGithub, UilInstagram, UilEnvelope } from '@iconscout/react-unicons';
import { H3 } from '../Commons/H3';
import Fade from 'react-reveal/Fade';

const ContactCard = styled.div`
grid-column: 1 / 6;
display: grid;
grid-template-columns: repeat(2, 1fr);
background-color: #ffff;
border-radius: 1rem;
padding: 2rem 3rem;
margin: 6rem 12rem;
column-gap: 5rem;
row-gap: 1rem;
@media screen and (max-width: 767.9px){
  padding: 2rem 1rem;
  margin: 2rem 0rem;
  column-gap: 2rem;
}
`;

const Email = styled.div`
display: flex;
gap: .75rem;
border-bottom: 1px solid #010101;
padding-bottom: 0.5rem;
`;

const EmailInfo = styled.div`
`;

const SocialMedia = styled.div`
display: flex;
gap: .75rem;
border-bottom: 1px solid #010101;
justify-content: center;
`;

const H4 = styled.h4`
font-size: 1.25rem;
font-weight: 400;
text-align: ${props => props.variant ? 'center' : 'left'};
color: ${props => props.black ? '#010101' : '#fff'};
@media screen and (max-width: 767.9px){
  font-size: .8rem;
}
`;

const StyledP = styled.p`
font-size: ${props => props.variant ? '.75rem' : '1.1rem'};
font-style: ${props => props.italic && 'italic'};
padding: .25rem 0;
color: ${props => props.black ? '#010101' : '#fff'};
color: ${props => props.gray && '#A3A3A3'};
@media screen and (max-width: 767.9px){
  font-size: ${props => props.variant ? '.75rem' : '.9rem'};
}
`;

const SocialButtons = styled.div`
display: flex;
flex-flow: row wrap;
column-gap: 1rem;
justify-content: center;
align-items: center;
padding: .5rem 0 0;
`;

const SocialIcon = styled.a`
font-size: 1rem;
color: #010101;
`;

const H2 = styled.h2`
  grid-column: 1 / 3;
  color: #010101;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  @media screen and (max-width: 767.9px){
  font-size: 1.5rem;
}
`;

const Phrases = styled.div`
grid-column: 1 / 3;
`;

export const ContactMe = () => {
	return (
		<SectionGrid id="contact">
			<SectionTitleTop>&#60;ContactMe&#62;</SectionTitleTop>
			<H3>🌟 ¡Desarrollemos proyectos geniales juntos! 🌟</H3>
			<ContactCard>
				<Email>
					<Fade top>
						<H4 black><UilEnvelope/></H4>
						<EmailInfo>
							<H4 black>neto2racas@gmail.com</H4>
							<StyledP gray variant>Síentete libre de contactarme si tienes alguna pregunta o simplemente buscas a alguien con quien platicar.</StyledP>
						</EmailInfo>
					</Fade>
				</Email>
				<SocialMedia>
					<Fade top>
						<EmailInfo>
							<H4 black variant>También puedes contactarme en:</H4>
							<SocialButtons>
								<SocialIcon href="https://www.linkedin.com/in/luis-ernesto-ramirez-castillo/" target="_blank"><UilLinkedin size={25}/></SocialIcon>
								<SocialIcon href="https://github.com/minfreack" target="_blank"><UilGithub size={25}/></SocialIcon>
								<SocialIcon href="https://www.instagram.com/minfreack/" target="_blank"><UilInstagram size={25}/></SocialIcon>
							</SocialButtons>
						</EmailInfo>
					</Fade>
				</SocialMedia>
				<Phrases>
					<Fade top>
						<H2> La única forma de hacer un buen trabajo es amar lo que haces 💖</H2>
					</Fade>
				</Phrases>
			</ContactCard>
			<SectionTitleBottom>&#60;ContactMe/&#62;</SectionTitleBottom>
		</SectionGrid>
	);
};
