import styled from 'styled-components';

export const HeaderDashboardContainer = styled.div`
  height: 48px;
  padding: ${p => p.theme.spacing(5)} ${p => p.theme.spacing(12)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoardTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.fontColor};
`;
