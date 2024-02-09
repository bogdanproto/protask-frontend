import styled from 'styled-components';

export const ActionContainer = styled.div`
  height: 31px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;

export const ActionButton = styled.div`
  padding: ${p => p.theme.spacing(2)};
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: ${p => p.theme.colors.fontColor};

  transition: all ${p => p.theme.cubicTransition};

  &:hover {
    color: ${p => p.theme.colors.accentColor};
  }
`;
