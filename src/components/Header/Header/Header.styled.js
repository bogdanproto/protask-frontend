import styled from 'styled-components';

export const HeaderWrap = styled.header`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  width: 100%;
  padding: 14px 20px;
  background-color: ${p => p.theme.colors.headerBackgroundColor};
  color: ${p => p.theme.colors.mainFontColor};

  @media (min-width: 768px) {
    height: 68px;
  }

  @media (min-width: 1440px) {
    justify-content: right;
  }
`;

export const ThemeInfoWrap = styled.div`
  display: flex;
  gap: 14px;
`;
