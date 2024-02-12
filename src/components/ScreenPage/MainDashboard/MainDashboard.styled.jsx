import styled from 'styled-components';

export const MainDashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 116px);
  overflow-x: scroll;
  overflow-y: hidden;

  gap: ${p => p.theme.spacing(9)};
  padding-left: ${p => p.theme.spacing(12)};
  padding-right: ${p => p.theme.spacing(10)};
`;

export const Column = styled.div`
  width: 350px;

  outline: 2px solid green;
  display: grid;
  gap: 20px;
`;
