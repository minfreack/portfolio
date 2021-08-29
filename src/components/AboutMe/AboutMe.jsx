import React from 'react';
import styled from 'styled-components';
import { SectionGrid } from '../Commons/SectionGrid';
import { SectionTitleBottom, SectionTitleTop } from '../Commons/SectionTitles';
import { StaticImage } from 'gatsby-plugin-image';

const Biography = styled.div`

`;

const StyledP = styled.p`
font-size: 1.20rem;
@media screen and (max-width: 767.9px){
  font-size: 1rem;
}
`;


export const AboutMe = () => {
	return (
		<SectionGrid id="about">
			<SectionTitleTop>&#60;AboutMe&#62;</SectionTitleTop>
			<Biography>
				<StyledP>¡Hola, soy Luis! Tengo 21 años y actualmente vivo en Puebla, México. 🏡
				</StyledP>
				<StyledP>
          Soy un apasionado del conocimiento 📚 y disfruto aplicar lo que sé en la resolución de problemas.
          Me encanta compartir mis ideas con gente de todo tipo y ampliar mi panorama escuchando sus opiniones.💡
				</StyledP>
				<br/>
				<StyledP>
        Pero ¡hey! no todo es programar asi que en mis tiempos libres me gusta leer 📖, escuchar podcasts 🎧 y hacer ejercicio 💪🏻.
				</StyledP>
			</Biography>
			<StaticImage
				src="../../images/profile2.png"
				alt="Profile Picture"
				width={300}
				placeholder="none"
				height={450}
				quality="100"
			/>
			<SectionTitleBottom>&#60;AboutMe/&#62;</SectionTitleBottom>
		</SectionGrid>
	);
};
