import styled from 'styled-components';

export const ColumnTitlePlate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.spacing(10)};
  width: 334px;
  outline: 2px solid red;
`;
