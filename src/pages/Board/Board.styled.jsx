import styled from 'styled-components';

export const ScreenPage = styled.main`
  height: calc(100vh - 60px);

  background-image: ${props => `url(${props.wallpaper?.mobileCloudURL})`};
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    height: calc(100vh - 68px);
    background-image: ${props => `url(${props.wallpaper?.tabletCloudURL})`};
  }

  @media (min-width: 1440px) {
    background-image: ${props => `url(${props.wallpaper?.desktopCloudURL})`};
  }
`;
