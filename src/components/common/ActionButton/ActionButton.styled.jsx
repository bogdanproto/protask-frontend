import styled from 'styled-components';

export const ActionButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;

  transition: all ${p => p.theme.cubicTransition};

  svg {
    color: ${p => p.theme.colors.mainFontColor};
    opacity: 0.5;
    transition: all ${p => p.theme.cubicTransition};
  }

  &:hover {
    color: ${p => p.theme.colors.mainAccentColor};
    opacity: 1;
    box-shadow: ${({ theme }) =>
      `0 0 3px 3px ${theme.colors.secondAccentColor}`};
  }
`;
