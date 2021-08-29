import * as React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { AboutMe } from '../components/AboutMe/AboutMe';
import { ContactMe } from '../components/ContactMe/ContactMe';
import { Experience } from '../components/Experience/Experience';
import { Header } from '../components/Header/Header';
import { NavBar } from '../components/NavBar/NavBar';
import { Projects } from '../components/Projects/Projects';
import { Skills } from '../components/Skills/Skills';

const GlobalStyles = createGlobalStyle`

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  }
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #010101;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: #fff;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;
const IndexPage = () => {


	return (
		<>
			<Helmet>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>        
			</Helmet>
			<GlobalStyles/>
			<NavBar/>
			<Header/>
			<AboutMe/>
			<Skills/>
			<Projects/>
			<Experience/>
			<ContactMe/>
		</>
	);
};

export default IndexPage;
