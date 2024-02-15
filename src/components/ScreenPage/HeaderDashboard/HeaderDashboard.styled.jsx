import styled from 'styled-components';

export const HeaderDashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  padding: ${p => p.theme.spacing(7)} ${p => p.theme.spacing(10)}
    ${p => p.theme.spacing(19)} ${p => p.theme.spacing(10)};

  @media (min-width: 768px) {
    height: 80px;
    padding: ${p => p.theme.spacing(13)} ${p => p.theme.spacing(16)};
  }

  @media (min-width: 1440px) {
    height: 48px;
    padding: ${p => p.theme.spacing(5)} ${p => p.theme.spacing(12)};
  }
`;

export const BoardTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.mainFontColor};
  /* backdrop-filter: invert(20%); */
  /* padding: 0 ${p => p.theme.spacing(5)}; */
  /* border-radius: ${p => p.theme.radius}; */

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
`;
