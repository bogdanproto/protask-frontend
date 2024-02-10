import styled from 'styled-components';

export const HomePage = styled.div`
  display: flex;
  width: 100vw;
`;

export const FakeBox = styled.div`
  width: calc(100vw - 260px);
`;

export const FakeHeader = styled.div`
  height: 68px;
  background-color: ${p => p.theme.colors.thirdBackgroundColor};
  /* background-color: darkgray; */
`;

export const FakeSidebar = styled.div`
  width: 260px;
  height: 100vh;
  background-color: ${p => p.theme.colors.secondBackgroundColor};
  /* background-color: darkgray; */
`;