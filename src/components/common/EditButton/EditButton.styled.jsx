import styled from 'styled-components';

export const EditButton = styled.button`
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

export const MoveButton = styled.div`
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

  .ReactModalPortal {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
