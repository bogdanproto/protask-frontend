import styled from 'styled-components';

export const ScreenPage = styled.main`
  height: calc(100vh - 68px);
  background-color: ${p => p.theme.colors.firstBackgroundColor};
`;

export const BoardNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 400px;
  background-color: tomato;
  font-size: 36px;
  font-weight: 700;
`;
