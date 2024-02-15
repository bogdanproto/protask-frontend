import styled from 'styled-components';

export const BoardContainer = styled.div`
  height: 61px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${p => p.theme.spacing(7)};

  @media (min-width: 768px) {
    padding-left: ${p => p.theme.spacing(12)};
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BoardTitle = styled.h3`
  max-width: 110px;
  font-size: 24px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    min-width: 130px;
  }
`;

export const BtnContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  padding-right: ${p => p.theme.spacing(9)};

  button {
    line-height: 0;

    svg {
      opacity: 0.5;
    }
  }
`;
