import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  column-gap: ${p => p.theme.spacing(9)};
  grid-template-columns: repeat(auto-fit, 350px);
  grid-auto-flow: column;
  overflow-y: no-scroll;
`;
