import styled from 'styled-components';

export const SectionTitleTop = styled.h2`
grid-column: 1 / 4;
font-size: 2rem;
justify-self: flex-start;
margin: 1rem 0;
@media screen and (max-width: 767.9px){
  grid-column: 1 / 1;
}
`;

export const SectionTitleBottom = styled.h2`
grid-column: 1 / 4;
font-size: 2rem;
justify-self: flex-end;
margin: 1rem 0;
@media screen and (max-width: 767.9px){
  grid-column: 1 / 1;
}
`;

