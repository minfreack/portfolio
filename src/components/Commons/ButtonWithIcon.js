import styled from 'styled-components';

export const ButtonWithIcon = styled.a`
color: ${props => props.variant ? '#fff' : '#010101'};
background-color: ${props => props.variant ? '#010101' : '#fff'};
padding: .75rem 1rem;
border-radius: 1.5rem;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
width: 12rem;

@media screen and (max-width: 1023.9px){
 color: ${props => props.variant ? '#fff' : '#010101'};
 background-color: ${props => props.variant ? '#010101' : '#fff'};
 padding: ${props => props.variant ? '.25rem .75rem' : '.75rem 1rem'};;
 width: ${props => props.variant ? 'auto' : '12rem'};
 font-size: ${props => props.variant ? '.75rem' : '1rem'};
}
`;