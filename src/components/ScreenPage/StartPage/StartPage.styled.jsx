import styled from 'styled-components';

export const HomeMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 68px);
  width: 100%;
`;

export const MessageText = styled.p`
  width: 486px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${p => p.theme.colors.thirdFontColor};
`;

export const CreateMessage = styled.span`
  color: ${p => p.theme.colors.mainAccentColor};
  cursor: pointer;
  transition: all ${p => p.theme.cubicTransition};

  &:hover {
    color: ${p => p.theme.colors.secondAccentColor};
  }
`;
