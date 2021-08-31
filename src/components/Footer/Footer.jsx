import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
display: flex;
justify-content: center;
margin: .5rem;
`;

const StyledP = styled.p`
font-size: .75rem;
`;

const Span = styled.span`
font-weight: 600;
`;

export const Footer = () => {
	return (
		<StyledFooter>
			<StyledP>Hecho con 🤍 por <Span>Luis Ernesto</Span></StyledP>
		</StyledFooter>
	);
};
