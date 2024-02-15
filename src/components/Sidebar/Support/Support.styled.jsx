import styled from 'styled-components';

export const SupportBox = styled.div`
  background-color: ${p => p.theme.colors.needHelpBackgroundColor};
  border-radius: 8px;
  padding: ${p => p.theme.spacing(7)};
  max-height: 238px;
  width: 197px;
  margin-left: ${p => p.theme.spacing(7)};

  @media (min-width: 768px) {
    max-height: 272px;
    width: 212px;
    padding: ${p => p.theme.spacing(7)} ${p => p.theme.spacing(10)};
    margin-left: ${p => p.theme.spacing(12)};
  }

  p {
    color: ${p => p.theme.colors.secondFontColor};
    line-height: 16px;
    font-size: 12px;
    width: 168px;

    letter-spacing: -0.02em;

    margin-top: 14px;
    margin-bottom: 18px;

    /* @media (min-width: 768px) {
      font-size: 12px;
      line-height: 16px;
    } */

    span {
      color: ${p => p.theme.colors.mainAccentColor};
    }
  }
`;

export const HelpButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 94px;
  height: 18px;
  gap: 8px;
  color: ${p => p.theme.colors.mainFontColor};
  font-size: 12px;
  white-space: nowrap;
  transition: all ${p => p.theme.cubicTransition};

  svg {
    stroke: ${p => p.theme.colors.mainFontColor};
  }

  &:hover {
    color: ${p => p.theme.colors.secondAccentColor};
  }
`;
