import styled from 'styled-components';

export const MainDashboardContainer = styled.div`
  outline: 1px solid tomato;
  background-color: lightblue;
  padding-left: ${p => p.theme.spacing(12)};
  display: grid;
  column-gap: ${p => p.theme.spacing(9)};
  grid-template-columns: repeat(auto-fit, 350px);
  grid-auto-flow: column;
  overflow-x: scroll;
`;

export const Column = styled.div`
  /* min-width: 292px; */
  width: 350px;
  background-color: tomato;
  outline: 2px solid green;
  display: grid;
  gap: 20px;
`;
