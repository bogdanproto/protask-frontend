import styled from 'styled-components';

export const ActionButton = styled.button`
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
    color: ${p => p.theme.colors.fontColor};
    opacity: 0.5;
  }

  &:hover {
    background-color: ${p => p.theme.colors.accentColor};
  }
`;

export const MoveButton = styled.button`
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
    color: ${p => p.theme.colors.fontColor};
    opacity: 0.5;
  }

  &:hover {
    background-color: ${p => p.theme.colors.accentColor};
  }
`;
