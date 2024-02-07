import styled from 'styled-components';

export const List = styled.ul`
  outline: 2 px solid pink;
  background-color: yellow;

  display: grid;
  row-gap: ${p => p.theme.spacing(4)};
  grid-template-rows: 154px;
  grid-auto-rows: 154px;
  overflow-y: scroll;
`;
