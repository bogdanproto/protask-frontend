import styled from 'styled-components';

export const MoveButton = styled.div`
  position: relative;
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

  .ReactModalPortal {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const TargetColumnsList = styled.ul`
  display: grid;
  grid-template-rows: 29px;
  grid-auto-rows: 29px;
`;

export const TargetColumnButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  height: 29px;
  width: 135px;

  padding: ${p => p.theme.spacing(4)} ${p => p.theme.spacing(9)};
  color: ${p => p.theme.colors.modalPopupBackgroundColor};

  transition: all ${p => p.theme.cubicTransition};

  &:hover {
    color: ${p => p.theme.colors.mainAccentColor};
  }
`;

export const ColumnTitle = styled.div`
  width: 135px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: start;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
