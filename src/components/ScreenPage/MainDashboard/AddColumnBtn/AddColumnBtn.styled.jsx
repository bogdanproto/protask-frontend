import styled from 'styled-components';

export const AddColumnBtnContainer = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  min-width: 334px;
  height: 56px;
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.colors.secondBackgroundColor};
  color: ${p => p.theme.colors.fontColor};
  font-size: 14px;
  transition: all ${p => p.theme.cubicTransition};
  outline: 2px solid red;

  &:hover {
    color: ${p => p.theme.colors.accentColor};
  }
`;
