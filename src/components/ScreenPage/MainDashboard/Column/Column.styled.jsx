import styled from 'styled-components';

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(7)};
  width: 350px;
  overflow-y: no-scroll;
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
  outline: 2px solid red;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CtrlButton = styled.button`
  display: flex;
  padding: ${p => p.theme.spacing(2)};
  color: rgba(22, 22, 22, 0.5);
`;
