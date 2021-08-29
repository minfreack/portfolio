import styled from 'styled-components';

export const SectionGrid = styled.section`
display: grid;
grid-template-columns: ${props => props.onecolumn ? '1fr' : 'repeat(2, 1fr)'};
justify-items: center;
align-items: ${props => props.variant ? 'flex-start' : 'center'};
padding: 3.75rem 4rem 0;

@media screen and (max-width: 767.9px){
  grid-template-columns: 1fr;
  padding: 2rem 2rem;
  height: auto;
}
`;
