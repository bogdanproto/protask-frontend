import styled from 'styled-components';

export const EditButtonWrapper = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${p => p.theme.colors.fontColor};
  background-color: transparent;

  transition: all ${p => p.theme.cubicTransition};

  &:hover {
    background-color: ${p => p.theme.colors.accentColor};
  }
`;
