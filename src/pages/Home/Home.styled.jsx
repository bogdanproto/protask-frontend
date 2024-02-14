import styled from 'styled-components';

export const HomePage = styled.div`
  display: flex;
  width: 100vw;
  background-color: ${p => p.theme.colors.homepageBackgroundColor};
  /* background-color: tomato; */
`;

export const Main = styled.div`
  width: 100vw;

  @media (min-width: 1440px) {
    width: calc(100vw - 260px);
  }
`;
