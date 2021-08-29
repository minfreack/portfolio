import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { H3 } from '../Commons/H3';
import { SectionGrid } from '../Commons/SectionGrid';
import { SectionTitleBottom, SectionTitleTop } from '../Commons/SectionTitles';

const TechnologiesDominated = styled.div`
width: 17rem;
margin: 3rem 0 5rem;
`;

const Row = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
column-gap: 1rem;
row-gap: 2.5rem;
`;

export const Skills = () => {
	return (
		<SectionGrid variant id="skills">
			<SectionTitleTop>&#60;Skills&#62;</SectionTitleTop>
			<TechnologiesDominated>
				<H3>Tecnologías que domino💻</H3>
				<Row>
					<StaticImage
						src="../../images/icon-html.svg"
						quality="100"
						alt="html"
					/>
					<StaticImage
						src="../../images/icon-css.svg"
						quality="100"
						alt="css"
					/>
					<StaticImage
						src="../../images/icon-sass.svg"
						quality="100"
						alt="sass"
					/>
					<StaticImage
						src="../../images/icon-js.svg"
						quality="100"
						alt="javascript"
					/>
					<StaticImage
						src="../../images/icon-react.svg"
						quality="100"
						alt="react"
					/>
					<StaticImage
						src="../../images/icon-jquery.svg"
						quality="100"
						alt="jquery"
					/>
					<StaticImage
						src="../../images/icon-github.svg"
						quality="100"
						alt="github"
					/>
					<StaticImage
						src="../../images/icon-git.svg"
						quality="100"
						alt="git"
					/>
					<StaticImage
						src="../../images/icon-wordpress.svg"
						quality="100"
						alt="wordpress"
					/>
				</Row>
			</TechnologiesDominated>
			<TechnologiesDominated>
				<H3>Estoy aprendiendo 📚</H3>
				<Row>
					<StaticImage
						src="../../images/icon-redux.svg"
						quality="100"
						alt="redux"
					/>
					<StaticImage
						src="../../images/icon-gatsby.svg"
						quality="100"
						alt="gatsby"
					/>
					<StaticImage
						src="../../images/icon-styled.svg"
						quality="100"
						alt="styled-components"
					/>
					<StaticImage
						src="../../images/icon-nextjs.svg"
						quality="100"
						alt="nextjs"
					/>
					<StaticImage
						src="../../images/icon-typescript.svg"
						quality="100"
						alt="typescript"
					/>
				</Row>
			</TechnologiesDominated>
			<SectionTitleBottom>&#60;Skills/&#62;</SectionTitleBottom>
		</SectionGrid>
	);
};
