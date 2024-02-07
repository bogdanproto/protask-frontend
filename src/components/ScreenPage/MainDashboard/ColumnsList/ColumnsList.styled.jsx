import styled from 'styled-components';

export const List = styled.ul`
  outline: 3px solid green;
  background-color: lightblue;

  display: grid;
  column-gap: ${p => p.theme.spacing(9)};
  grid-template-columns: repeat(auto-fit, 350px);
  grid-auto-flow: column;
`;
