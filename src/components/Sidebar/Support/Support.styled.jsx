import styled from 'styled-components';

export const SupportBox = styled.div`
  background-color: ${p => p.theme.colors.needHelpBackgroundColor};
  border-radius: 8px;
  padding: 20px;
  height: 238px;
  width: 197px;

  @media (min-width: 768px) {
    height: 272px;
    width: 212px;
  }

  p {
    padding-block: 15px;
    color: ${p => p.theme.colors.secondFontColor};
    line-height: 16px;

    letter-spacing: -0.02em;
    font-size: 12px;

    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 20px;
    }

    span {
      color: ${p => p.theme.colors.mainAccentColor};
    }
  }
`;

export const HelpButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${p => p.theme.colors.mainFontColor};
  font-size: 12px;

  svg {
    stroke: ${p => p.theme.colors.mainFontColor};
    fill: transparent;
  }
`;
