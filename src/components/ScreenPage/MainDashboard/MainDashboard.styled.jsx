import styled from 'styled-components';

export const MainDashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 134px);
  overflow-x: scroll;
  overflow-y: hidden;

  gap: ${p => p.theme.spacing(9)};
  padding-left: ${p => p.theme.spacing(12)};
  padding-right: ${p => p.theme.spacing(10)};

  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background: ${p => p.theme.colors.scrollbarTrackColor};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${p => p.theme.colors.scrollbarThumbColor};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${p => p.theme.colors.mainAccentColor};
  }

  @media (min-width: 768px) {
    height: calc(100vh - 148px);
  }

  @media (min-width: 1440px) {
    height: calc(100vh - 116px);
  }
`;
