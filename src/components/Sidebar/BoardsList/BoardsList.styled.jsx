import styled from 'styled-components';

export const Boards = styled.div`
  padding: 60px 0 0 0;

  @media (min-width: 768px) {
    padding: 60px 0 0 0;
  }

  @media (min-width: 1440px) {
    padding: 60px 0 0 0;
  }
`;

export const Title = styled.h2`
  font-size: 12px;
  opacity: 0.5;
  font-weight: 400;
  color: ${p => p.theme.colors.secondFontColor};
  margin-bottom: 8px;

  letter-spacing: -0.02em;

  @media (min-width: 768px) {
  }
`;

export const CreateButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${p => p.theme.colors.sidebarLineColor};
  border-bottom: 1px solid ${p => p.theme.colors.sidebarLineColor};
  padding-block: 14px;
  color: ${p => p.theme.colors.secondFontColor};

  @media (min-width: 768px) {
  }

  span {
    max-width: 76px;
    font-weight: 500;
    letter-spacing: -0.02em;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-block: 40px;
  max-height: 22vh;
  overflow: auto;

  @media (min-width: 1440px) {
    max-height: 22vh;
  }

  &::-webkit-scrollbar {
    width: 4px;
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

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-block: 20px;

  opacity: 0.5;
  cursor: pointer;
  color: ${p => p.theme.colors.secondFontColor};

  @media (min-width: 768px) {
  }

  &.active {
    opacity: 1;
    background-color: ${p => p.theme.colors.activeBoardBackgroundColor};
  }

  svg {
    fill: transparent;
  }

  h3 {
    color: ${p => p.theme.colors.secondFontColor};
    margin-bottom: 0;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
  }
`;
