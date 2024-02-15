import styled from 'styled-components';

export const PopUpAuthStyled = styled.div`
  min-width: 280px;
  width: calc(100vw - 40px);
  max-width: 335px;
  padding: 24px;

  background-color: #151515;
  border-radius: 8px;

  @media (min-width: 768px) {
    max-width: 424px;
    padding: 40px;
  }
`;
