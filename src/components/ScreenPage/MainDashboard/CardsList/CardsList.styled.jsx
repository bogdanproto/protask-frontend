import styled from 'styled-components';

export const List = styled.div`
  width: 350px;
  max-height: calc(100vh - 292px);

  display: grid;
  row-gap: ${p => p.theme.spacing(4)};
  grid-template-rows: minmax(154px);
  grid-auto-rows: minmax(154px);
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${p => p.theme.colors.scrollbarTrackColor};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.scrollbarThumbColor};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${p => p.theme.colors.mainAccentColor};
  }
`;
