import styled from 'styled-components';

export const H3 = styled.h3`
font-size: 1.25rem;
font-weight: 400;
grid-column: 1 / 6;
margin-bottom: 2rem;
text-align: center;
margin: ${props => props.variant && '2rem 0'};
justify-self: ${props => props.variant && 'flex-start'};
`;
