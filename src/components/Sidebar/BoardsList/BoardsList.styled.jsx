import styled from 'styled-components';

export const Boards = styled.div`
  padding-top: ${p => p.theme.spacing(12)};
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: calc(100vh - 420px);
`;

export const TitlePlate = styled.div`
  display: flex;
  align-items: end;
  justify-content: start;
  height: 74px;
  width: calc(100% - 14px);
  margin-left: ${p => p.theme.spacing(7)};

  @media (min-width: 768px) {
    height: 80px;
    width: calc(100% - 24px);
    margin-left: ${p => p.theme.spacing(12)};
  }

  @media (min-width: 1440px) {
    height: 48px;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.spacing(4)};
  font-size: 12px;
  opacity: 0.5;
  font-weight: 400;
  color: ${p => p.theme.colors.secondFontColor};

  letter-spacing: -0.02em;
`;

export const CreateButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 28px);
  height: 70px;
  border-top: 1px solid ${p => p.theme.colors.sidebarLineColor};
  border-bottom: 1px solid ${p => p.theme.colors.sidebarLineColor};
  padding-block: 14px;
  color: ${p => p.theme.colors.secondFontColor};
  cursor: pointer;
  margin-left: ${p => p.theme.spacing(7)};
  transition: all ${p => p.theme.cubicTransition};

  @media (min-width: 768px) {
    width: calc(100% - 48px);
    margin-left: ${p => p.theme.spacing(12)};
  }

  &:hover {
    color: ${p => p.theme.colors.secondAccentColor};

    div {
      transition: all ${p => p.theme.cubicTransition};
      color: white;
      background-color: ${p => p.theme.colors.secondAccentColor};
    }
  }

  span {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
  }
`;

export const IconWrapper = styled.div`
  color: ${p => p.theme.colors.addBoardIconColor2};
  background-color: ${p => p.theme.colors.addBoardIconColor};
  width: 40px;
  height: 36px;
  border-radius: ${p => p.theme.radius};
`;

export const List = styled.ul`
  margin-top: ${p => p.theme.spacing(12)};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${p => p.theme.spacing(2)};

  overflow: auto;

  @media (min-width: 1440px) {
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
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  opacity: 0.5;
  cursor: pointer;
  color: ${p => p.theme.colors.secondFontColor};

  @media (min-width: 768px) {
  }

  &.active {
    opacity: 1;
    background-color: ${p => p.theme.colors.activeBoardBackgroundColor};

    &::after {
      content: '';

      position: absolute;
      right: 0;
      top: 0;

      width: 4px;
      height: 100%;

      background-color: ${p => p.theme.colors.thirdAccentColor};
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
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
