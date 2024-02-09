import styled from 'styled-components';

export const ColumnContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: start;
  gap: ${p => p.theme.spacing(7)};
  width: 350px;
  overflow: hidden;
`;

export const ColumnTitlePlate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.spacing(9)} ${p => p.theme.spacing(10)};
  width: 334px;
  height: 56px;
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.colors.secondBackgroundColor};
  color: ${p => p.theme.colors.fontColor};
  font-size: 14px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ActionButton = styled.button`
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
