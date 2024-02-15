import styled from 'styled-components';

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${p => p.theme.spacing(7)};
  min-width: 292px;
  width: calc(100vw - 28px);
  max-width: 350px;
  height: 100%;
  overflow: hidden;
`;

export const ColumnTitlePlate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.spacing(8)};
  min-width: 280px;
  width: calc(100vw - 40px);
  max-width: 335px;
  height: 56px;
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.colors.cardBackgroundColor};
`;

export const ColumnTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${p => p.theme.colors.mainFontColor};
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
