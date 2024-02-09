import styled from 'styled-components';

export const List = styled.ul`
  outline: 2 px solid pink;
  width: 350px;
  height: calc(100vh - 292px);

  display: grid;
  row-gap: ${p => p.theme.spacing(4)};
  grid-template-rows: minmax(154px);
  grid-auto-rows: minmax(154px);
  overflow-y: scroll;
  overflow-x: hidden;
`;
