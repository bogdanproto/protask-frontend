import styled from 'styled-components';

export const MainDashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 116px);
  overflow-x: scroll;
  overflow-y: hidden;

  gap: ${p => p.theme.spacing(9)};
  padding-left: ${p => p.theme.spacing(12)};
  /* background-color: tomato; */
`;

export const Column = styled.div`
  /* min-width: 292px; */
  width: 350px;
  /* background-color: tomato; */
  outline: 2px solid green;
  display: grid;
  gap: 20px;
`;
