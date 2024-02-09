import styled from 'styled-components';

export const HeaderDashboardContainer = styled.div`
  /* outline: 1px solid tomato; */
  height: 48px;
  padding: ${p => p.theme.spacing(5)} ${p => p.theme.spacing(12)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoardTitle = styled.h2`
  font-size: 18px;
  color: ${p => p.theme.colors.fontColor};
  letter-spacing: -0.02em;
`;
