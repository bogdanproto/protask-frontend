import styled from 'styled-components';

export const AddColumnBtnContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.spacing(7)} ${p => p.theme.spacing(34)};
  gap: ${p => p.theme.spacing(4)};
  width: 334px;
  height: 56px;
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.colors.secondBackgroundColor};
  color: ${p => p.theme.colors.fontColor};
  font-size: 14px;
`;
