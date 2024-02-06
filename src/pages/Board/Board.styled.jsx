import styled from 'styled-components';

export const FakeContainer = styled.div`
  display: flex;
  width: 100vw;
`;

export const FakeBox = styled.div`
  width: calc(100vw - 260px);
  /* width: 100vw; */
`;

export const FakeHeader = styled.div`
  height: 68px;

  background-color: ${p => p.theme.colors.headerBackgroundColor};
  background-color: darkgray;
`;

export const FakeSidebar = styled.div`
  width: 260px;
  height: 100vh;
  background-color: ${p => p.theme.colors.sidebarBackgroundColor};
  background-color: darkgray;
`;
