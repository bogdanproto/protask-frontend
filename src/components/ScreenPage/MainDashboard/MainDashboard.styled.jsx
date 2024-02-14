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

  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background: ${p => p.theme.colors.secondBackgroundColor};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${p => p.theme.colors.scrollbarThumbColor};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${p => p.theme.colors.accentColor};
  }

  background-image: ${props => `url(${props.wallpaper?.mobileCloudURL})`};
  background-size: cover;
  background-position: center;

  @media (min-width: 375px) and (max-width: 767px) {
    background-image: ${props => `url(${props.wallpaper?.tabletCloudURL})`};
  }

  @media (min-width: 768px) {
    background-image: ${props => `url(${props.wallpaper?.desktopCloudURL})`};
  }
`;
